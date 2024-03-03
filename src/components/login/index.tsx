import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
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

const phoneRegex = /^\d{8,}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/

const Login: React.FC<Iprops> = ({changeType}) => {
  const [visible, setVisible] = useState(false)
  const [phone, setPhone] = useState('')
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
          <span className={Styles['form-des']} onClick={() => changeType('reset')}>Forget password?</span>
          
          <Button className={Styles['login-btn']} block type='submit' color='primary' shape='rounded' size='middle'>
            Login
          </Button>
          <Button className={Styles['register-btn']} onClick={() => changeType('register')} block color='primary' fill='outline' shape='rounded' size='middle'>
            Register
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
          { pattern: phoneRegex, message: 'More than 8 number' }
        ]}
      >
        <div className={Styles['form-item']}>
          <div className={Styles['form-item-left']}>+66</div>
          <Input value={phone} onChange={val => setPhone(val)} placeholder='Enter phone number' />
        </div>
      </Form.Item>
      <Form.Item
        name='password'
        label='Passord'
        rules={[
          { required: true, message: 'Please enter passord' },
          { pattern: passwordRegex, message: 'More than 8 characters and uppercase and lowercase letters' }
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
            placeholder='Enter password'
            clearable
            type={visible ? 'text' : 'password'}
          />
        </div>
      </Form.Item>
    </Form>
  )
}
export default Login