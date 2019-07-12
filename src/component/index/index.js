import React from "react"
import Base from "../../App"
import Slideshow from "./content/slideshow"

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      slideImg:['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg','slide6.jpg','slide7.jpg','slide8.jpg']
    }
  }
  render(){
   
    console.log(this.state.slideImg)
    return(
      <Base>
        <Slideshow imgs={this.state.slideImg}></Slideshow>
        中间填充
      </Base>
    )
  }
}
export default Index;