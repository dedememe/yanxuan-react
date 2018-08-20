import React ,{Component} from 'react'
import './Msk.styl'

class Msk extends Component {
  render() {
    return (
      <div className="mask" ref="msk">
        <i className="iconfont icon-shanchuguanbicha"></i>
    <div className="good">
      <span className="line">
        <div className="msk-good-header">新人专享礼</div>
      </span>
      <div className="msk-good-title">感谢使用网易严选，已为你准备了一份专享礼</div>
      <div className="msk-good-content">
        <div className="content-left">
          <img src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232" alt=""/>
        </div>
        <div className="content-right">
          <div className="msk-good-name">埃及进口长绒棉毛巾</div>
          <div className="msk-good-brand">Ralph Lauren</div>
          <div className="msk-good-price">32.00</div>
        </div>
      </div>
      <div className="msk-buy-button" >领券立减10.00</div>
    <div className="msk-more-button">查看更多特惠商品</div>
  </div>
  </div>
    )
  }
}
export default Msk;
