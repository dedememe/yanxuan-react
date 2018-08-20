import {
  RECIEVE_DATA,
  ERR_MSG,
  RECIEVE_BANNER,
  RECIEVE_HOME,
  RECIEVE_NAV,
  RECIEVE_DETAIL
} from './action-types'

import {combineReducers} from 'redux'

//  产生data状态的状态机函数
//  初始化空对象
const initData = []
function data(state = initData, action) {
  switch (action.type){
    case RECIEVE_DATA:
      return action.data
    case ERR_MSG:
      const msg = action.data
      return{...state, msg}
    default:
      return state
  }
}

//  产生home状态机函数
const initHome = {}
function home(state = initHome, action) {
  switch (action.type){
    case RECIEVE_HOME:
      return action.data
    case ERR_MSG:
      const msg = action.data
      return{...state, msg}
    default:
      return state
  }
}

//  产生banner状态机函数
const initBanner = []
function banner(state = initBanner, action) {
  switch (action.type){
    case RECIEVE_BANNER:
      return action.data
    case ERR_MSG:
      const msg = action.data
      return{...state, msg}
    default:
      return state
  }
}

//  产生nav的状态机函数
const initNav = {}
function nav(state = initNav, action) {
  switch (action.type) {
    case RECIEVE_NAV:
      return action.data
    case ERR_MSG:
      const msg = action.data
      return{...state, msg}
    default:
      return state
  }
}

//  产生detail状态机函数
const initDetail = []
function detail(state = initDetail,action) {
  switch (action.type) {
    case RECIEVE_DETAIL:
      return action.data
    case ERR_MSG:
      const msg = action.data
      return{...state, msg}
    default:
      return state
  }
}



//  合并数个状态机函数
export default combineReducers({
  data,
  home,
  banner,
  nav,
  detail
})