import React, { Component } from 'react'
import { withRouter, NextRouter } from 'next/router'
import { WEB_SITE, PAGE_PATH_NAME, HTML_TITLE, HTML_KEYWORDS, HTML_DES, HTML_URL, HTML_IMAGE } from '@/constants'

import Head from 'next/head'
declare const window: Window & { _hmt: any }

interface Props {
  htmlTitle?: string,
  router: NextRouter,
  pageProps?: any
}
class HtmlHead extends Component<Props, any> {
  static defaultProps = {
    htmlTitle: ''
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      webKey: ''
    }
  }
  pageMeta() {
    const { router: { pathname }, pageProps } = this.props
    let meta:any = ''
    switch (pathname) {
      case PAGE_PATH_NAME({key: 'VOD_DETAIL'}):
        const { vodInfo: { actors, directors, durations, genres, countries, rating, cover_url } } = pageProps
        const director = directors.length ? directors[0].name : ''
        const duration = durations.length ? durations[0] : ''
        meta = (
          <>
            <meta property="og:image" content={cover_url} />
            <meta property="og:type" content="video.movie" />
            <meta property="og:video:score" content={rating.value ? `${rating.value}分` : '暂无评分'} />
            <meta property="og:video:class" content={genres.join(',')} />
            <meta property="og:video:area" content={countries[0]} />
            {
              actors.map((item:any, index:number) => (
                <meta key={index} property="video:actor" content={item.name} />
              ))
            }
            <meta property="video:director" content={director} />
            <meta property="video:duration" content={duration} />
          </>
        )
        break;
    
      default:
        break;
    }
    return meta
  }
  render() {
    const { siteName } = WEB_SITE
    const { router: { pathname }, pageProps } = this.props
    return (
      <Head>
        <title>{HTML_TITLE({pathname, pageProps})}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=false" />
        <meta name="referrer" content="no-referrer" />
        <meta name="keywords" content={HTML_KEYWORDS({pathname, pageProps})} />
        <meta name="description" content={HTML_DES({pathname, pageProps})} />
        <meta property="og:title" content={HTML_TITLE({pathname, pageProps})} />
        <meta property="og:description" content={HTML_DES({pathname, pageProps})}></meta>
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={HTML_URL({pathname, pageProps})} />
        { this.pageMeta() }
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
  }
}

// export default HtmlHead

export default withRouter(HtmlHead)