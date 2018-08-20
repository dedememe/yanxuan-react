import React, {Component} from 'react'
import './Login.styl'

 export default class Login extends Component {
  render () {
    return(
      <div className="login">
        <div className="login-topBar">
          <a className="topBar-left" href="javascript:;">
            <i className="iconfont icon-shouye"></i>
          </a>
          <a className="topBar-middle" href="javascript:;">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"/>
          </a>
          <div className="topBar-right">
            <a href="javascript:;">
              <i className="iconfont icon-sousuo"></i>
            </a>
            <a href="javascript:;">
              <i  className="iconfont icon-gouwuche"></i>
            </a>
          </div>
        </div>
        <div className="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
        </div>
        <div className="login-phone">
          <i className="iconfont"></i>
          <span>手机号码登录</span>
        </div>
        <div className="login-mailbox">
          <i className="iconfont"></i>
          <span>邮箱账号登录</span>
        </div>
        <div className="register">
          手机号快速注册
        </div>
      </div>
    )
  }
}