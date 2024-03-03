import React, { useEffect, useState, RefObject } from 'react'
import { useRouter } from 'next/router'
import Styles from './style.module.scss'
import type { DatePickerRef } from 'antd-mobile/es/components/date-picker'
import dayjs from 'dayjs'
import { goBookingRouter } from '@/utils/router'
import { USER_INFO, USER_INFO_SET } from '@/constants/booking'
import { getUserInfo, setUserInfo } from '@/utils/storage'
import { Form, Button, Input, DatePicker, Radio, Avatar, Toast, Divider } from 'antd-mobile'

interface Iprops {
  routerInfo: any
}

interface Istate {
}

const initState = {
}

const mUserInfo: React.FC<Iprops> = ({ routerInfo }) => {
  const [userInfo, sUserInfo] = useState(USER_INFO)
  const [avatar, setAvatar] = useState(USER_INFO_SET.avatar)
  const [username, setUsername] = useState(USER_INFO_SET.username)
  const [phone, setPhone] = useState(USER_INFO_SET.phone)
  const [gender, setGender] = useState(USER_INFO_SET.gender)
  const [birthday, setBirthday] = useState(USER_INFO_SET.birthday)
  
  useEffect(() => {
    sUserInfo(getUserInfo())
  }, [routerInfo.pathname])

  useEffect(() => {
    setAvatar(userInfo.avatar)
    setUsername(userInfo.username)
    setPhone(userInfo.phone)
    setGender(userInfo.gender)
    setBirthday(userInfo.birthday)
  }, [userInfo])

  const onSubmit = () => {
    if (!username || !phone) {
      return
    }
    setUserInfo({
      ...userInfo,
      avatar,
      username,
      phone,
      gender,
      birthday
    })
    Toast.show({
      icon: 'success',
      content: 'success',
    })
    // goBookingRouter({pathKey: 'userCenter', type: 'redirect'})
    goBookingRouter({pathKey: 'userCenter'})
  }
  return (
    <div className={Styles['container']}>
      <Form
        footer={
          <div className="theme-btn" onClick={() => onSubmit()} color='primary'>
            <p>Submit</p>
          </div>
        }
        style={{borderRadius: '8px', overflow: 'hidden'}}
      >
        <Form.Item name='avatar' label='Avatar' rules={[{ required: true }]}>
          <Avatar src={avatar} />
        </Form.Item>
        <Form.Item name='username' label='Username' rules={[{ required: true }]}>
          <div>
            <Input value={username} onChange={val => setUsername(val)} placeholder='Enter username' />
          </div>
        </Form.Item>
        <Form.Item
          name='phone'
          label='Phone Number'
          rules={[
            { required: true, message: 'Please enter phone number' },
          ]}
        >
          <div>
            <Input value={phone} onChange={val => setPhone(val)} placeholder='Enter phone number' readOnly />
          </div> 
        </Form.Item>
        <Form.Item name='gender' label='gender' rules={[{ required: true }]}>
          <Radio.Group defaultValue={gender} onChange={(val: any) => setGender(val)}>
            <Radio value='Male' style={{marginRight: '15px'}}>Male</Radio>
            <Radio value='Female'>Female</Radio>
        </Radio.Group>
        </Form.Item>
        <Form.Item
          name='birthday'
          label='生日'
          trigger='onConfirm'
          onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
            datePickerRef.current?.open()
          }}
        >
          <DatePicker defaultValue={new Date(birthday)} onConfirm={val => setBirthday(val.toLocaleDateString())}>
            {value =>
              value ? dayjs(value).format('YYYY-MM-DD') : 'Select date'
            }
          </DatePicker>
        </Form.Item>
      </Form>
    </div>
  )
}
export default mUserInfo