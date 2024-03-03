// import 'antd/dist/reset.css'
import { useRef, useState, useEffect } from 'react'
import '@/styles/global.scss'
import '@/styles/antReset.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import HtmlHead from '@/components/HtmlHead'
import PageHead from '@/components/PageHead'
import PageBottom from '@/components/PageBottom'

const bottomPath = ['/', '/myOrder', '/userCenter']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const menuRef:any = useRef(null)
  const global = {
    showAppMenu: false,
  }
  const [showHead, setShowHead] = useState(true)
  const [showBottom, setShowBottom] = useState(true)

  useEffect(() => {
    const { pathname } = router
    const index =  bottomPath.findIndex(item => item === pathname)
    setShowBottom(index !== -1)
  }, [router])

  return (
    <>
      <ConfigProvider locale={enUS}>
        <HtmlHead pageProps={pageProps}  />
        <section className="layout-container" style={{ paddingTop: showHead ? '62px' : '' }}>
          {
            <PageHead routerInfo={router} />
          }
          <main className='layout-main'>
            <aside className="sider-container sider-left">
              {/* <PageMenu ref={menuRef} setGlobal={setGlobal} routerInfo={router} /> */}
            </aside>
            <div className="layout-main-right">
              <div className="main-content">
                <Component {...pageProps} routerInfo={router} />
              </div>
              <aside className="sider-container sider-right">
                {/* <Rank /> */}
              </aside>
            </div>
            <div className="layout-main-bottom">
              { showBottom && <PageBottom routerInfo={router} /> }
            </div>
          </main>
        </section>
      </ConfigProvider>
    </>  
  )
}
