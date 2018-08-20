import React, {Component} from 'react'
import './Interlayer.styl'

export default class Interlayer extends Component{
  render () {
    return (
      <div className="interLayer">
        <div className="imgTop">
          <img src={'//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg'} alt=""/>
        </div>
        <div className="imgMiddle">
          <img src='//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg' alt=""/>
        </div>
        <div className="imgBottom">
          <img src={'//yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg'} alt=""/>
        </div>
        <div className="fake-button"></div>
  </div>
    )
  }
}