import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
}

interface Istate {
}

class NoData extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    return (
      <div className={Styles['container']}>
        资源正在搜录中，请等待更新
      </div>
    )
 }
}
export default NoData