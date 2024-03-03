import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { SHOP_LIST } from '@/constants/booking'
import { CapsuleTabs, Popup } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import ShopList from '@/components/common/ShopList'
import HotelSearch from '@/components/common/HotelSearch'

interface Iprops {
  routerInfo: any
}

interface Istate {
}

const initState = {
}

const index: React.FC<Iprops> = ({routerInfo}) => {
  const { query = {} } = routerInfo
  const [show, setShow] = useState(false)
  const [destination, setDestination] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [activeKey, setActiveKey] = useState('hotel')

  useEffect(() => {
    setDestination(query.destination)
    setStartTime(query.startTime)
    setEndTime(query.endTime)
  }, [routerInfo.query])

  const changeType = (val:string) => {
    routerInfo.query.type = val
    setActiveKey(val)
  }

  return (
    <div className={Styles['container']}>
      <div className={Styles['search-box']} onClick={() => setShow(true)}>
        <SearchOutline style={{ marginRight: '16px', fontSize: '20px' }} />
        <span>{destination}</span>
        <i className={Styles['point']} />
        <span>{startTime}</span>
        <i className={Styles['line']} />
        <span>{endTime}</span>
      </div>
      <div style={{marginBottom: '20px'}}>
        <CapsuleTabs activeKey={activeKey} onChange={val => changeType(val)}>
          <CapsuleTabs.Tab title='Hotel' key='hotel'>
            {/* Alipay */}
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Villas' key='villas'>
            {/* Alipay */}
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Apartments' key='apartments'>
            {/* 西红柿 */}
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Holiday parks' key='holiday'>
            {/* 蚂蚁 */}
          </CapsuleTabs.Tab>
        </CapsuleTabs>
      </div>
      <div style={{marginBottom: '20px'}}>
        <ShopList routerInfo={routerInfo} type={activeKey} shopList={SHOP_LIST} />
      </div>
      <Popup
        visible={show}
        position='top'
        onMaskClick={() => setShow(false)}
        style={{borderBottomRightRadius: '8px', borderBottomLeftRadius: '8px'}}>
        <HotelSearch onSearch={() => setShow(false)} />
      </Popup>
      {/* <SearchBar /> */}
    </div>
  )
}
export default index