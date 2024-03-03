import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { LeftOutline } from 'antd-mobile-icons'

interface Iprops {
  routerInfo: any
}

const leftPath = ['/', '/myOrder', '/userCenter'] // 需要隐藏的路由

const routePath = [
  {
    pathname: '/',
    pageTitle: 'Booking System',
  },
  {
    pathname: '/myOrder',
    pageTitle: 'My Booking',
  },
  {
    pathname: '/userCenter',
    pageTitle: 'User Center',
  },
  {
    pathname: '/search',
    pageTitle: 'Booking System',
  },
  {
    pathname: '/shop',
    pageTitle: ' ',
  },
  {
    pathname: '/roomList',
    pageTitle: 'Choose room',
  },
  {
    pathname: '/order',
    pageTitle: 'Payment',
  },
  {
    pathname: '/userCenter/mUserInfo',
    pageTitle: 'User information',
  },
  {
    pathname: '/userCenter/star',
    pageTitle: 'My star',
  },
  {
    pathname: '/payment',
    pageTitle: 'Pay method',
  },
  {
    pathname: '/login',
    pageTitle: 'Login',
  },
  {
    pathname: '/login/register',
    pageTitle: 'Register',
  },
  {
    pathname: '/login/reset',
    pageTitle: 'Reset Password',
  },
]

const index: React.FC<Iprops> = ({routerInfo}) => {
  const [showLeft, setShowLeft] = useState(false)
  const [title, setTitle] = useState('Booking System')
  useEffect(() => {
    const { pathname, query: { pageTitle = '' } } = routerInfo
    const lIndex = leftPath.findIndex(item => item === pathname)
    setShowLeft(lIndex === -1)
    const page = routePath.find(item => item.pathname === pathname)
    setTitle(page ? page.pageTitle : 'Booking System')
  }, [routerInfo])

  const back = () => {
    routerInfo.back()
  }
  return (
    <header className={Styles['container']}>
      <div className={Styles['left']}>
      { showLeft && <LeftOutline onClick={() => back()} /> }
      </div>
      <p>{ title  }</p>
      <div className={Styles['right']}>
      </div>
    </header>
  )
}
export default index