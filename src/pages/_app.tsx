// import 'antd/dist/reset.css'
import { useRef, useState } from 'react'
import '@/styles/global.scss'
import '@/styles/antReset.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import HtmlHead from '@/components/HtmlHead'
import PageHead from '@/components/PageHead'
import PageBottom from '@/components/PageBottom'
import { show } from 'antd-mobile/es/components/dialog/show'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const menuRef:any = useRef(null)
  const global = {
    showAppMenu: false,
  }
  const [showHead, setShowHead] = useState(true)
  function setGlobal(showAppMenu:boolean) {
    global.showAppMenu = showAppMenu
    menuRef.current && menuRef.current?.showAppMenu(showAppMenu)
  }
  return (
    <>
      <ConfigProvider locale={enUS}>
        <HtmlHead pageProps={pageProps}  />
        <section className="layout-container" style={{ paddingTop: showHead ? '62px' : '' }}>
          {
            showHead && <PageHead setGlobal={setGlobal} global={global} routerInfo={router} />
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
              <PageBottom routerInfo={router} />
            </div>
          </main>
        </section>
      </ConfigProvider>
    </>  
  )
}
