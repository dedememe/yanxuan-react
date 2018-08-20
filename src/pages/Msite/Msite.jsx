import React, {Component} from 'react'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'

import './Msite.styl'

import Carousel from '../../components/Carousel/Carousel'

import {getData, getHome, getBanner} from '../../redux/actions'

class Msite extends Component {
  componentWillMount () {
    this.props.getData()
    this.props.getHome()
    this.props.getBanner()
  }

  componentDidMount() {
    // if(this.props.data && !this.bs) {
    //   this.bs = true
    //   new BScroll('.listWraper', {
    //     scrollX: true,
    //     click: true
    //   })
    // }
    new BScroll(this.refs.popGoodItem, {
      scrollX: true,
      click: true
    })
  }
  render () {
    const {data} = this.props
    const {home} = this.props
    const {banner} = this.props
    if(data.length === 0) return(<div></div>)
    if(banner.length === 0) return(<div></div>)
    if(!home.cateList) return (<div></div>)
    return(
      <div className="msite-wraper">
        {/*<Masks/>*/}
        <div className="head-wraper">
          <div className="header-top">
            <a href="javascript:;">
              <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"/>
            </a>
            <div className="searchInput">
              <i className="iconfont icon-sousuo"></i>
              <span>搜索商品, 共11784款好物</span>
            </div>
          </div>
          <div className="listWraper" ref={'listWraper'}>
            <ul className="routeList">
              {
                data && data.map((item, index) => {
                  return(
                    <li key={index}>{item.name}</li>
                  )
                })
              }
          </ul>
        </div>
      </div>
        <Carousel banner={banner} home={home}/>
        <div className="split"></div>
        <div className="brand">
          <div className="brand-header">
            <span className="title">品牌制造商直供</span>
            <i className="iconfont icon-57"></i>
          </div>
          <ul className="brandList">
            {
              home.tagList && home.tagList.slice(4,8).map((item,index) => {
                return(
                  <li key={index}>
                    <a href="javascript:;">
                      <div className="brand-title">
                        <div className="brandName">{item.name}</div>
                        <div className="brandDetail">{item.floorPrice}元起</div>
                        <i className="iconfont icon-57"></i>
                      </div>
                      <img src={item.picUrl} alt=""/>
                    </a>
                  </li>
                )
              })
            }

          </ul>
        </div>
        <div className="split"></div>
        <div className="newGoods">
          <div className="good-header">
            <div className="good-header-title">
             <span>新品首发</span>
             <div className="all">查看全部 ></div>
           </div>
        </div>
        <div className="GoodWraper">
        <ul className="newGoodItem" ref='newGoodItem'>
          {
            home.newItemList && home.newItemList.map((item, index) => {
              return (
                <li key={index}>
                  <div className="imgWraper">
                    <img src={item.listPicUrl} alt=""/>
                  </div>
                  <span className="new-tag">新品特惠</span>
                  <span className="new-tag">七夕推荐</span>
                  <div className="name">{item.name}</div>
                  <div className="newGoodDescripe">{item.simpleDesc}</div>
                  <div className="price">￥{item.retailPrice}</div>
                </li>
              )
            })
          }
      </ul>
    </div>
  </div>
        <div className="split"></div>
        <div className="popGoods">
          <div className="pops-header">
            <div className="pops-header-title">
              <span>人气推荐 好物精选</span>
              <div className="all">查看全部 ></div>
            </div>
          </div>
          <div className="GoodWraper" ref="popGoodItem">
            <ul className="popGoodItem" >
              {
                home.popularItemList && home.popularItemList.map((item, index) => {
                  return(
                    <li key={index}>
                      <div className="imgWraper">
                        <img src={item.listPicUrl} alt=""/>
                      </div>
                      <div className="popDetail">
                        <div className="name">{item.name}</div>
                        <div className="popGoodDescripe">{item.simpleDesc}</div>
                        <div className="price">￥{item.retailPrice}</div>
                      </div>
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
        <div className="split"></div>
        <div className="limitedGoods">
          <div className="limit-left">
            <h4>严选限时购</h4>
            <div className="countTime">
              <span className="hour">00</span>
              <span>:</span>
              <span className="minute">09</span>
              <span>:</span>
              <span className="second">12</span>
            </div>
            <span>下一场 10:00 开始</span>
          </div>
          <div className="limit-right">
            <img src="http://yanxuan.nosdn.127.net/a09a027fa61bcc00061d3943b50e12fc.png?imageView&quality=85&thumbnail=330x330" alt=""/>
          </div>
        </div>
        <div className="split"></div>
        <div className="welfare">
          <a href="javascript:;"></a>
        </div>
        <div className="split"></div>
        <div className="goodChoice">
            <div className="choice-header">
              <a href="javascript:;">
                <span>专题精选</span>
                <i className="iconfont icon-57"></i>
              </a>
            </div>
            <div className="choice-item" ref="choiceItem">
              <ul>
                {
                  home.topicList && home.topicList.map((item, index) => {
                    return(
                      <li key={index}>
                        <a href="item.linkUrl">
                          <img src={item.itemPicUrl} alt=""/>
                        </a>
                        <div className="choice-detail">
                          <h4>{item.title}</h4>
                          <p>{item.subtitle}</p>
                          <span>{item.priceInfo}元起</span>
                        </div>
                      </li>
                    )
                  })
                }
            </ul>
          </div>
        </div>
        <div className="split"></div>

          {
            home.cateList.map((item, index) => {
             return (
               <div className="homeGood" key={index}>
                 <div className="homeHeader">
                   <h3>{item.name}好物</h3>
                 </div>
                 <ul>
                   {
                     item.itemList.map((i, index)=> {
                      return (
                        <li key={index}>
                          <div className="homeGoodWraper">
                            <img src={i.listPicUrl} alt=""/>
                            <div className="special">{i.simpleDesc}</div>
                          </div>
                          <div className="homeGoodDet">{i.name}</div>
                          <div className="homeGoodPri">￥{i.couponPrice}</div>
                        </li>
                      )
                     })
                   }
                 </ul>
                 <div className="split"></div>
               </div>
             )
            })
          }

        <div className="split"></div>

        <div className="bottom">
            <div className="download">
              <a href="javascript">下载APP</a>
              <a href="javascript">电脑版</a>
            </div>
            <div className="copyright">
              <p>网易公司版权所有 © 1997-2018</p>
              <p>食品经营许可证：：JY13301080111719</p>
            </div>
          </div>
      </div>
    )
  }
}

//  将UI组件包装为容器组件并暴露出去
export default connect(
  //  获取更新状态
  state => ({data: state.data, home: state.home, banner: state.banner}),
  //  通知actions对象发送ajax请求
  {getData, getHome, getBanner}
)(Msite)