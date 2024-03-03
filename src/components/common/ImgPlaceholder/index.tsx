import React, { Component } from 'react'
import Styles from './index.module.scss'
import { getLocalStorage } from '@/utils'


interface Iprops {
  width?: number | string,
  height?: number | string
}

interface Istate {
  theme: string
}
class Placeholder extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      theme: 'light'
    }
  }
  componentDidMount(): void {
    const theme = getLocalStorage('theme')
    theme && this.setState({ theme })
  }
  render(): React.ReactNode {
    const { width = '100%', height = '100%' } = this.props
    const { theme } = this.state

    return (
      <div className={Styles['container']} style={{width, height}}>
        <img src={`/images/${theme}/default.svg`} alt="" />
      </div>
    )
 }
}
export default Placeholder