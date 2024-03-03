import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { USER_INFO } from '@/constants/booking'
import { getUserInfo } from '@/utils/storage'
import { goBookingRouter } from '@/utils/router'
import { Badge, TabBar } from 'antd-mobile'
import {
  FaceRecognitionOutline,
  UserOutline,
  SearchOutline
} from 'antd-mobile-icons'
interface Iprops {
  routerInfo: any
}

interface Istate {
}

const initState = {
}

const PageBottom: React.FC<Iprops> = ({routerInfo}) => {
  const [show, setShow] = useState(false)
  const [activeKey, setActiveKey] = useState('home')
  const [userInfo, setUserInfo] = useState(USER_INFO)
  const tabs = [
    {
      key: 'home',
      title: 'Search',
      icon: <SearchOutline />,
      badge: Badge.dot,
    },
    {
      key: 'myOrder',
      title: 'Bookings',
      icon: <FaceRecognitionOutline />,
      badge: '99+',
    },
    {
      key: 'userCenter',
      title: 'Profile',
      icon: <UserOutline />,
    },
  ] 
  useEffect(() => {
    const { pathname } = routerInfo
    setUserInfo(getUserInfo())
    if (pathname.indexOf('login') === -1) {
      setShow(true)
    } else {
      setShow(false)
    }
    pathname === '/' && setActiveKey('home')
    pathname === '/myOrder' && setActiveKey('myOrder')
    pathname === '/userCenter' && setActiveKey('userCenter')
  }, [routerInfo.pathname])
  
  const handleActive = (key: string) => {
    setActiveKey(key)
    if (!userInfo.token && key === 'userCenter') {
      goBookingRouter({pathKey: 'login'})
    } else {
      goBookingRouter({pathKey: key})
    }
  }
  return (
    <>
      {
        show
          ? <TabBar activeKey={activeKey} onChange={ key => handleActive(key) } className={Styles['tab-bar-container']}>
              {tabs.map(item => (
                <TabBar.Item
                  className={Styles['tab-bar-item']}
                  key={item.key}
                  icon={item.icon}
                  title={item.title} />
              ))}
            </TabBar>
          : ''
      }
    </>
  )
}
export default PageBottom