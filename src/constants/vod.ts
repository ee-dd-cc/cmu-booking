const VOD_TYPE = (type: string) => {
  switch (type) {
    case 'tv':
      type = '剧集'
      break;
    case 'movie':
      type = '电影'
      break;
    case 'comics':
      type = '动画'
      break;
    case 'variety':
      type = '综艺'
      break;
    case 'documentary':
      type = '纪录片'
      break;
    default:
      break;
  }
  return type
}
const VOD_TYPE_TRANS = (type: string) => {
  switch (type) {
    case 'tv':
      type = 'tv'
      break;
    case 'movie':
      type = 'movie'
      break;
    case 'comics':
      type = 'tv'
      break;
    case 'variety':
      type = 'tv'
      break;
    case 'documentary':
      type = 'tv'
      break;
    default:
      break;
  }
  return type
}
const VOD_TYPE_TAGS:any = {
  movie: [
    {
      name: '电影推荐',
      value: 'recommend'
    },
    {
      name: '筛选',
      value: 'screen'
    }
  ],
  tv: [
    {
      name: '剧集推荐',
      value: 'recommend'
    },
    {
      name: '筛选',
      value: 'screen'
    }
  ],
  comics: [
    {
      name: '动漫推荐',
      value: 'recommend'
    },
    {
      name: '筛选',
      value: 'screen'
    }
  ],
  variety: [
    {
      name: '综艺推荐',
      value: 'recommend'
    },
    {
      name: '筛选',
      value: 'screen'
    }
  ],
  documentary: [
    {
      name: '纪录片推荐',
      value: 'recommend'
    },
    // {
    //   name: '筛选',
    //   value: 'screen'
    // }
  ]
}
const VOD_DETAIL_TAG = [
  {
    name: '资源',
    value: 'resources'
  },
  {
    name: '影片详情',
    value: 'detail'
  }
]
const VOD_DETAIL_TRANS = [
  {
    name: '导演',
    value: 'directors',
    type: 'array',
    subType: 'object',
    sort: 0
  },
  {
    name: '演员',
    value: 'actors',
    type: 'array',
    subType: 'object',
    sort: 1
  },
  {
    name: '类型',
    value: 'genres',
    type: 'array',
    sort: 2
  },
  {
    name: '国家/地区',
    value: 'countries',
    type: 'array',
    sort: 3
  },
  {
    name: '语言',
    value: 'languages',
    type: 'array',
    sort: 4
  },
  {
    name: '上映日期',
    value: 'pubdate',
    type: 'array',
    sort: 5
  },
  {
    name: '时长',
    value: 'durations',
    type: 'array',
    sort: 6
  },
  {
    name: '又名',
    value: 'aka',
    type: 'array',
    sort: 7
  },
  {
    name: '豆瓣',
    value: 'db_id',
    type: 'string',
    sort: 8
  },
  {
    name: '剧情简介',
    value: 'intro',
    type: 'string',
    sort: 9
  },
]
const SCREEN_CONFIG:any = {
  movie: [
    {
      label: '类型',
      value: 'tag',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '喜剧',
          value: '喜剧'
        },
        {
          label: '爱情',
          value: '爱情'
        },
        {
          label: '动作',
          value: '动作'
        },
        {
          label: '科幻',
          value: '科幻'
        },
        {
          label: '动画',
          value: '动画'
        },
        {
          label: '悬疑',
          value: '悬疑'
        },
        {
          label: '犯罪',
          value: '犯罪'
        },
        {
          label: '惊悚',
          value: '惊悚'
        },
        {
          label: '冒险',
          value: '冒险'
        },
        {
          label: '音乐',
          value: '音乐'
        },
        {
          label: '历史',
          value: '历史'
        },
        {
          label: '奇幻',
          value: '奇幻'
        },
        {
          label: '恐怖',
          value: '恐怖'
        },
        {
          label: '战争',
          value: '战争'
        },
        {
          label: '传记',
          value: '传记'
        },
        {
          label: '歌舞',
          value: '歌舞'
        },
        {
          label: '武侠',
          value: '武侠'
        },
        {
          label: '情色',
          value: '情色'
        },
        {
          label: '灾难',
          value: '灾难'
        },
        {
          label: '西部',
          value: '西部'
        },
        {
          label: '纪录片',
          value: '纪录片'
        },
        {
          label: '短片',
          value: '短片'
        }
      ]
    },
    {
      label: '地区',
      value: 'area',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '华语',
          value: '华语'
        },
        {
          label: '欧美',
          value: '欧美'
        },
        {
          label: '日本',
          value: '日本'
        },
        {
          label: '韩国',
          value: '韩国'
        },
        {
          label: '中国大陆',
          value: '中国大陆'
        },
        {
          label: '中国香港',
          value: '中国香港'
        },
        {
          label: '中国台湾',
          value: '中国台湾'
        },
        {
          label: '美国',
          value: '美国'
        },
        {
          label: '英国',
          value: '英国'
        },
        {
          label: '泰国',
          value: '泰国'
        },
        {
          label: '印度',
          value: '印度'
        },
        {
          label: '法国',
          value: '法国'
        },
        {
          label: '德国',
          value: '德国'
        },
        {
          label: '意大利',
          value: '意大利'
        },
        {
          label: '西班牙',
          value: '西班牙'
        },
        {
          label: '俄罗斯',
          value: '俄罗斯'
        },
        {
          label: '瑞典',
          value: '瑞典'
        },
        {
          label: '巴西',
          value: '巴西'
        },
        {
          label: '丹麦',
          value: '丹麦'
        },
        {
          label: '加拿大',
          value: '加拿大'
        },
        {
          label: '爱尔兰',
          value: '爱尔兰'
        },
        {
          label: '澳大利亚',
          value: '澳大利亚'
        }
      ]
    },
    {
      label: '年代',
      value: 'year',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '2023',
          value: '2023'
        },
        {
          label: '2022',
          value: '2022'
        },
        {
          label: '2021',
          value: '2021'
        },
        {
          label: '2020',
          value: '2020'
        },
        {
          label: '2019',
          value: '2019'
        },
        {
          label: '2020年代',
          value: '2020年代'
        },
        {
          label: '2010年代',
          value: '2010年代'
        },
        {
          label: '2000年代',
          value: '2000年代'
        },
        {
          label: '90年代',
          value: '90年代'
        },
        {
          label: '80年代',
          value: '80年代'
        },
        {
          label: '70年代',
          value: '70年代'
        },
        {
          label: '60年代',
          value: '60年代'
        },
        {
          label: '更早',
          value: '更早'
        }
      ]
    },
    {
      label: '平台',
      value: 'platform',
      default: '',
      list: []
    },
    {
      label: '排序',
      value: 'sort',
      default: 'U',
      list: [
        {
          label: '综合排序',
          value: 'U'
        },
        {
          label: '近期热度',
          value: 'T'
        },
        // {
        //   label: '首映时间',
        //   value: 'R'
        // },
        {
          label: '高分优先',
          value: 'S'
        }
      ]
    }
  ],
  tv: [
    {
      label: '类型',
      value: 'tag',
      default: '',
      list: [
        {
          label: '全部剧集',
          value: ''
        },
        {
          label: '喜剧',
          value: '喜剧'
        },
        {
          label: '爱情',
          value: '爱情'
        },
        {
          label: '悬疑',
          value: '悬疑'
        },
        {
          label: '动画',
          value: '动画'
        },
        {
          label: '武侠',
          value: '武侠'
        },
        {
          label: '古装',
          value: '古装'
        },
        {
          label: '家庭',
          value: '家庭'
        },
        {
          label: '犯罪',
          value: '犯罪'
        },
        {
          label: '科幻',
          value: '科幻'
        },
        {
          label: '恐怖',
          value: '恐怖'
        },
        {
          label: '历史',
          value: '历史'
        },
        {
          label: '战争',
          value: '战争'
        },
        {
          label: '动作',
          value: '动作'
        },
        {
          label: '冒险',
          value: '冒险'
        },
        {
          label: '传记',
          value: '传记'
        },
        {
          label: '剧情',
          value: '剧情'
        },
        {
          label: '奇幻',
          value: '奇幻'
        },
        {
          label: '惊悚',
          value: '惊悚'
        },
        {
          label: '灾难',
          value: '灾难'
        },
        {
          label: '歌舞',
          value: '歌舞'
        },
        {
          label: '音乐',
          value: '音乐'
        }
      ]
    },
    {
      label: '地区',
      value: 'area',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '华语',
          value: '华语'
        },
        {
          label: '欧美',
          value: '欧美'
        },
        {
          label: '日本',
          value: '日本'
        },
        {
          label: '韩国',
          value: '韩国'
        },
        {
          label: '中国大陆',
          value: '中国大陆'
        },
        {
          label: '中国香港',
          value: '中国香港'
        },
        {
          label: '中国台湾',
          value: '中国台湾'
        },
        {
          label: '美国',
          value: '美国'
        },
        {
          label: '英国',
          value: '英国'
        },
        {
          label: '泰国',
          value: '泰国'
        },
        {
          label: '印度',
          value: '印度'
        },
        {
          label: '法国',
          value: '法国'
        },
        {
          label: '德国',
          value: '德国'
        },
        {
          label: '意大利',
          value: '意大利'
        },
        {
          label: '西班牙',
          value: '西班牙'
        },
        {
          label: '俄罗斯',
          value: '俄罗斯'
        },
        {
          label: '瑞典',
          value: '瑞典'
        },
        {
          label: '巴西',
          value: '巴西'
        },
        {
          label: '丹麦',
          value: '丹麦'
        },
        {
          label: '加拿大',
          value: '加拿大'
        },
        {
          label: '爱尔兰',
          value: '爱尔兰'
        },
        {
          label: '澳大利亚',
          value: '澳大利亚'
        }
      ]
    },
    {
      label: '年代',
      value: 'year',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '2023',
          value: '2023'
        },
        {
          label: '2022',
          value: '2022'
        },
        {
          label: '2021',
          value: '2021'
        },
        {
          label: '2020',
          value: '2020'
        },
        {
          label: '2019',
          value: '2019'
        },
        {
          label: '2020年代',
          value: '2020年代'
        },
        {
          label: '2010年代',
          value: '2010年代'
        },
        {
          label: '2000年代',
          value: '2000年代'
        },
        {
          label: '90年代',
          value: '90年代'
        },
        {
          label: '80年代',
          value: '80年代'
        },
        {
          label: '70年代',
          value: '70年代'
        },
        {
          label: '60年代',
          value: '60年代'
        },
        {
          label: '更早',
          value: '更早'
        }
      ]
    },
    {
      label: '平台',
      value: 'platform',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '腾讯视频',
          value: '腾讯视频'
        },
        {
          label: '爱奇艺',
          value: '爱奇艺'
        },
        {
          label: '优酷',
          value: '优酷'
        },
        {
          label: '湖南卫视',
          value: '湖南卫视'
        },
        {
          label: 'Netflix',
          value: 'Netflix'
        },
        {
          label: 'HBO',
          value: 'HBO'
        },
        {
          label: 'BBC',
          value: 'BBC'
        },
        {
          label: 'NHK',
          value: 'NHK'
        },
        {
          label: 'CBS',
          value: 'CBS'
        },
        {
          label: 'NBC',
          value: 'NBC'
        },
        {
          label: 'tvN',
          value: 'tvN'
        }
      ]
    },
    {
      label: '排序',
      value: 'sort',
      default: 'U',
      list: [
        {
          label: '综合排序',
          value: 'U'
        },
        {
          label: '近期热度',
          value: 'T'
        },
        // {
        //   label: '首映时间',
        //   value: 'R'
        // },
        {
          label: '高分优先',
          value: 'S'
        }
      ]
    }
  ],
  comics: [
    {
      label: '类型',
      value: 'tag',
      default: '',
      list: [
        {
          label: '全部动漫',
          value: ''
        },
        {
          label: '国产动画',
          value: '国产动画'
        },
        {
          label: '热血',
          value: '热血'
        },
        {
          label: '战斗',
          value: '战斗'
        },
        {
          label: '爱情',
          value: '爱情'
        },
        {
          label: '悬疑',
          value: '悬疑'
        },
        {
          label: '科幻',
          value: '科幻'
        },
        {
          label: '战争',
          value: '战争'
        },
        {
          label: '音乐',
          value: '音乐'
        },
        {
          label: '暴力',
          value: '暴力'
        },
        {
          label: '家庭',
          value: '家庭'
        },
        {
          label: '犯罪',
          value: '犯罪'
        },
        {
          label: '漫画改编',
          value: '漫画改编'
        },
        {
          label: '温情',
          value: '温情'
        },
        {
          label: '后宫',
          value: '后宫'
        },
        {
          label: '歌舞',
          value: '歌舞'
        }
      ]
    },
    {
      label: '地区',
      value: 'area',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '华语',
          value: '华语'
        },
        {
          label: '欧美',
          value: '欧美'
        },
        {
          label: '日本',
          value: '日本'
        },
        {
          label: '韩国',
          value: '韩国'
        },
        {
          label: '中国大陆',
          value: '中国大陆'
        },
        {
          label: '中国香港',
          value: '中国香港'
        },
        {
          label: '中国台湾',
          value: '中国台湾'
        },
        {
          label: '美国',
          value: '美国'
        },
        {
          label: '英国',
          value: '英国'
        },
        {
          label: '泰国',
          value: '泰国'
        },
        {
          label: '印度',
          value: '印度'
        },
        {
          label: '法国',
          value: '法国'
        },
        {
          label: '德国',
          value: '德国'
        },
        {
          label: '意大利',
          value: '意大利'
        },
        {
          label: '西班牙',
          value: '西班牙'
        },
        {
          label: '俄罗斯',
          value: '俄罗斯'
        },
        {
          label: '瑞典',
          value: '瑞典'
        },
        {
          label: '巴西',
          value: '巴西'
        },
        {
          label: '丹麦',
          value: '丹麦'
        },
        {
          label: '加拿大',
          value: '加拿大'
        },
        {
          label: '爱尔兰',
          value: '爱尔兰'
        },
        {
          label: '澳大利亚',
          value: '澳大利亚'
        }
      ]
    },
    {
      label: '年代',
      value: 'year',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '2023',
          value: '2023'
        },
        {
          label: '2022',
          value: '2022'
        },
        {
          label: '2021',
          value: '2021'
        },
        {
          label: '2020',
          value: '2020'
        },
        {
          label: '2019',
          value: '2019'
        },
        {
          label: '2020年代',
          value: '2020年代'
        },
        {
          label: '2010年代',
          value: '2010年代'
        },
        {
          label: '2000年代',
          value: '2000年代'
        },
        {
          label: '90年代',
          value: '90年代'
        },
        {
          label: '80年代',
          value: '80年代'
        },
        {
          label: '70年代',
          value: '70年代'
        },
        {
          label: '60年代',
          value: '60年代'
        },
        {
          label: '更早',
          value: '更早'
        }
      ]
    },
    {
      label: '平台',
      value: 'platform',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '腾讯视频',
          value: '腾讯视频'
        },
        {
          label: '爱奇艺',
          value: '爱奇艺'
        },
        {
          label: '优酷',
          value: '优酷'
        },
        {
          label: '湖南卫视',
          value: '湖南卫视'
        },
        {
          label: 'Netflix',
          value: 'Netflix'
        },
        {
          label: 'HBO',
          value: 'HBO'
        },
        {
          label: 'BBC',
          value: 'BBC'
        },
        {
          label: 'NHK',
          value: 'NHK'
        },
        {
          label: 'CBS',
          value: 'CBS'
        },
        {
          label: 'NBC',
          value: 'NBC'
        },
        {
          label: 'tvN',
          value: 'tvN'
        }
      ]
    },
    {
      label: '排序',
      value: 'sort',
      default: 'U',
      list: [
        {
          label: '综合排序',
          value: 'U'
        },
        {
          label: '近期热度',
          value: 'T'
        },
        // {
        //   label: '首映时间',
        //   value: 'R'
        // },
        {
          label: '高分优先',
          value: 'S'
        }
      ]
    }
  ],
  variety: [
    {
      label: '类型',
      value: 'tag',
      default: '',
      list: [
        {
          label: '全部综艺',
          value: ''
        },
        {
          label: '真人秀',
          value: '真人秀'
        },
        {
          label: '音乐',
          value: '音乐'
        },
        {
          label: '歌舞',
          value: '歌舞'
        },
        {
          label: '美食',
          value: '美食'
        },
        {
          label: '文艺',
          value: '文艺'
        },
        {
          label: '爱情',
          value: '爱情'
        },
        {
          label: '艺能',
          value: '艺能'
        },
        {
          label: '治愈',
          value: '治愈'
        },
        {
          label: '温情',
          value: '温情'
        }
      ]
    },
    {
      label: '地区',
      value: 'area',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '华语',
          value: '华语'
        },
        {
          label: '欧美',
          value: '欧美'
        },
        {
          label: '日本',
          value: '日本'
        },
        {
          label: '韩国',
          value: '韩国'
        },
        {
          label: '中国大陆',
          value: '中国大陆'
        },
        {
          label: '中国香港',
          value: '中国香港'
        },
        {
          label: '中国台湾',
          value: '中国台湾'
        },
        {
          label: '美国',
          value: '美国'
        },
        {
          label: '英国',
          value: '英国'
        },
        {
          label: '泰国',
          value: '泰国'
        },
        {
          label: '印度',
          value: '印度'
        },
        {
          label: '法国',
          value: '法国'
        },
        {
          label: '德国',
          value: '德国'
        },
        {
          label: '意大利',
          value: '意大利'
        },
        {
          label: '西班牙',
          value: '西班牙'
        },
        {
          label: '俄罗斯',
          value: '俄罗斯'
        },
        {
          label: '瑞典',
          value: '瑞典'
        },
        {
          label: '巴西',
          value: '巴西'
        },
        {
          label: '丹麦',
          value: '丹麦'
        },
        {
          label: '加拿大',
          value: '加拿大'
        },
        {
          label: '爱尔兰',
          value: '爱尔兰'
        },
        {
          label: '澳大利亚',
          value: '澳大利亚'
        }
      ]
    },
    {
      label: '年代',
      value: 'year',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '2023',
          value: '2023'
        },
        {
          label: '2022',
          value: '2022'
        },
        {
          label: '2021',
          value: '2021'
        },
        {
          label: '2020',
          value: '2020'
        },
        {
          label: '2019',
          value: '2019'
        },
        {
          label: '2020年代',
          value: '2020年代'
        },
        {
          label: '2010年代',
          value: '2010年代'
        },
        {
          label: '2000年代',
          value: '2000年代'
        },
        {
          label: '90年代',
          value: '90年代'
        },
        {
          label: '80年代',
          value: '80年代'
        },
        {
          label: '70年代',
          value: '70年代'
        },
        {
          label: '60年代',
          value: '60年代'
        },
        {
          label: '更早',
          value: '更早'
        }
      ]
    },
    {
      label: '平台',
      value: 'platform',
      default: '',
      list: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '腾讯视频',
          value: '腾讯视频'
        },
        {
          label: '爱奇艺',
          value: '爱奇艺'
        },
        {
          label: '优酷',
          value: '优酷'
        },
        {
          label: '湖南卫视',
          value: '湖南卫视'
        },
        {
          label: 'Netflix',
          value: 'Netflix'
        },
        {
          label: 'HBO',
          value: 'HBO'
        },
        {
          label: 'BBC',
          value: 'BBC'
        },
        {
          label: 'NHK',
          value: 'NHK'
        },
        {
          label: 'CBS',
          value: 'CBS'
        },
        {
          label: 'NBC',
          value: 'NBC'
        },
        {
          label: 'tvN',
          value: 'tvN'
        }
      ]
    },
    {
      label: '排序',
      value: 'sort',
      default: 'U',
      list: [
        {
          label: '综合排序',
          value: 'U'
        },
        {
          label: '近期热度',
          value: 'T'
        },
        // {
        //   label: '首映时间',
        //   value: 'R'
        // },
        {
          label: '高分优先',
          value: 'S'
        }
      ]
    }
  ],
  normal: [
    {
      label: '类型',
      value: 'tag',
      default: '全部',
      list: [],
    },
    {
      label: '地区',
      value: 'area',
      default: '全部',
      list: [],
    },
    {
      label: '年代',
      value: 'year',
      default: '',
      list: []
    },
    {
      label: '平台',
      value: 'platform',
      default: '',
      list: []
    },
    {
      label: '排序',
      value: 'sort',
      default: 'U',
      list: []
    }
  ]
}
export {
  VOD_TYPE,
  VOD_TYPE_TRANS,
  VOD_DETAIL_TAG,
  VOD_TYPE_TAGS,
  VOD_DETAIL_TRANS,
  SCREEN_CONFIG
}