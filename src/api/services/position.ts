import AxiosService from '../instance'
interface Res {
  code: number,
  data: any,
  msg?: string,
  total?: number,
}

/**
 * 广告位置搜索接口
 */
const fetchGetPosition = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/ww-ad/getPosition`, { params })
  // const res = await AxiosService.get(`/ww-movie/getMovieDetail`, { params })
  return res ? res : { code: -1, data: null }
}

export {
  fetchGetPosition
}