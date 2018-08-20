import React, { Component } from 'react';
import './Distinguish.styl';
import {connect} from 'react-redux'
import Swiper from 'swiper'
import BScroll from 'better-scroll'

import Look from '../../components/Look/Look'
import More from '../../components/More/More'

import {getDetail} from '../../redux/actions'


class Distinguish extends Component {
  componentWillMount () {
    this.props.getDetail()
  }
  componentDidUpdate () {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      spaceBetween: 10,
      loop: true,
      slidesPerView: 1.2,
      centeredSlides: true,
      autoplay: {
        delay: 2000
      }
    })
    this.channelsScroll = new BScroll('.channels', {
      scrollX: true,
      click: true
    })
  }
  render() {
    const {detail} = this.props
    if(!detail.recommendOne)return(<div></div>)
    return (
      <div className="dist-wraper">
        <div className="dist-topBar">
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
              <i className="iconfont icon-gouwuche"></i>
            </a>
          </div>
        </div>
        <div className="lbt-wraper">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                detail.banner && detail.banner.map((item, index) => {
                  return(
                    <div className="swiper-slide" key={index}>
                      <img src={item.picUrl} alt=""/>
                    </div>
                  )
                })
              }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    <div className="channels" ref="channelsItem">
      <ul>
        {
          detail.column && detail.column.map((item, index) => {
            return(
              <li key={index}>
                <a href="javascript">
                  <img src={item.picUrl} alt=""/>
                  <div className="channel-title">{item.title}</div>
                  <span>{item.articleCount}</span>
                </a>
              </li>
            )
          })
        }
    </ul>
  </div>
    <div className="split"></div>
    <div className="recommand">
      <div className="reco-header">
        <span>为你推荐</span>
      </div>
      <div className="cookies-love">
        <a href="javascript:;">
          <img src={detail.recommendOne.picUrl} alt=""/>
            <span className="rec-title">{detail.recommendOne.title}</span>
            <span className="rec-price">{detail.recommendOne.priceInfo}元起</span>
            <div className="rec-det">{detail.recommendOne.subTitle}</div>
            <span className="rec-tag">{detail.recommendOne.nickname}</span>
        </a>
      </div>
      <div className="rec-food">
        <a href="javascript:;">
          <div className="food-left">
            <div className="food-left-author">
              <img src={detail.recommendTwo.avatar} alt=""/>
                <span>{detail.recommendTwo.nickname}</span>
            </div>
            <div className="left-title">{detail.recommendTwo.title}</div>
            <div className="rec-detail">{detail.recommendTwo.subTitle}</div>
          </div>
          <div className="food-right">
            <img src={detail.recommendTwo.picUrl} alt=""/>
              <span>{detail.recommendTwo.typeName}</span>
          </div>
        </a>
      </div>
      <div className="rec-food">
        <a href="javascript:;">
          <div className="food-left">
            <div className="food-left-author">
              <img src={detail.recommendThree.avatar} alt=""/>
              <span>{detail.recommendThree.nickname}</span>
            </div>
            <div className="left-title">{detail.recommendThree.title}</div>
            <div className="rec-detail">{detail.recommendThree.subTitle}</div>
          </div>
          <div className="food-right">
            <img src={detail.recommendThree.picUrl} alt=""/>
            <span>{detail.recommendThree.typeName}</span>
          </div>
        </a>
      </div>
    </div>
    <div className="split"></div>
    <div className="topics">
      <div className="topic-head">
        十点一刻
      </div>
      <div className="topic-container">
        <ul>
          <li>
          <a href="item.url">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png" alt=""/>
            <div className="top-head">- 今日话题 -</div>
            <div className="top-title">11</div>
            <div className="top-det">11</div>
            <span>
            <img src={'http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65'} alt=""/>
            </span>
            <span>...</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png" alt=""/>
              <span>查看全部话题</span>
              <i className="iconfont"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
    <div className="split"></div>
    <Look detail={detail}/>
    <More detail={detail}/>
    <div className="split-end"></div>
  </div>
    );
  }
}

export default connect (
  state => ({detail: state.detail}),
  {getDetail}
)(Distinguish)
