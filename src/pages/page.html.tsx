import React, { Component } from 'react'
import { GetServerSideProps } from 'next'
import Styles from './page.module.scss'
import { Base64 } from '@/utils'
import { DotLoading } from 'antd-mobile'

interface Iprops {
  url: string
}

interface Istate {
}

class PageUrl extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    const { url } = this.props
    return (
      <div className={Styles['container']}>
        <div className={Styles['loading-box']}>
          <div>
            <span>第三方资源加载中，请稍后</span>
            <DotLoading color='currentColor' />
          </div>
        </div>
        <iframe
          className={Styles['ifarme']}
          id="engine"
          name="engine"
          scrolling="auto"
          width="100%"
          frameBorder="0"
          allowFullScreen
          src={url} />
      </div>
    )
 }
}
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { query: { url = '/' } } = context
  return { props: { url: Base64.decode(url)} }
}
export default PageUrl