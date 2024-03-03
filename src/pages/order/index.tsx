import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { ROOM_LIST, SHOP_PIC_LIST, PAYMENT_LIST } from '@/constants/booking'
import { Image, CapsuleTabs, Toast, Mask, DotLoading } from 'antd-mobile'
import HotelSearch from '@/components/common/HotelSearch'
import { goBookingRouter } from '@/utils/router'

interface Iprops {
  routerInfo: any;
}

interface Istate {
}

const initState = {
}

const SHOP_TAG = [
  {
    label: 'Free parking',
    svg: <svg style={{width: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path></svg>
  },
  {
    label: 'Swimming Pool',
    svg: <svg style={{width: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.097 21.71c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm0-4.5c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm-1.722-8.64a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zM7.777 14.636l3.831-2.4a.75.75 0 0 0 .166-1.13L8.964 7.9a2.25 2.25 0 0 1 .687-3.494l4.264-2.135a.751.751 0 1 1 .686 1.333l-.01.006-3.405 1.702a1.502 1.502 0 0 0-.448 2.334l5.375 6.142a.75.75 0 1 0 1.128-.988l-5.377-6.145-.002-.003v-.001l3.394-1.697.027-.013A2.25 2.25 0 0 0 13.238.93L8.98 3.065a3.749 3.749 0 0 0-1.144 5.824l2.81 3.206.166-1.13-3.831 2.4a.75.75 0 0 0 .796 1.272z"></path></svg>
  },
  {
    label: 'Free WiFi',
    svg: <svg style={{width: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z"></path></svg>
  },
  {
    label: 'Pets allowed',
    svg: <svg style={{width: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path></svg>
  },
  // {
  //   label: '24-hour front desk',
  //   svg: <svg style={{width: '35px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M127.32 53.67l-8 11.87a2.498 2.498 0 0 1-.21.24 2.285 2.285 0 0 1-.28.34l-.22.19c-.12.112-.247.215-.38.31a.777.777 0 0 1-.2.11c-.158.1-.321.19-.49.27h-.18a3.87 3.87 0 0 1-.58.18h-.19a3.08 3.08 0 0 1-.53.06h-.26a3.608 3.608 0 0 1-.46-.05l-.34-.07-.31-.1-.35-.13-.26-.14-.36-.21-11.81-8a4 4 0 0 1 4.46-6.54l4.89 3.3C106.987 30.316 85.347 12.036 60 12h-.65c-28.719.18-51.854 23.606-51.675 52.325C7.855 93.044 31.281 116.179 60 116h.65a52.22 52.22 0 0 0 44.5-26.18 4.005 4.005 0 0 1 6.94 4A60.26 60.26 0 0 1 60.74 124H60C26.863 123.999.001 97.135.002 63.998.003 30.86 26.867 3.998 60.004 4c28.511.001 53.084 20.065 58.786 48l1.9-2.82a4.002 4.002 0 1 1 6.64 4.47zm-69.74 2.47c-.038-7.677-6.253-13.892-13.93-13.93-10.1 0-12.76 8.08-14.19 12.42l-.18.57a4 4 0 0 0 7.59 2.53l.19-.6c1.55-4.7 2.7-6.92 6.59-6.92a5.94 5.94 0 0 1 5.93 5.93 5 5 0 0 1-1.47 3.56L30.24 77.57a4 4 0 0 0 2.83 6.83h20.51a4 4 0 0 0 0-8H42.72l11.05-11.05a13 13 0 0 0 3.81-9.21zM76.93 80.4v-2.84H63.84a4 4 0 0 1-3.39-6.12l17.09-27.35a4 4 0 0 1 7.39 2.12V80.4a4 4 0 0 1-8 0zm0-10.84v-9.4l-5.87 9.4z"></path></svg>
  // },
]

const index: React.FC<Iprops> = ({routerInfo}) => {
  const { query = {} } = routerInfo
  const [visible, setVisible] = useState(false)
  const [activeKey, setActiveKey] = useState(PAYMENT_LIST[0].key)
  const [shopInfo, setShopInfo] = useState(ROOM_LIST[0])
  const [pics, setPics] = useState(SHOP_PIC_LIST.filter((item, index) => index < 5))
  useEffect(() => {
    const { id } = query
    const item = ROOM_LIST.find(item => item.id === id)
    const tempPics = shuffleArray(SHOP_PIC_LIST).filter((itm:any, index:number) => index < 5)
    setPics(tempPics)
    item && setShopInfo(item)
  }, [routerInfo.query])

  const shuffleArray = (array:any) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // 当还有元素待洗牌时执行
    while (currentIndex !== 0) {
      // 选取一个剩余元素…
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // 并与当前元素交换。
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  const handlePrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price)
  }

  const handleOrder = () => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
      Toast.show({
        icon: 'success',
        content: 'success',
      })
      goBookingRouter({pathKey: 'myOrder'})
    }, 1000)
  }

  return (
    <div className={Styles['container']}>
      <div className={Styles['shop-box']}>
        <p className={Styles['title']}>
          {shopInfo.name}
          <span>No: { shopInfo.no }</span>
          {
            // shopInfo.isStar ? <HeartFill onClick={() => onStar()} style={{color: '#ffe033'}} /> : <HeartOutline onClick={() => onStar()} />
          }  
        </p>
        <div className={Styles['rate-box']}>
          {/* <Rate value={shopInfo.start} style={{'--star-size': '18px', marginRight: '15px'}} /> */}
          {/* <span>{shopInfo.score}</span> */}
        </div>
        <div className={Styles['img-box']}>
          {
            pics.map((item, index) => (
              <div key={index} className={ index < 2 ? Styles['img-item'] : Styles['img-item-3'] }>
                <Image src={item} height={120} />
              </div>  
            ))
          }
        </div>
      </div>
      <div className={Styles['tag-box']}>
        {
          SHOP_TAG.map((item, index) => (
            <div key={index} className={Styles['tag-item']}>
              <div className={Styles['svg']}>{item.svg}</div>
              <p>{item.label}</p>
            </div>
          ))
        }
      </div>
      <div className={Styles['check-box']}>
        <HotelSearch hideBtn={true} hideSearch={true} />
      </div>
      <div className={Styles['des-box']}>
        <p className={Styles['box-title']}>Select Room Type</p>
        <CapsuleTabs>
          <CapsuleTabs.Tab title='Single' key='Single'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Double' key='Double'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Suite' key='Suite'>
          </CapsuleTabs.Tab>
        </CapsuleTabs>
      </div>
      <div className={Styles['des-box']}>
        <p className={Styles['box-title']} style={{marginBottom: 0}}>Price for 2 night:&nbsp;&nbsp;&nbsp;THB {handlePrice(shopInfo.price * 2)}</p>
      </div>
      <div className={Styles['des-box']}>
        <p className={Styles['box-title']}>Payment Method</p>
        <CapsuleTabs activeKey={activeKey} onChange={val => setActiveKey(val)}>
          {
            PAYMENT_LIST.map((item) => (
              <CapsuleTabs.Tab key={item.key} title={item.content} />
            ))
          }
        </CapsuleTabs>
      </div>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div className={Styles.overlayContent}><DotLoading color='white' /></div>
      </Mask>
      <div className={Styles['order-btn-box']}>
        <div className="theme-btn" onClick={() => handleOrder()}>
          <p>Pay</p>
        </div>
      </div>
    </div>
  )
}
export default index