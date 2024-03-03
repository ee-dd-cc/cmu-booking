import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { ROOM_LIST } from '@/constants/booking'
import { goBookingRouter } from '@/utils/router'
import { UserAddOutline } from 'antd-mobile-icons'

interface Iprops {
}

const index: React.FC<Iprops> = ({}) => {
  useEffect(() => {
  }, [])
  const handleOrder = (id: number) => {
    goBookingRouter({pathKey: 'order', query: { id }})
  }
  return (
    <div className={Styles['container']}>
      {
        ROOM_LIST.map((item, index) => (
          <div key={index} className={Styles['room-item']}> 
            <div className={Styles['title-box']}>
              <p>{item.name}</p>
              <span>No: {item.no}</span>
            </div>
            <div className={Styles['member-box']}>
              <p>Price for up to:</p>
              <UserAddOutline />
              <UserAddOutline />
            </div>
            <div className={Styles['price-box']}>
              <div>
                Price for 1 night:
                <p>THB {item.price}</p>
              </div>
              <div className={Styles['btn-box']}>
                <div className="theme-btn-1" onClick={() => handleOrder(item.id)}>
                  <p>Order</p>
                </div>
              </div>
            </div>
          </div>  
        ))
      }
    </div>
  )
}
export default index