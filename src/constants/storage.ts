interface homeRecommend {
  type: string,
  tag: string,
  pageSize: number
}

const HOME_RECOMMEND = (params: homeRecommend) => {
  const { type, tag, pageSize } = params
  return `home_recomend_${type}_${tag}_${pageSize}`
}

const SEARCH_HISTORY = `search_history`

const WEEKLY_RANK = 'weekly-rank'

export {
  HOME_RECOMMEND,
  WEEKLY_RANK,
  SEARCH_HISTORY
}