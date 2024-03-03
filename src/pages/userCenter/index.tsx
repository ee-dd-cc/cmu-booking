import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { USER_INFO } from '@/constants/booking'
import { getUserInfo, setUserInfo } from '@/utils/storage'
import { goBookingRouter } from '@/utils/router'
import { List, Avatar } from 'antd-mobile'
import { CouponOutline, BillOutline, HeartOutline } from 'antd-mobile-icons'
interface Iprops {
  routerInfo: any
}

const UserCenter: React.FC<Iprops> = ({routerInfo}) => {
  const [userInfo, sUserInfo] = useState(USER_INFO)
  const [list, setList] = useState([
    {
      content: '',
      des: '',
      extra: 'Modify information',
      key: 'user',
      icon: <Avatar src={userInfo.avatar} />,
      pathKey: 'mUserInfo',
      show: true
    },
    {
      content: 'My star',
      des: '',
      extra: 'View shop start',
      key: 'userStar',
      icon: <HeartOutline />,
      pathKey: 'userStar',
      show: true
    },
    {
      content: 'Payment',
      des: '',
      extra: 'Modify payment method',
      key: 'payment',
      icon: <BillOutline />,
      pathKey: 'payment',
      show: true
    },
    // {
    //   content: 'My rooms',
    //   des: '',
    //   extra: '',
    //   key: 'myRooms',
    //   icon: <AppOutline />,
    //   pathKey: 'myRooms',
    //   show: true
    // },
    {
      content: 'Sign Out',
      des: '',
      extra: '',
      key: 'signOut',
      icon: <CouponOutline />,
      pathKey: 'login',
      show: true
    },

  ])
  useEffect(() => {
    sUserInfo(getUserInfo())
    const index = list.findIndex(item => item.key === 'user')
    list[index].content = getUserInfo().username
    if (!getUserInfo().token) {
      goBookingRouter({pathKey: 'home'})
    }
    setList(list)
  }, [routerInfo])
  const goPath = (path: string) => {
    if (path === 'login') {
      setUserInfo(USER_INFO)
    }
    goBookingRouter({pathKey: path})
  }
  return (
    <div className={Styles['container']}>
      <List className={Styles['list-container']}>
        {
          list.map((item, index) => (
            <div key={index}>
              {
                item.show
                  ? <List.Item
                      prefix={item.icon}
                      extra={item.extra}
                      onClick={() => goPath(item.pathKey)}
                      clickable>
                      { item.content }
                    </List.Item>
                  : ''
              }
            </div>
          ))
        }
      </List>
    </div>
  )
}
export default UserCenter