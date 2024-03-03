import React, { Component } from 'react'
import Link from 'next/link'
import Styles from './index.module.scss'
import { PATH_KEY, WEB_SITE } from '@/constants'
import { getRouterUrl, getLocalStorage, userAgent } from '@/utils'
import { Image } from 'antd-mobile'
import Search from './Search'
import Browser from '../common/Browser'

interface Iprops {
  setGlobal: any,
  global: any,
  routerInfo: any
}

interface Istate {
  theme: string,
  showBrowser: boolean // 是否显示微信/qq
}

class PageHead extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      theme: 'light',
      showBrowser: false
    }
  }
  componentDidMount(): void {
    const theme = getLocalStorage('theme')
    theme && this.setState({ theme })
    const { weixin, qq } = userAgent()
    if (weixin || qq) {
      this.setState({showBrowser: true})
    }
  }
  setGlobal() {
    const { setGlobal, global: { showAppMenu } } = this.props
    setGlobal(!showAppMenu)
  }
  render(): React.ReactNode {
    const { routerInfo } = this.props
    const { theme, showBrowser } = this.state
    return (
      <header className={Styles['container']}>
        <div className={Styles['logo']}>
          <Link href={getRouterUrl({pathKey: PATH_KEY.HOME})}>
            <div className={Styles['content']}>
              <Image
                className={Styles['logo-img']}
                src={`/images/${theme}/logo.png`}
                alt={WEB_SITE.siteName}
                width={32}
                height={32}
                lazy/>
              <span>{WEB_SITE.siteName}</span>
            </div>
					</Link>
        </div>
        <div className={Styles['app-menu']}>
          {/* <Image
            className={Styles['menu-img']}
            onClick={() => this.setGlobal()}
            src={`/images/${theme}/menu.png`}
            alt="菜单"
            width={24}
            height={24}
            lazy/> */}
        </div>
        <div className={Styles['search']}>
          Booking System
          {/* <Search routerInfo={routerInfo} /> */}
        </div>
        <div></div>
        {
          showBrowser && <Browser />
        }
      </header>
    )
 }
}
export default PageHead