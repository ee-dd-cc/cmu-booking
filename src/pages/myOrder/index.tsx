import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import dayjs from 'dayjs'
import { ORDER_LIST } from '@/constants/booking'
import { CapsuleTabs, Image, Rate, Toast } from 'antd-mobile'

interface Iprops {
}

const index: React.FC<Iprops> = ({}) => {
  const [activeKey, setActiveKey] = useState('active')
  const [orderList, setOrderList] = useState(ORDER_LIST)
  useEffect(() => {
    const list = ORDER_LIST.filter(item => item.status === activeKey)
    setOrderList(list)
  }, [activeKey])
  
  const handlePrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price)
  }

  const handleCancel = (id: number) => {
    const temp = orderList.filter(item => item.id !== id)
    Toast.show({
      icon: 'success',
      content: 'success',
    })
    setOrderList(temp)
  }

  return (
    <div className={Styles['container']}>
      <div className={Styles['tab-box']}>
        <CapsuleTabs activeKey={activeKey} onChange={val => setActiveKey(val)}>
          <CapsuleTabs.Tab title='Active' key='active'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Past' key='past'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Cancelled' key='cancel'>
          </CapsuleTabs.Tab>
        </CapsuleTabs>
      </div>
      {
        orderList.map((item, index) => (
          <div key={index} className={Styles['room-item']}>
            <div className={Styles['left']}>
              <Image src={item.imgSrc} width={100} height={100} fit='fill' style={{borderRadius: '8px'}} />
            </div>
            <div className={Styles['right']}>
              <div className={Styles['title-box']}>
                <p>{item.name}</p>
                <span>No: {item.no}</span>
              </div>
              <div className={Styles['rate-box']}>
                <Rate value={item.start} style={{'--star-size': '12px', marginRight: '10px'}} />
                <span>{item.score}</span>
              </div>
              <div className={Styles['member-box']}>
                {dayjs(item.startTime).format('MMM DD')}
                &nbsp;&nbsp;-&nbsp;&nbsp;
                {dayjs(item.endTime).format('MMM DD')}
                {/* <Rate value={item.start} style={{'--star-size': '12px', marginRight: '10px'}} />
                <span>{item.score}</span> */}
              </div>
              <div className={Styles['price-box']}>
                <div>
                  Price for {item.day} night:
                  {
                    activeKey === 'active'
                    &&
                    <p>THB {handlePrice(item.price * item.day)}</p>
                  }
                </div>
                {
                  activeKey === 'active'
                  ?
                  <div className={Styles['btn-box']}>
                    <div className="theme-btn-1" onClick={() => handleCancel(item.id)}>
                      <p>cancel</p>
                    </div>
                  </div>
                  : <p>THB {handlePrice(item.price * item.day)}</p>
                }
              </div>
            </div>
          </div>  
        ))
      }
    </div>
  )
}
export default index