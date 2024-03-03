import React, { Component } from 'react'
import { getLocalStorage } from '@/utils'
import Image from 'next/image'

interface Iprops {
  iconName: string,
  width?: number,
  height?: number,
  className?: any
}

interface Istate {
  theme: string
}

class IconPng extends Component<Iprops, Istate> {
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
    const { iconName, width = 20, height = 20 } = this.props
    const { theme } = this.state
    return (
      <>
        <Image
          src={`/images/${theme}/icon/icon-${iconName}.png`}
          alt={iconName}
          width={width}
          height={height}
          />
      </>
    )
 }
}
export default IconPng