import React, { Component } from 'react'
import { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { VOD_TYPE_TAGS, PATH_KEY } from '@/constants'
import { goRouter } from '@/utils'
import { fetchVodRecommend } from '@/api'
import Card from '@/components/common/Card'
import Screen from '@/components/VodScreen'

interface Iprops {
  type: string,
  sList: Array<any>,
  screenParams: object
}

interface Istate {
  tags: Array<any>,
  activeTab: string
}

class VodScreen extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      tags: VOD_TYPE_TAGS[this.props.type],
      activeTab: 'screen'
    }
  }
  activeTab = (activeTab: string) => {
    const { type } = this.props
    goRouter({pathKey: PATH_KEY.VOD_TYPE, query: { type }})
  }
  render(): React.ReactNode {
    const { sList, type, screenParams } = this.props
    const { tags, activeTab } = this.state
    return (
      <div className={Styles['container']}>
        <Card tags={tags} activeTab={activeTab} clickTab={this.activeTab}>
          <Screen sList={sList} type={type} screenParams={screenParams} />
        </Card>
      </div>
    )
 }
}
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let sList = []
  let type = ''
  let tag = ''
  let area = ''
  let year = ''
  let platform = ''
  let sort = 'U'
  const qList = context.params._type_tag_area_year_platform_sort.split('_')
  if ( qList.length === 1) {
    type = qList[0].replace('.html','')
    if (year === '') {
      year = type === 'movie' ? `${new Date().getFullYear()}` : ''
    }
  } else {
    type = qList[0]
    tag = qList[1]
    area = qList[2]
    year = qList[3]
    platform = qList[4]
    sort = qList[5].replace('.html','')
  }
  const params = {
    type, tag, area, year, platform, sort,
    pageNo: 1,
    pageSize: 20, 
  }
  const { code, data } = await fetchVodRecommend(params)
  if (code === 200 && data) {
    sList = data
  }
  return { props: { type, sList, screenParams: params } }
}
export default VodScreen