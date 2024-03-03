import React, { useEffect, useState } from 'react'
// import Styles from './style.module.scss'
import Login from '@/components/login'
import Register from '@/components/login/register'
import Reset from '@/components/login/reset'

interface Iprops {
}

interface Istate {
}

const initState = {
}

const index: React.FC<Iprops> = ({}) => {
  const [type, setType] = useState('login')
  useEffect(() => {
  }, [])

  return (
    <>
      {
        type === 'login'
          ? <Login changeType={ (val: string) => setType(val) } />
          : type === 'register' ? <Register changeType={ (val: string) => setType(val) } /> : <Reset changeType={ (val: string) => setType(val) } />
      }
    </>
  )
}
export default index