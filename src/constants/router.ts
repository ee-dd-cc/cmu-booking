const PATH_KEY = {
  HOME: 'home',
  VOD_DETAIL: 'vodDetail',
  VOD_TYPE: 'vod_type',
  SCREEN_TYPE: 'screen_type',
  PAGE: 'page_h5',
  SEARCH: 'search',
  WEIXIN: 'weixin'
}
// 页面路由path
const PAGE_PATH_NAME = ({key = 'HOME'}) => {
  const pathname = {
    HOME: '/',
    VOD_DETAIL: `/vod/[_id]`, // 影视详情
    VOD_TYPE: '/vod/type/[_type]', // 影视分类主页
    VOD_SCREEN: '/vod/screen/[_type_tag_area_year_platform_sort]', // 筛选影视主页
    PAGE: '/page.html', // iframe
    SEARCH: '/search/[_keyword]', // 搜索结果页
    WEIXIN: '/browser/index.html', //  微信/qq
  }[key]
  return pathname
}
export {
  PATH_KEY,
  PAGE_PATH_NAME
}