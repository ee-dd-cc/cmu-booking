/**
 * @Author: DogTeam
 * @Date: 2023/4/25 10:50:01
 * @LastEditors: DogTeam
 * @LastEditTime: 2023/4/25 10:50:01
 * Description: 公用types
 */


interface PageParams {
  id?: string | number,
  pId?: string | number,
  keyword: string,
  htmlTitle?: string,
  pathname?: string,
  asPath?: string
}

// interface 

export {
  PageParams
}