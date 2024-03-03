interface IvodInfo {
  db_id: number | string,
  title: string,
  original_title?: string, // 原始title
  rating: any, // 评分相关
  intro: string,
  year: string,
  cover_url: string,
  directors: Array<any>, // 导演
  actors: Array<any>, // 演员
  pubdate: Array<string>, // 上映时间
  type: string, // 影片类型
  card_subtitle?: string,
  durations: Array<string>, // 影片时间
  countries: Array<string>, // 国家
  genres: Array<string>, // 类型
  languages: Array<string>, // 语言
  aka?: Array<string>, // 别名
  trailer?: any, // 预告片相关
  vendors?: any, // 观看地址
}

export {
  IvodInfo
}