import { PAGE_PATH_NAME } from './index'

// 影片卡片配置
const CARD_OPTION = (dom:any = '') => {
	let option = {
		width: 115,
		height: 162,
		ratio: 0.667, // 宽:高
		total: 10
	}
	if (dom) {
		const { clientWidth = 0 } = dom
		const bodyClientWidth = document.body.clientWidth
		if (bodyClientWidth < 1600) {
			option.width = clientWidth * 0.1725
		}
		if (bodyClientWidth >= 1600 && bodyClientWidth < 1920) {
			option.width = clientWidth * 0.1495
			option.total = 12
		}
		if (bodyClientWidth >= 1920) {
			option.width = clientWidth * 0.1285
			option.total = 14
		}
		if (bodyClientWidth >= 2300) {
			option.width = clientWidth * 0.1125
			option.total = 16
		}
		option.total = 16
	}
	option.height = option.width / option.ratio
	return option
}

// 影片详情banner配置
const VOD_BANNER_OPTION = (type: string) => {
	const ratio = 0.667 // 图片 宽:高
	let boxHeight = 260
	let option = {
		width: '100%',
		height: `${boxHeight}px`
	}
	let imgOption = {
		width: `${boxHeight * ratio}px`,
		height: `${boxHeight}px`
	}
	if (type === 'default') {
		return option
	}
	if (type === 'imgDefault') {
		return imgOption
	}
	if (document) {
		const bodyClientWidth = document.body.clientWidth
		if (bodyClientWidth < 1600) {
			boxHeight = 260
		}
		if (bodyClientWidth >= 1600 && bodyClientWidth < 1920) {
			boxHeight = 300
		}
		if (bodyClientWidth >= 1920) {
			boxHeight = 320
		}
	}
	option.height = `${boxHeight}px`
	imgOption.height = `${boxHeight}px`
	imgOption.width = `${(boxHeight * ratio).toFixed(2)}px`
	option = type === 'img' ? imgOption : option
	return option
}

// 网站相关
const WEB_SITE = {
	siteName: 'InsBook · 影书',
	title: 'InsBook · 影书｜你的观影小红书',
	domain: 'https://www.insbook.xyz',
	image: '',
	description: '一站式观影指南，热门影视资讯、在线片源、主题社区。丰富的影视信息，让您随时了解热门剧集和大片动态、与万千同好分享观影心得。加入 InsBook · 影书，让我们共同书写您的观影小红书！',
	keywords: '影视资讯,影视评分,剧集评分,海外华人影院,海外影视,海外影院,午夜影院,在線电影,在线影院,在线视频,线上看,豆瓣电影,小红书',

}

const HTML_TITLE = ({pathname, pageProps}: {pathname: string, pageProps: any}) => {
	let { siteName, title } = WEB_SITE
	if (pathname === PAGE_PATH_NAME({key: 'VOD_DETAIL'})) { // 影视详情页
		const { title: vTitle, year, countries, genres = [], aka = [] } = pageProps.vodInfo
		const countryStr = countries.join('/') // 国家
		const genresStr = genres.join('/') // 类型
		// const akaText = aka.length ? ` ${aka[0]} ` : ''
		title = `《${vTitle}》- ${year} ${countryStr} ${genresStr}片 - 在线看 | ${siteName}`
	}
	return title
}

const HTML_KEYWORDS = ({pathname, pageProps}: {pathname: string, pageProps: any}) => {
	let { keywords } = WEB_SITE
	if (pathname === PAGE_PATH_NAME({key: 'VOD_DETAIL'})) { // 影视详情页
		const { title: vTitle, aka = [], genres = [] } = pageProps.vodInfo
		const genresStr = genres.join('/') // 类型
		const akaText = aka.length ? `${aka[0]}` : ''
		keywords = `${vTitle},${akaText},${genresStr},高清,超清,小红书,观影小红书,奈飞影视,网飞TV,海外华人影院,海外影视,海外影院,午夜影院,在线影院,在线视频`
	}
	return keywords
}
const HTML_DES = ({pathname, pageProps}: {pathname: string, pageProps: any}) => {
	let { description } = WEB_SITE
	if (pathname === PAGE_PATH_NAME({key: 'VOD_DETAIL'})) { // 影视详情页
		const { title: vTitle, genres, directors, actors, intro } = pageProps.vodInfo
		const genresStr = genres.join('/') // 类型
		const directorStr = directors.map((item:any) => item.name).join('/') // 导演
		const actorStr = actors.filter((item:any, index:number) => index < 3).map((item:any) => item.name).join('/')
		description = `《${vTitle}》是由导演${directorStr}执导,${actorStr}等出演的${genresStr}片，剧情介绍:${intro}`
	}
	return description
}

const HTML_URL = ({pathname, pageProps}: {pathname: string, pageProps: any}) => {
	let { domain } = WEB_SITE
	if (pathname === PAGE_PATH_NAME({key: 'VOD_DETAIL'})) { // 影视详情页
		const { db_id } = pageProps.vodInfo
		domain = `${domain}/vod/${db_id}.html`
	}
	return domain
}

const HTML_IMAGE = ({pathname, pageProps}: {pathname: string, pageProps: any}) => {
	let { image } = WEB_SITE
	if (pathname === PAGE_PATH_NAME({key: 'VOD_DETAIL'})) { // 影视详情页
		const { cover_url } = pageProps.vodInfo
		image = cover_url || image
	}
	return image
}

export {
  CARD_OPTION,
	VOD_BANNER_OPTION,
	WEB_SITE,
	HTML_TITLE,
	HTML_KEYWORDS,
	HTML_DES,
	HTML_URL,
	HTML_IMAGE
}