import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { USER_STAR } from '@/constants/booking'
import ShopList from '@/components/common/ShopList'

interface Iprops {
  routerInfo: any
}

interface Istate {
}

const initState = {
}

const star: React.FC<Iprops> = ({routerInfo}) => {
  const [state, setState] = useState<Istate>(initState)
  useEffect(() => {
  }, [])
  return (
    <>
      <ShopList routerInfo={routerInfo} shopList={USER_STAR} />
    </>
  )
}
export default star