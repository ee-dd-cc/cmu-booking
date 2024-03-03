import React, { Component } from 'react'
import Styles from './index.module.scss'
import { Image } from 'antd-mobile'

interface Iprops {
  adsList: Array<any>
}

interface Istate {
  swiper: boolean
}

class Ads extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    const { adsList = [] } = props
    super(props)
    this.state = {
      swiper: adsList.length > 1
    }
  }
  imgNode(info:any) {
    const { title, cover_url, type, toUrl } = info
    const node = (
      <a href={toUrl} target={ type === 'movie' ? '' : 'target' }>
        <Image 
          src={cover_url}
          alt={title}
          width="100%"
        />
      </a>
    )
    return node
  }
  render(): React.ReactNode {
    const { adsList } = this.props
    const { swiper } = this.state
    return (
      <div className={Styles['container']}>
        {
          swiper
            ? ''
            : <div>
                {
                  adsList[0] ? this.imgNode(adsList[0]) : ''
                }
              </div>
        }
      </div>
    )
 }
}
export default Ads