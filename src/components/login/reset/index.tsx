import React, { useEffect, useState } from 'react'
import Styles from '../style.module.scss'
import { USER_INFO_SET } from '@/constants/booking'
import { goBookingRouter } from '@/utils/router'
import { setUserInfo } from '@/utils/storage'
import { Form, Button, Input } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'

interface Iprops {
  changeType: any
}

interface Istate {
}

const initState = {
}

const phoneRegex = /^\d{9,}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

const Reset: React.FC<Iprops> = ({changeType}) => {
  const [visible, setVisible] = useState(false)
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
  }, [])

  const loginSubmit = () => {
    setUserInfo(USER_INFO_SET)
    goBookingRouter({pathKey: 'home'})
  }

  return (
    <Form
      // layout='horizontal'
      onFinish={() => loginSubmit()}
      footer={
        <div className={Styles['form-footer']}>
          <Button className={Styles['login-btn']} block type='submit' color='primary' shape='rounded' size='middle'>
            Confirm
          </Button>
        </div>
      }
    >
      {/* <Form.Header>水平布局表单</Form.Header> */}
      <Form.Item
        name='phone'
        label='Phone Number'
        rules={[
          { required: true, message: 'Please enter phone number' },
          { pattern: phoneRegex, message: 'More than 9 number' }
        ]}
      >
        <div className={Styles['form-item']}>
          <div className={Styles['form-item-left']}>+66</div>
          <Input value={phone} onChange={val => setPhone(val)} placeholder='Enter phone number' />
        </div>
      </Form.Item>
      <Form.Item
        name="code"
        label='Verification code'
        extra={<a>send</a>}
        rules={[
          { required: true, message: 'Please enter verification code' },
        ]}
      >
        <Input value={code} onChange={val => setCode(val)} placeholder='Enter Verification code' />
      </Form.Item>
      <Form.Item
        name='password'
        label='Passord'
        rules={[
          { required: true, message: 'Please enter passord' },
          { pattern: passwordRegex, message: 'More than 6 characters and uppercase and lowercase letters' }
        ]}
        extra={
          <div className={Styles.eye}>
            {!visible ? (
              <EyeInvisibleOutline onClick={() => setVisible(true)} />
            ) : (
              <EyeOutline onClick={() => setVisible(false)} />
            )}
          </div>
        }
      >
        <div className={Styles['form-item']}>
          <Input
            value={password}
            onChange={val => setPassword(val)}
            placeholder='New password'
            clearable
            type={visible ? 'text' : 'password'}
          />
        </div>
      </Form.Item>
    </Form>
  )
}
export default Reset