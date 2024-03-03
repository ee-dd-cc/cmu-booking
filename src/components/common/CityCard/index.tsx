import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { Image } from 'antd-mobile'

interface Iprops {
  cityInfo: {
    imgSrc: string;
    positon: string;
    count: number | string
  }
}

interface Istate {
}

const initState = {
}

const CityCard: React.FC<Iprops> = ({cityInfo}) => {
  const { imgSrc, positon, count } = cityInfo
  // const [state, setState] = useState<Istate>(initState)
  useEffect(() => {
  }, [])
  return (
    <div className={Styles['container']}>
      <div className={Styles['img-box']}><Image src={imgSrc} /></div>
      <p>{positon}</p>
      <span>{count} properties</span>
    </div>
  )
}
export default CityCard