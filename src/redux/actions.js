import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav
} from '../api'

import {
  RECIEVE_DATA,
  ERR_MSG,
  RECIEVE_HOME,
  RECIEVE_BANNER,
  RECIEVE_NAV,
  RECIEVE_DETAIL
} from './action-types'

//  成功的同步action --> 参考Vue的 commit（）
const dataSuccess = data => ({type: RECIEVE_DATA, data:data})
const homeSuccess = home => ({type: RECIEVE_HOME, data: home})
const bannerSuccess = banner => ({type: RECIEVE_BANNER, data: banner})
const navSuccess = nav => ({type: RECIEVE_NAV, data: nav})
const detailSuccess = detail => ({type: RECIEVE_DETAIL, data: detail})




//  失败的同步action
const errMsg = msg => ({type: ERR_MSG, data: msg})

//  异步的action

// 获取Msite导航栏滚动条数据
export function getData() {
  return async dispatch => {
    const result = await reqData()
    if (result.code === 0) {
    //  请求成功
      dispatch(dataSuccess(result.data))
    }else {
    //  请求失败
      dispatch(errMsg(result.data))
    }
  }
}

//  获取home数据
export function getHome() {
  return async dispatch => {
    const result = await reqHome()
    if (result.code === 0) {
      dispatch(homeSuccess(result.home))
    }else {
      //  请求失败
      dispatch(errMsg(result.data))
    }
  }
}

//  获取banner数据
export function getBanner() {
  return async dispatch => {
    const result = await reqBanner()
    if (result.code === 0) {
      dispatch(bannerSuccess(result.focusList))
    }else {
      //  请求失败
      dispatch(errMsg(result.data))
    }
  }
}

//  获取nav数据
export function getNav() {
  return async dispatch => {
    const result = await reqNav()
    if (result.code === 0) {
      dispatch(navSuccess(result.nav))
    }else {
      //  请求失败
      dispatch(errMsg(result.data))
    }
  }
}

//  获取detail数据
export function getDetail() {
  return async dispatch => {
    const result = await reqDetail()
    if (result.code === 0) {
      dispatch(detailSuccess(result.detail))
    }else {
      //  请求失败
      dispatch(errMsg(result.data))
    }
  }
}