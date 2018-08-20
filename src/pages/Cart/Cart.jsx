import React, { Component } from 'react';
import './Cart.styl';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cart-head">
          <div className="title">购物车</div>
          <div className="getCoupon ">领券</div>
        </div>
        <div className="service">
          <ul>
            <li>30天无忧退货</li>
            <li>48小时快速退款</li>
            <li>满88元免邮费</li>
          </ul>
        </div>
        <div className="backgroundPic">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt=""/>
          <div className="img-det">去添加点什么吧</div>
        </div>
        <div className="cart-button">
          <div className="button">登录</div>
        </div>
      </div>
    );
  }
}

export default Cart;
