import React, { Component } from 'react';
import './Classification.styl';
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import {getNav} from '../../redux/actions'

class Classification extends Component {
  state ={
    nowIndex: 0
  }
  changeIndex = (index) => {
    this.setState({nowIndex:index})
  }
  componentWillMount () {
    this.props.getNav()
  }
  componentDidUpdate () {
    new BScroll('.cateList', {
          scrollX: true,
          click: true
        })
  }
  render() {
    const {nowIndex}=this.state
    const {nav} = this.props
    console.log('nav'+nav);
    if(!nav.categoryL1List)return(<div></div>)
    return (
      <div className="classification">
        <div className="classifi-head">
          <div className="classifi-input">
            <i className="iconfont icon-sousuo"></i>
            <span>搜索商品，共12022款好物</span>
          </div>
        </div>
        <div className="cates">
          <div className="cateList">
            <ul>
              {
                nav.categoryL1List && nav.categoryL1List.map((item, index) => {
                  return(
                    <li className={index === nowIndex ? 'active' : ''} key={index} onClick={() => this.changeIndex(index)}>{item.name}</li>
                  )
                })
              }
          </ul>
        </div>
        <div className="cate-right" ref="cateRight">
          <div className="cate-banner">
            <img src={nav.categoryL1List[nowIndex].bannerUrl} alt=""/>
          </div>
          <div className="cate-right-list">
            <div className="right-list-head">
              <div>
                <span className="line">
                  {nav.categoryL1List[nowIndex].name}精选
                </span>
              </div>
            </div>
            <ul>
              {
                nav.categoryL1List[nowIndex].subCateList && nav.categoryL1List[nowIndex].subCateList.map((item, index) => {
                  return(
                    <li key={index}>
                      <a href="javascript:;">
                        <img src={item.wapBannerUrl} alt=""/>
                        <div>{item.name}</div>
                      </a>
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
  </div>
  </div>
    );
  }
}

export default connect(
  state =>({nav: state.nav}),
    {getNav}
)(Classification)
