import React from 'react';
import Header from "./component/index/header/header.js"
import Footer from "./component/index/footer"
import "antd/dist/antd.css";

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
  
}

export default App;
