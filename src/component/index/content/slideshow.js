import React from 'react';
import { Carousel } from 'antd';
import "../css/slideshow.css"

class Slideshow   extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.imgs)
  }
  render(){
    const imgs=this.props.imgs;
    return(
      <Carousel autoplay effect="fade">
        {
          imgs.map((item,key)=>{
            console.log(item)
            const imgUrl=require("../../../images/"+item)
            console.log(imgUrl)
            return (
              <div key={key}>
                <img alt={"轮播图"+(key+1)} src={imgUrl} ></img>
              </div>
          )
        })
        }
      </Carousel>
    )
  }
}

export default Slideshow  ;