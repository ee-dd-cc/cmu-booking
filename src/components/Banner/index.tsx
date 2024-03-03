import React, { Component } from 'react'
import Link from 'next/link'
import Styles from './index.module.scss'
import { PATH_KEY } from '@/constants'
import { getRouterUrl, goRouter } from '@/utils'
import { Swiper, Image } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import ImgPlaceholder from '@/components/common/ImgPlaceholder'

interface Iprops {
	bannerList: Array<any>
}

interface Istate {
	cssOptions: {
		height: string,
	},
	activeIndex: number,
	items: any,
}

class Banner extends Component<Iprops, Istate> {
	private SwiperRef: React.RefObject<SwiperRef>
	constructor(props: Iprops) {
		super(props)
		this.SwiperRef = React.createRef()
		this.state = {
			cssOptions: {
				height: 'auto'
			},
			items: null,
			activeIndex: 0
		}
	}
	componentDidMount(): void {
		this.initItems()
	}
	initItems () {
		const { bannerList } = this.props
		const items = bannerList.map((item, index) => (
			<Swiper.Item className={Styles['swiper-item']} key={index}>
				<p className={Styles['vod-app-title']}>{item.title}</p>
				<div className={Styles['img-box']}>
					<Link href={getRouterUrl({pathKey: PATH_KEY.VOD_DETAIL, query: { id: item.db_id, type: item.subType ? item.subType : item.type, title: item.title }})}>
						{
							item.banner_url
							? <Image
									className={Styles['img-item']}
									src={item.banner_url}
									alt={item.title} />
							: ''
						}
					</Link>
				</div>
			</Swiper.Item>
		))
		this.setState({items})
	}
	clickIndicator(index: number) {
		const { bannerList } = this.props
		const item = bannerList[index]
		// this.SwiperRef.current?.swipeTo(index)
		const pathKey = PATH_KEY.VOD_DETAIL
		const query = { id: item.db_id, type: item.subType ? item.subType : item.type, title: item.title }
		goRouter({pathKey, query})
	}
	hoverIndicator(index: number) {
		this.SwiperRef.current?.swipeTo(index)
	}
	swiperChange(i:number) {
		this.setState({activeIndex: i})
	}
	render(): React.ReactNode {
		const { bannerList } = this.props
		const { items, activeIndex } = this.state
		return (
			<div className={Styles['container']} >
				<div className={Styles['swiper-box']}>
					<div>
						<Swiper
							className={Styles['swiper-content']}
							ref={this.SwiperRef}
							indicator={() => null}
							onIndexChange={i => this.swiperChange(i)}
							// allowTouchMove={false}
							autoplay
							autoplayInterval={7500}
							loop >
							{items}
						</Swiper>
					</div>
				</div>
				<div className={Styles['dicator-app-wrap']}>
					{
						bannerList.map((item, index) => (
							<span
								onMouseEnter={() => this.hoverIndicator(index)}
								className={activeIndex === index ? `${Styles['active']} ${Styles['dicator-app-item']}` : Styles['dicator-app-item']} key={index}></span>	
						))
					}
				</div>
				<div className={Styles['dicator-wrap']}>
					{
						bannerList.map((item, index) => (
							<div key={index} className={activeIndex === index ? `${Styles['dicator-box']} ${Styles['active']}` : Styles['dicator-box']}>
								<div onMouseEnter={() => this.hoverIndicator(index)}>
									<Image
										className={Styles['dicator-img-item']}
										lazy
										placeholder={<ImgPlaceholder />}
										src={item.cover_url}
										alt={item.title}
										onClick={() => this.clickIndicator(index)} />
								</div>
								<p>{item.title}</p>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}
export default Banner