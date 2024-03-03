import { USER_INFO } from "@/constants/booking"

const getLocalStorage = (key: string) => {
  return window.localStorage.getItem(key)
}

const setLocalStorage = (key: string, val: any) => {
  window.localStorage.setItem(key, val)
}

const getSessionStorage = (key: string) => {
  const val = window.sessionStorage.getItem(key)
  return val ? JSON.parse(val) : ''
}

const setSessionStorage = (key: string, val: any) => {
  window.sessionStorage.setItem(key, val)
}

const getUserInfo = () => {
  const userInfo = getLocalStorage('userInfo')
  try {
    if (userInfo) {
      return JSON.parse(userInfo)
    } else {
      return USER_INFO
    }
  } catch (error) {
    return userInfo
  }
}

const setUserInfo = (userInfo: any) => {
  setLocalStorage('userInfo', JSON.stringify(userInfo))
}


export {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage,
  getUserInfo,
  setUserInfo
}