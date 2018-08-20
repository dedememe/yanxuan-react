import React, {Component} from 'react'
import './Carousel.styl'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'



export default class Carousel extends Component{
  componentDidMount () {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 2000
      }
    })
  }
  render () {
    const {banner} = this.props
    const {home} = this.props
    return (
      <div className="lbt-wraper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              banner && banner.map((item, index) => {
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
    <ul className="lbt-ul">
      {
        home.policyDescList&&home.policyDescList.map((item, index) => {
          return(
            <li key={index}>
              <a href="javascript:;">
                <i className="iconfont icon-tick"></i>
                <span>{item.desc}</span>
              </a>
            </li>
          )
        })
      }
  </ul>
  </div>
    )
  }
}