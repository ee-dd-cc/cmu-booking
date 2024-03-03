import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { goBookingRouter } from '@/utils/router'
import { Image, Rate, Toast } from 'antd-mobile'
import { AntOutline, HeartOutline, HeartFill } from 'antd-mobile-icons'
interface Iprops {
  shopList: Array<any>
  routerInfo: any;
  type?: string
}

const ShopList: React.FC<Iprops> = ({routerInfo, shopList, type}) => {
  const { query = {} } = routerInfo
  const [destination, setDestination] = useState('')
  const [list, setList] = useState(shopList)
  useEffect(() => {
    setDestination(query.destination)
    const temp:any = shuffleArray(list)
    setList(temp)
  }, [routerInfo.query])

  useEffect(() => {
    const temp:any = shuffleArray(list)
    setList(temp)
  }, [type])

  const shuffleArray = (array:any) => {
    for (let i = array.length - 1; i > 0; i--) {
      // 生成从0到i的随机索引
      const j = Math.floor(Math.random() * (i + 1));
      // 交换array[i]和array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const onStar = (event: any, item:any) => {
    event.stopPropagation() // 阻止事件冒泡
    const { id, isStar } = item
    const temp = list.map(itm => ({
      ...itm,
      isStar: itm.id === id ? !isStar : itm.isStar
    }))
    Toast.show({
      icon: 'success',
      content: 'success',
    })
    setList(temp)
  }

  return (
    <>
      {
        list.map((item, index) => (
          <div className={Styles['shop-item']} onClick={() => goBookingRouter({pathKey: 'shop', query: {id: item.id}})} key={index}>
            <div className={Styles['left']}>
              {/* <Avatar src={item.imgSrc} /> */}
              <Image src={item.imgSrc} width={100} height={100} fit='fill' style={{borderRadius: '8px'}} />
            </div>
            <div className={Styles['right']}>
              <p className={Styles['title']}>
                {item.name}
                {
                  item.isStar
                    ? <HeartFill onClick={(event) => { onStar(event, item) }} style={{color: '#ffe033'}} />
                    : <HeartOutline onClick={(event) => onStar(event, item)} />
                }
              </p>
              <div className={Styles['rate-box']}>
                <Rate value={item.start} style={{'--star-size': '12px', marginRight: '10px'}} />
                <span>{item.score}</span>
              </div>
              <div className={Styles['position-box']}>
                <AntOutline style={{marginRight: '5px', fontSize: '15px'}} />
                <span style={{marginRight: '10px'}}>{ destination ? destination : item.positon }</span>
                { type }
              </div>
              <div className={Styles['price-box']}>
                <span className={Styles['des']}>{item.des}</span>
                THB {item.price}
              </div>
              {/* <div>
              </div> */}
            </div>
          </div>  
        ))
      }
    </>
  )
}
export default ShopList