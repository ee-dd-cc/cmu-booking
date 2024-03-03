import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
  label?: string,
  tags: Array<any>,
  activeTab: string,
  more: {
    isShow: boolean,
  },
  children?: React.ReactNode,
  clickTab?: any
}

interface Istate {
  // activeTab: string
}

class Card extends Component<Iprops, Istate> {
  private myRef: React.RefObject<HTMLDivElement>;
  static defaultProps = {
    more: {
      isShow: false,
    },
  }
  constructor(props: Iprops) {
    const { tags } = props
    super(props)
    this.myRef = React.createRef()
    this.state = {
      // activeTab: tags[0].value
    }
  }
  tabClick(activeTab: string) {
    this.props.clickTab(activeTab)
  }
  render(): React.ReactNode {
    const { tags, label = '', activeTab, more: { isShow: showMore }, children } = this.props
    return (
      <>
        <div className={Styles['card-container']}>
        <div className={Styles['card-title']}>
          {
            label ? <div className={Styles['card-title-label']}>{label}</div> : ''
          }
          <ul className={Styles['tab-container']}>
            {
              tags.map((item: any, index:number) => (
                <li
                  className={item.value === activeTab ? `${Styles['tab-item']} ${Styles['active']}` : Styles['tab-item']}
                  key={index}
                  onClick={() => this.tabClick(item.value)}>
                    {item.name}
                </li>
              ))
            }
          </ul>
          {
            showMore ? <a className={Styles['more-btn']} href="">更多<span>&gt;</span></a> : ''
          }
        </div>
        <div className={Styles['card-content']} ref={this.myRef}>
          <div>
            {children}
          </div>
        </div>
      </div>
      </>
    )
 }
}
export default Card