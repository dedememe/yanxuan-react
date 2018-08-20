import React, {Component} from 'react'
import './More.styl'

export default class More extends Component{
  render() {
    const {detail} = this.props
    return (
      <div className="moreGood">
        <div className="more-head">
          <div className="before"></div>
          <span>更多精彩</span>
          <div className="after"></div>
        </div>
        {
          detail.findMore && detail.findMore.map((item, index) => {
            return(
              <div key={index} className="more-item">
                <img src={item.itemPicUrl} alt=""/>
                <div className="more-det">{item.subTitle}</div>
              </div>
            )
          })
        }

  </div>
    )
  }
}