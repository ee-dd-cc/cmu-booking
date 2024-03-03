import AxiosService from '../instance'
interface Res {
  code: number,
  data: any,
  msg: string,
  total?: number,
}

/**
 * 获取首页tag
 */
const fetchHomeTags = async (params?: any): Promise<Res> => {
  const res = await AxiosService.get(`/ww-db/getTags`)
  return res ? res : { code: -1, data: null }
}

/**
 * 根据tag获取近期vod
 */
const fetchVodByTag = async (params: any):Promise<Res> => {
  const res = await AxiosService.get(`/ww-db/getVodByTag`, { params })
  return res ? res : { code: -1, data: null }
}

/**
 * 获取首页数据
 */
const fetchHome = async (params?: any): Promise<Res> => {
  const res = await AxiosService.get(`/ww-db/getHome`, { params })
  return res ? res : { code: -1, data: null }
}
/**
 * 获取影视分类首页数据
 */
const fetchVodTypeHome = async (params?: any): Promise<Res> => {
  const res = await AxiosService.get(`/ww-db/getVodTypeHome`, { params })
  return res ? res : { code: -1, data: null }
}
/**
 * 获取影视默认筛选数据
 */
const fetchVodScreen = async (params?: any): Promise<Res> => {
  const res = await AxiosService.get(`/ww-db/getVodScreen`, { params })
  return res ? res : { code: -1, data: null }
}
/**
 * 获取周榜
 * @param params type - tv / movie
 * @returns 
 */
const fetchWeeklyRank = async (params: any):Promise<Res> => {
  const res = await AxiosService.get(`/ww-db/getWeeklyRank`, { params })
  return res ? res : { code: -1, data: null }
}
/**
 * 搜索影视
 * @param params keyword
 * @returns 
 */
const fetchSearchVod = async (params: any):Promise<Res> => {
  const res = await AxiosService.get(`/ww-movie/searchMovie`, { params })
  return res ? res : { code: -1, data: null }
}

const fetchVodSource = async (params: any):Promise<Res> => {
  const res = await AxiosService.get(`/ww-vod/searchSource`, { params })
  return res ? res : { code: -1, data: null }
}
/**
 * 搜索结果页获取影视
 * @param params 
 * @returns 
 */
const fetchSearchVodData = async (params: any):Promise<Res> => {
  const res = await AxiosService.get(`/ww-vod/getSearchData`, { params })
  return res ? res : { code: -1, data: null }
}

export {
  fetchHomeTags,
  fetchVodByTag,
  fetchHome,
  fetchVodTypeHome,
  fetchVodScreen,
  fetchWeeklyRank,
  fetchSearchVod,
  fetchVodSource,
  fetchSearchVodData
}