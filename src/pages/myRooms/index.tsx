import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { USER_INFO, SHOP_LIST } from '@/constants/booking'
import { getUserInfo, setUserInfo } from '@/utils/storage'
import { goBookingRouter } from '@/utils/router'
import { List, Button, Toast, Dialog, Popup, Form, Input, CapsuleTabs, Avatar, Rate } from 'antd-mobile'
import { CouponOutline, BillOutline, AppOutline, AlipaySquareFill, BankcardOutline } from 'antd-mobile-icons'
interface Iprops {
}

const Payment: React.FC<Iprops> = ({}) => {
  const [show, setShow] = useState(false)
  const [idCard, setIdCard] = useState('')
  const [account, setAccount] = useState('')
  const [list, setList] = useState([
    {
      content: 'Alipay',
      des: 'catcat@gmail.com',
      extra: <Button color="primary" size='small' shape='rounded' onClick={() => Update(0)}>Update</Button>,
      icon: <AlipaySquareFill />,
      show: true
    },
    {
      content: 'Bank Card',
      des: '6699***6789',
      extra: <Button color="primary" size='small' shape='rounded' onClick={() => Update(1)} >Update</Button>,
      icon: <BankcardOutline />,
      pathKey: '/myRooms',
      show: true
    },
    {
      content: 'Visa Card',
      des: '7711***6780',
      extra: <Button color="primary" size='small' shape='rounded' onClick={() => Update(2)} >Update</Button>,
      icon: <BankcardOutline />,
      pathKey: '/myRooms',
      show: true
    }
  ])
  useEffect(() => {
    const tempList:any = SHOP_LIST.map((item) => ({
      content: item.name,
      des: <div className={Styles['rate-box']}>
            <Rate readOnly value={item.start} style={{'--star-size': '12px', marginRight: '10px'}} /> 
            <span>{item.score}</span>
          </div>,
      extra: <Button color="primary" size='small' shape='rounded' onClick={() => Update(0)}>Update</Button>,
      icon: <Avatar src={item.imgSrc} />,
      show: true
    }))
    // const index = list.findIndex(item => item.key === 'user')
    // list[index].content = getUserInfo().username
    setList(tempList)
  }, [])

  const goPath = (path: string) => {
    if (path === 'login') {
      setUserInfo(USER_INFO)
    }
    goBookingRouter({pathKey: path})
  }
  const Update = async (index: number) => {
    const result = await Dialog.confirm({
      content: 'Confirm Updateing !',
      confirmText: 'Comfirm',
      cancelText: 'Cancel'
    })
    if (result) {
      const temp = list.filter((item, i) => i !== index)
      setList(temp)
      Toast.show({
        icon: 'success',
        content: 'success',
      })
    } else {
      // Toast.show({ content: '点击了取消', position: 'bottom' })
    }
  }
  const onFinish = () => {
    Toast.show({
      icon: 'success',
      content: 'success',
    })
    setShow(false)
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
                      description={item.des}
                      // onClick={() => goPath(item.pathKey)}
                      >
                      { item.content }
                    </List.Item>
                  : ''
              }
            </div>
          ))
        }
      </List>
      <Button className={Styles['login-btn']} onClick={() => setShow(true)} block type='submit' color='primary' shape='rounded' size='middle' fill='outline'>
        Add
      </Button>
      <Popup
        visible={show}
        showCloseButton
        onClose={() => {
          setShow(false)
        }}
        onMaskClick={() => {
          setShow(false)
        }}
        bodyStyle={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', }}
      >
        <div className={Styles['user-popup-container']}>
          <p className={Styles['user-title']}>Select payment type</p>
          <div>
            <CapsuleTabs>
              <CapsuleTabs.Tab title='Alipay' key='Alipay'>
                {/* Alipay */}
              </CapsuleTabs.Tab>
              <CapsuleTabs.Tab title='Bank' key='Bank'>
                {/* 西红柿 */}
              </CapsuleTabs.Tab>
              <CapsuleTabs.Tab title='Visa' key='Visa'>
                {/* 蚂蚁 */}
              </CapsuleTabs.Tab>
            </CapsuleTabs>
          </div>
          <Form
            onFinish={() => onFinish()}
            footer={
              <Button block type='submit' color='primary' shape='rounded' fill='outline' size='middle'>
                Bind
              </Button>
            }
          >
            <Form.Item
              name='name'
              label='Account'
              rules={[{ required: true }]}
            >
              <Input value={account} onChange={(val) => setAccount(val)} placeholder='Enter Account' />
            </Form.Item>
            <Form.Item
              name='idCard'
              label='ID Card'
              rules={[{ required: true }]}
            >
              <Input value={idCard} onChange={val => setIdCard(val)} placeholder='Enter ID Card' />
            </Form.Item>
            
          </Form>
        </div>
      </Popup>
    </div>
  )
}
export default Payment