import React, { Component } from 'react'
import { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { VOD_TYPE_TAGS } from '@/constants'
import { PATH_KEY } from '@/constants'
import { goRouter } from '@/utils'
import { fetchVodTypeHome } from '@/api'
import Card from '@/components/common/Card'
import Recommend from '@/components/VodType/Recommend'

interface Iprops {
  tabOptions: any,
  type: string
}
interface Istate {
  tags: Array<any>,
  activeTab: string
}
class VodType extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    const { type } = props
    this.state = {
      tags: VOD_TYPE_TAGS[type],
      activeTab: 'recommend'
    }
  }
  activeTab = (activeTab: string) => {
    const { type } = this.props
    activeTab === 'screen' && goRouter({pathKey: PATH_KEY.SCREEN_TYPE, query: { type }})
  }
  render(): React.ReactNode {
    const { type, tabOptions } = this.props
    const { activeTab } = this.state
    const tags = VOD_TYPE_TAGS[type]
    return (
      <div className={Styles['container']}>
        <Card tags={tags} activeTab={activeTab} clickTab={this.activeTab}>
          <Recommend tabOptions={tabOptions} loadConfig={{loading: false, msg: '加载更多'}} />
        </Card>
      </div>
    )
 }
}
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let tabOptions:any = {}
  const qList = context.params._type.split('_')
  const type = qList[0].replace('.html','')
  const { code, data } = await fetchVodTypeHome({ pageNo: 1, pageSize: 24, type })
  if (code === 200) {
    tabOptions = data || {}
    tabOptions.showMore = false
  }
  return { props: { tabOptions, type } }
}
export default VodType