import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { ROOM_LIST } from '@/constants/booking'
// import

interface Iprops {
}

interface Istate {
}

const initState = {
}

const index: React.FC<Iprops> = ({}) => {
  const [state, setState] = useState<Istate>(initState)
  useEffect(() => {
  }, [])
  return (
    <div>
      
      {
        ROOM_LIST.map((item, index) => (
          <div key={index} className={Styles['room-item']}> 
            <p>{item.name}</p>
            <p>Price for up to:</p>
            <div>
              <div>
                Price for 1 night:
                <p>THB {item.price}</p>
              </div>
              <div>

              </div>
            </div>
          </div>  
        ))
      }
    </div>
  )
}
export default index