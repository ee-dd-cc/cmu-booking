import Router, { useRouter } from 'next/router'
import { redirect } from 'next/navigation'
import { PATH_KEY } from '@/constants'

interface RouterUrl {
  pathKey: string,
  query?: any,
  type?: string
}

const getRouterUrl = ({pathKey, query = {}}:RouterUrl) => {
  let url = '/'
  let urlParams = ''
  for (const key in query) {
    urlParams += `&${key}=${query[key]}`
  }
  const { id, type, title, vType = '', area = '', year = '', sort = '', platform = '', pageUrl, keyword, dbName } = query
  switch (pathKey) {
    case PATH_KEY.VOD_DETAIL:
      url =  title ? `/vod/${id}.html?title=${title}&type=${type}` : `/vod/${id}.html?type=${type}`
      break
    case PATH_KEY.VOD_TYPE:
      url =  `/vod/type/${type}.html`
      break;
    case PATH_KEY.SCREEN_TYPE:
      url =  `/vod/screen/${type}.html`
      if (vType || area || year || sort || platform) {
        url =  `/vod/screen/${type}_${vType}_${area}_${year}_${sort}_${platform}.html`
      }
      break;
    case PATH_KEY.PAGE:
      url =  `/page.html?url=${pageUrl}`
      break;
    case PATH_KEY.SEARCH:
      url =  `/search/${keyword}.html?dbName=${dbName}`
      break;
    // case PAGE_KEY.EMOJI_DETAIL:
    //   url =  `/emoji/${id}.html`
    //   break
    // case PAGE_KEY.SEARCH_KEYWORD:
    //   url = `/search/keyword/${query.keyword}.html`
    //   break
    default:
      break
  }
  return url
}

const goRouter = ({pathKey, query = {}}:RouterUrl) => {
  let url = '/'
  let urlParams = ''
  for (const key in query) {
    urlParams += `&${key}=${query[key]}`
  }
  const { id, type, title, tag = '', area = '', year = '', sort = '', platform = '', pageUrl, keyword, dbName = '' } = query
  switch (pathKey) {
    case PATH_KEY.VOD_DETAIL:
      url =  title ? `/vod/${id}.html?title=${title}&type=${type}` : `/vod/${id}.html?type=${type}`
      break;
    case PATH_KEY.VOD_TYPE:
      url =  `/vod/type/${type}.html`
      break;
    case PATH_KEY.SCREEN_TYPE:
      url =  `/vod/screen/${type}.html`
      if (tag || area || year || sort || platform) {
        url =  `/vod/screen/${type}_${tag}_${area}_${year}_${platform}_${sort}.html`
      }
      break;
    case PATH_KEY.PAGE:
      url =  `/page.html?url=${pageUrl}`
      break;
    case PATH_KEY.SEARCH:
      url =  `/search/${keyword}.html?dbName=${dbName}`
      break;
    case PATH_KEY.WEIXIN:
      url =  `/browser/index.html`
      break;
    default:
      break;
  }
}

const goBookingRouter = ({pathKey, query = {}, type = 'normal'}:RouterUrl) => {
  let url = '/'
  let urlParams = ''
  for (const key in query) {
    urlParams += `&${key}=${query[key]}`
  }
  const { destination = '', startTime = '', endTime = '', id } = query
  switch (pathKey) {
    case 'home':
      url =  `/`
      break;
    case 'search':
      url =  `/search?destination=${destination}&startTime=${startTime}&endTime=${endTime}`
      break;
    case 'userCenter':
      url =  `/userCenter`
      break;
    case 'userStar':
      url =  `/userCenter/star`
      break;
    case 'mUserInfo':
      url =  `/userCenter/mUserInfo`
      break;
    case 'payment':
      url =  `/payment`
      break;
    case 'myRooms':
      url =  `/myRooms`
      break;
    case 'updateRooms':
      url =  `/myRooms/update`
      break;
    case 'login':
      url =  `/login`
      break;
    case 'shop':
      url =  `/shop?id=${id}`
      break;
    case 'roomList':
      url =  `/roomList`
      break;
    default:
      break;
  }
  if (type === 'redirect') {
    redirect(url)
  } else {
    Router.push(url)
  }
}

export {
  getRouterUrl,
  goRouter,
  goBookingRouter
}