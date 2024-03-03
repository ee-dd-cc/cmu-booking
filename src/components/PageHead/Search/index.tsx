import React, { Component } from 'react'
import Styles from './index.module.scss'
import { SEARCH_HISTORY, PATH_KEY } from '@/constants'
import { getLocalStorage, setLocalStorage, goRouter } from '@/utils'
import { fetchSearchVod } from '@/api'
import { SearchOutline } from 'antd-mobile-icons'
import { Input, List, Image } from 'antd-mobile'

interface Iprops {
  routerInfo: any
}

interface Istate {
  keyword: string,
  isSearch: boolean,
  showModel: boolean, // 是否展示搜索弹窗
  searchList: Array<any>,
  historyData: Array<string>,
}
let timer:any = null
class Search extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      keyword: '',
      isSearch: false,
      showModel: false,
      searchList: [],
      historyData: []
    }
  }
  componentDidMount(): void {
    const historyData = getLocalStorage(SEARCH_HISTORY) || '[]'
    this.setState({ historyData: JSON.parse(historyData)})
  }
  componentDidUpdate(prevProps: any) {
    if (this.props.routerInfo !== prevProps.routerInfo) {
      this.setState({
        keyword: '',
        searchList: [],
        showModel: false
      })
    }
  }
  async fetchSearchVodApi() {
    let { keyword, isSearch } = this.state
    if (isSearch) return
    this.setState({isSearch: true})
    try {
      const { code, data = [] } = await fetchSearchVod({keyword})
      if (code === 200 && data) {
        this.setState({ searchList: data })
      }
    } catch (error) {
      
    } finally {
      isSearch = false
      this.setState({ isSearch })
    }
  }
  // 输入后1s，开始搜索
  async searchInput(value:string) {
    await this.setState({keyword: value})
    if (!value) {
      this.setState({
        searchList: []
      })
      return
    }
    clearTimeout(timer)
    timer = setTimeout(async () => {
      this.fetchSearchVodApi()
    }, 800)
  }
  focusInput() {
    this.setState({showModel: true})
  }
  blurInput() {
    setTimeout(() => {
      this.setState({showModel: false})
    }, 100)
  }
  goDetail(e: any, item: any) {
    const { type, db_id } = item
    goRouter({pathKey: PATH_KEY.VOD_DETAIL, query: {type, id: db_id}})
  }
  goSearch() {
    const { keyword } = this.state
    goRouter({pathKey: PATH_KEY.SEARCH, query: { keyword }})
  }
  onKeyUp(e: any) {
    const { keyCode } = e
    keyCode === 13 && this.goSearch()
  }
  render(): React.ReactNode {
    const { searchList, showModel, keyword } = this.state
    return (
      <div className={Styles['container']}>
        <Input
          className={Styles['search-input']}
          onChange={value => this.searchInput(value)}
          onFocus={() => this.focusInput()}
          onBlur={() => this.blurInput()}
          onKeyUp={e => this.onKeyUp(e)}
          value={keyword}
          placeholder='搜索电影、电视剧、综艺、动漫'
          clearable />
        <div className={Styles['icon-box']} onClick={() => this.goSearch()}>
          <SearchOutline /> 
        </div>
        {
          showModel
            ?
            <div className={Styles['result-wrap']}>
              {
                searchList.length
                  ?
                  <List>
                    {searchList.map((item, index) => (
                      <List.Item
                        key={index}
                        onClick={e => this.goDetail(e,item)}
                        prefix={
                          <Image
                            src={item.cover_url}
                            alt={item.title}
                            style={{ borderRadius: 4 }}
                            fit='cover'
                            width={50}
                            height={60}
                          />
                        }
                        description={item.card_subtitle}
                      >
                        {item.title}
                      </List.Item>
                    ))}
                  </List>
                  : ''
              }
            </div>
            : ''
        }
      </div>
    )
 }
}
export default Search