import AxiosService from '../instance'
interface Res {
  code: number,
  data: any,
  msg: string,
  total?: number,
}

/**
 * 豆瓣电影搜索接口
 */
const fetchSearch = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`https://movie.douban.com/j/subject_suggest`, { params })
  return res ? res : { code: -1, data: null }
}

/**
 * 豆瓣电影获取详情
 */
const getMovieDetail = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/ww-movie/getMovieDetail`, { params })
  return res ? res : { code: -1, data: null }
}

/**
 * 豆瓣电影获取详情 + 资源
 */
const fetchMovieData = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/ww-vod/getMovieData`, { params })
  return res ? res : { code: -1, data: null }
}

/**
 * 豆瓣-获取筛选推荐
 */
const fetchVodRecommend = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/ww-db/getRecommend`, { params })
  return res ? res : { code: -1, data: null }
}
export {
  fetchSearch,
  getMovieDetail,
  fetchMovieData,
  fetchVodRecommend
}