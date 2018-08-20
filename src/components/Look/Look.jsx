import React, {Component} from 'react'
import './Look.styl'

class Look extends Component{
  render() {
    const {detail} = this.props
    if(!detail) return (<div></div>)
    return (
      <div className="look">
        <div className="look-head">
          <span>严选LOOK</span>
        </div>
        <img src={detail.yxLook.picUrl} alt=""/>
        <div className="look-author">
          <img src={detail.yxLook.avatar} alt=""/>
          <span>{detail.yxLook.nickname}</span>
        </div>
        <div className="look-det">{detail.yxLook.content}</div>
      </div>
    )
  }
}
export default Look