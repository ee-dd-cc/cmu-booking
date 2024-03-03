import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import Styles from './style.module.scss'
import { CITY_LIST } from '@/constants/booking'
import { goBookingRouter } from '@/utils/router'
import { Input, Button, CalendarPicker, Popup, Stepper, Modal, List, Avatar, SearchBar } from 'antd-mobile'
import { SearchOutline, LeftOutline } from 'antd-mobile-icons'

interface Iprops {
  onSearch?: any,
  hideBtn?: boolean;
  hideSearch?: boolean
}

interface Istate {
}

const initState = {
}

const HotelSearch: React.FC<Iprops> = ({onSearch, hideBtn, hideSearch}) => {
  const [showTime, setShowTime] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [destination, setDestination] = useState('')
  const [searchVal, setSearchVal] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [user, setUser] = useState({
    rooms: 1,
    adults: 2,
    children: 1
  })
  const [rooms, setRooms] = useState(user.rooms)
  const [adults, setAdults] = useState(user.adults)
  const [children, setChildren] = useState(user.children)
  const defaultRange: [Date, Date] = [
    dayjs().toDate(),
    dayjs().add(2, 'day').toDate(),
  ]
  useEffect(() => {
    const start = defaultRange[0].toLocaleDateString()
    const end = defaultRange[1].toLocaleDateString()
    setStartTime(start)
    setEndTime(end)
  }, [])

  const hanldeShowSearch = () => {
    setShowSearch(true)
    setSearchVal('')
  }

  const searchConfirm = (name: string) => {
    setDestination(name)
    setShowSearch(false)
  }

  const timeConfirm = (val: any) => {
    const start = val[0].toLocaleDateString()
    const end = val[1].toLocaleDateString()
    setStartTime(start)
    setEndTime(end)
  }

  const userConfirm = () => {
    setUser({ rooms, adults, children })
    setShowUser(false)
  }

  const formConfirm = () => {
    if (!destination) {
      Modal.show({
        content: <div>
          <p>Please enter your destination !</p>
          <div style={{display: 'flex', 'justifyContent': 'flex-end'}}>
            <Button color='primary' fill='none' onClick={() => Modal.clear()}>OK</Button>
          </div>
        </div>,
        closeOnMaskClick: true
      })
      return
    }
    if (user.adults === 0 && user.children === 0) {
      Modal.show({
        content: 'Please enter adults or children !',
        showCloseButton: true,
        closeOnMaskClick: true
        // actions: []
      })
    }
    const sInfo = {
      destination,
      startTime: dayjs(startTime).format('MMM DD'),
      endTime: dayjs(endTime).format('MMM DD'),
    }
    goBookingRouter({pathKey: 'search', query: sInfo})
    if (onSearch) {
      onSearch()
    }
  }

  return (
    <div className={Styles['container']}>
      {
        !hideSearch &&
        <div className={`${Styles['border-box']} ${Styles['destination-box']}`} onClick={() => hanldeShowSearch()}>
          <SearchOutline className={Styles['form-item-icon']} />
          <Input placeholder='Enter your destination' value={destination} readOnly />
        </div>
      }
      <div className={`${Styles['border-box']} ${Styles['room-type-box']}`} onClick={() => setShowUser(true)}>
        <span>Room type</span>
        <p>{user.rooms} room - {user.adults} adults - {user.children} children</p>
      </div>
      <div className={Styles['check-box']} onClick={() => setShowTime(true)}>
        <div className={Styles['border-box']}>
          <span>Check in</span>
          <p>{startTime}</p>
        </div>
        <div className={Styles['border-box']}>
          <span>Check out</span>
          <p>{endTime}</p>
        </div>
      </div>
      {
        !hideBtn &&
          <div className="theme-btn" style={{marginTop: '32px'}} onClick={() => formConfirm()}>
            <p>Search</p>
          </div>
      }
      <CalendarPicker
        min={dayjs().toDate()}
        confirmText="Select"
        visible={showTime}
        defaultValue={defaultRange}
        selectionMode='range'
        onClose={() => setShowTime(false)}
        onMaskClick={() => setShowTime(false)}
        onConfirm={ val => timeConfirm(val) }/>
      <Popup
        visible={showUser}
        onMaskClick={() => {
          setShowUser(false)
        }}
        onClose={() => {
          setShowUser(false)
        }}
        position='bottom'
        bodyStyle={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', }}
      >
        <div className={Styles['user-popup-container']}>
          <p className={Styles['user-title']}>Select rooms and guests</p>
          <div className={Styles['user-item']}>
            <span>Rooms</span>
            <Stepper
              min={1}
              defaultValue={user.rooms}
              onChange={val => { setRooms(val) }}
            />
          </div>
          <div className={Styles['user-item']}>
            <span>Adults</span>
            <Stepper
              min={1}
              defaultValue={user.adults}
              onChange={val => { setAdults(val) }}
            />
          </div>
          <div className={Styles['user-item']}>
            <span>Children</span>
            <Stepper
              min={0}
              defaultValue={user.children}
              onChange={val => { setChildren(val) }}
            />
          </div>
          <Button onClick={() => { userConfirm() }} block type='submit' color='primary' size='large'>
            Apply
          </Button>
        </div>
      </Popup>
      <Popup
        visible={showSearch}
        onClose={() => setShowSearch(false)}
        onMaskClick={() => setShowSearch(false)}
        position='right'
        bodyStyle={{ width: '100vw' }}
        maskStyle={{ display: 'none' }}
      >
        <div className={Styles['search-popup-container']}>
          <p className={Styles['close']}><LeftOutline onClick={() => setShowSearch(false)} /></p>
          <SearchBar
            style={{height: '40px'}}
            placeholder='Enter your destination'
            value={searchVal}
            onChange={val => setSearchVal(val)}
            showCancelButton />
          <div className={Styles['content-list']}>
            <List>
            {
              CITY_LIST.map((item, index) => (
                  <List.Item
                    key={index}
                    onClick={() => searchConfirm(item.positon)}
                    className={Styles['content-item']}
                    prefix={<Avatar src={item.imgSrc} />}
                    description={item.des}
                  >
                    {item.positon}
                  </List.Item>
              ))
            }
            </List>
          </div>
        </div>
        {/* {mockContent} */}
      </Popup>
    </div>
  )
}
export default HotelSearch