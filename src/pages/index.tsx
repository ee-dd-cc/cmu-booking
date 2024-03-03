import type { NextPage } from 'next'
import { useState } from 'react'
import Styles from './index.module.scss'
import dayjs from 'dayjs'
import { CITY_LIST } from '@/constants/booking'
import { goBookingRouter } from '@/utils/router'
import { Card, CapsuleTabs } from 'antd-mobile'
import HotelSearch from '@/components/common/HotelSearch'
import CityCard from '@/components/common/CityCard'

interface Props {
  homeTags: Array<Object>,
  bannerList: Array<any>
}

const Home: NextPage<Props> = (props) => {
  const [activeKey, setActiveKey] = useState('hotel')
  const goto = (item: any) => {
    const { positon } = item
    const sInfo = {
      destination: positon,
      startTime: dayjs().format('MMM DD'),
      endTime: dayjs().add(2, 'day').format('MMM DD'),
    }
    goBookingRouter({pathKey: 'search', query: sInfo})
  }
  return (
    <>
      <CapsuleTabs activeKey={activeKey} onChange={val => setActiveKey(val)}>
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
      <HotelSearch />
      <Card
        className={Styles['card-container']}
        title={
          <div className={Styles['card-title']}>
            <p>Explore Thailand</p>
            <span className={Styles['card-title-des']}>These popular destinations have a lot to offer</span>
          </div>
        }
        style={{ borderRadius: '16px' }}
      >
        <div className={Styles['card-content']}>
          {
            CITY_LIST.map((item, index) => (
              <div
                className={(index + 1) % 2 === 0 ? `${Styles['card-content-item-2']}` : Styles['card-content-item']}
                onClick={() => goto(item)}
                key={index}>
                <CityCard cityInfo={item}/>
              </div>
            ))
          }
        </div>
      </Card>
    </>
  )
}
// export const getServerSideProps: GetServerSideProps = async () => {
//   let homeTags = []
//   let bannerList = []
//   const { code, data: { list, banner } } = await fetchHome({ pageNo: 1, pageSize: 16 })
//   if (code === 200) {
//     homeTags = list || []
//     bannerList = banner || []
//   }
//   return { props: { homeTags, bannerList } }
// }

export default Home

