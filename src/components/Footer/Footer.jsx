import React, {Component} from 'react'
import './Footer.styl'

class Footer extends Component {
  render () {
    return(
      <footer className="footer_guide border-1px">
        <span className="guide_item" >
      <span className="item_icon">
        <i className="iconfont icon-shouye"></i>
      </span>
        <span>首页</span>
      </span>
    <span className="guide_item">
    <span className="item_icon">
        <i className="iconfont icon-fangkuaidagou-weixuanzhong"></i>
      </span>
    <span>识物</span>
  </span>
    <span className="guide_item">
    <span className="item_icon">
        <i className="iconfont icon-chouti"></i>
      </span>
    <span>分类</span>
  </span>
    <span className="guide_item">
    <span className="item_icon">
        <i className="iconfont icon-gouwuche"></i>
      </span>
    <span>购物车</span>
  </span>
    <span className="guide_item">
    <span className="item_icon">
        <i className="iconfont icon-xiazai"></i>
      </span>
    <span>个人</span>
  </span>

  </footer>
    )
  }
}
export default Footer