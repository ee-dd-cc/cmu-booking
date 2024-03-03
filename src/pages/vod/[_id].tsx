import React, { Component } from 'react'
import { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { IvodInfo } from '@/types'
import { VOD_DETAIL_TAG } from '@/constants'
import { fetchMovieData } from '@/api'
import VodBanner from '@/components/VodDetail/VodBanner'
import Card from '@/components/common/Card'
import VodResources from '@/components/VodDetail/VodResources'
import VodDetail from '@/components/VodDetail/VodInfoList'

interface Iprops {
  vodInfo: IvodInfo,
  vodSource: any,
  type: string
}

interface Istate {
  tags: Array<any>,
  activeTab: string
}

class Vod extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      tags: VOD_DETAIL_TAG,
      activeTab: VOD_DETAIL_TAG[0].value
    }
  }
  componentDidUpdate(prevProps: any) {
    if (this.props.vodInfo !== prevProps.vodInfo) {
      this.setState({activeTab: VOD_DETAIL_TAG[0].value})
    }
  }
  activeTab = (activeTab: string) => {
    this.setState({activeTab})
  }
  cardContent() {
    const { vodInfo, vodSource } = this.props
    const { activeTab } = this.state
    let node:any = ''
    switch (activeTab) {
      case 'resources':
        node = <VodResources vodInfo={vodInfo} vodSource={vodSource} />
        break;
      case 'detail':
        node = <VodDetail vodInfo={vodInfo} />
      break;
      default:
        break;
    }
    return node
  }
  render(): React.ReactNode {
    const { vodInfo } = this.props
    const { tags, activeTab } = this.state
    return (
      <div className={Styles['container']}>
        <h1 className={Styles['vod-title']}>{vodInfo.title}</h1>
        <div className={Styles['vod-banner']}>
          <VodBanner vodInfo={vodInfo} />
        </div>
        <div className={Styles['vod-card']}>
          <Card tags={tags} activeTab={activeTab} clickTab={this.activeTab}>
            {this.cardContent()}
          </Card>
        </div>
      </div>
    )
 }
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let vodInfo:any = {}
  let vodSource:any = []
  const { params } = context
  const qList = params._id.split('_')
  const id = qList[0].replace('.html','')
  const { code, data } = await fetchMovieData({db_id: id, pageSize: 5})
  if (code === 200) {
    const { detail, source } = data
    const { rating, trailer, vendors } = detail
    detail.trailer = trailer ? trailer : {}
    detail.vendors = vendors ? vendors : []
    rating.value = rating.value ? rating.value.toFixed(1) : 0
    detail.rating = rating
    vodInfo = detail
    vodSource = source
  }
  return { props: { vodInfo, vodSource } }
}
export default Vod