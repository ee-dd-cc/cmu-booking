import React, { Component } from 'react'
import Styles from './index.module.scss'
import { WEB_SITE } from '@/constants'
import { Button, Image, Mask } from 'antd-mobile'
interface Iprops {
}

interface Istate {
  showTips: boolean,
  btnStr: string
}

class Browser extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      showTips: false,
      btnStr: '复制网址并打开'
    }
  }
  copyUrl() {
    this.setState({ showTips: true })
    const input = document.createElement('input') // 创建input对象
    input.value = WEB_SITE.domain // 设置复制内容
    document.body.appendChild(input) // 添加临时实例
    input.select() // 选择实例内容
    document.execCommand('Copy') // 执行复制
    document.body.removeChild(input) // 删除临时实例
  }
  render(): React.ReactNode {
    const { showTips, btnStr } = this.state
    return (
      <div className={Styles['container']}>
        <Image
          className={Styles['img']}
          width={0}
          height={0}
          src="https://static.insbookapp.com/img/wx-qq-tips.png"
          alt="browser-img" />
        <Mask
          visible={showTips}
          onMaskClick={() => this.setState({showTips: false})}>
          <div className={Styles['img-tip']}>
            <Image
              width={300}
              height={120}
              src="https://static.insbookapp.com/img/wx-qq-tips.png"
              alt="browser-img" />
          </div>
        </Mask>
        <p>该环境暂不支持 {WEB_SITE.siteName} ，请理解支持！</p>
        <span>-----点击右上角或复制网址自行打开-----</span>
        <Button 
          className={Styles['button']}
          onClick={() => this.copyUrl()}
          color='primary'
          fill='outline'
          size='small'>
          {btnStr}
        </Button>
      </div>
    )
 }
}
export default Browser