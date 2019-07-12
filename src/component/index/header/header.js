import React from "react"
import titleImg from "../../../images/icon1.png"
import "../css/header.css"
import { Input,Icon, Button,Badge } from 'antd';
import Nav from "./nav"
import { Link } from "react-router-dom";

const { Search } = Input;
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      shoppingNums:0
    }
  }
  render(){
    return(
      <div>
        <div className="header-center">
          <div className="header-icon">
            <img src={titleImg} style={{width:124}} alt="网易严选"/>
          </div>
          <div>
            <Search placeholder="input search text" 
              style={{width:532}}
              enterButton="搜索"
              prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
              onSearch={value => console.log(value)}
              className="header-searchgroup"/>
              <Link to="/account">
                <Button type="primary" icon="shopping-cart" id="shoppingCar-but" style={{width:134,marginLeft:50}}>
                  购物车
                  <Badge count={this.state.shoppingNums} showZero/>
                </Button>
              </Link>
            
          </div>
        </div>
        <Nav></Nav>
    </div>
    )
  }
}
export default Header;