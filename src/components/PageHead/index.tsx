import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { LeftOutline } from 'antd-mobile-icons'

interface Iprops {
  routerInfo: any
}


const leftPath = ['/', '/userCenter'] // 需要隐藏的路由

const index: React.FC<Iprops> = ({routerInfo}) => {
  const [showLeft, setShowLeft] = useState(false)
  const [title, setTitle] = useState('Booking System')
  useEffect(() => {
    const { pathname, query: { pageTitle = '' } } = routerInfo
    const lIndex = leftPath.findIndex(item => item === pathname)
    setShowLeft(lIndex === -1)
    pageTitle && setTitle(pageTitle)
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