import React from "react"
import  "../css/nav.css"
import { Link } from "react-router-dom"

class Nav extends React.Component{
   constructor(props){
     super(props)
     this.state={
       tabArr:[{
        "name":'首页',
        "url":"/index"
       },{
        "name":'居家生活',
        "url":"/index"
       },{
        "name":'服饰鞋包',
        "url":"/index"
       },{
        "name":'美食酒水',
        "url":"/index"
       },{
        "name":'个人清洁',
        "url":"/index"
       },{
        "name":'母婴亲子',
        "url":"/index"
       },{
        "name":'运动旅行',
        "url":"/index"
       },{
        "name":'数码家电',
        "url":"/index"
       },{
        "name":'全球特色',
        "url":"/index"
       },{
        "name":'为你严选',
        "url":"/index"
       },{
        "name":'众筹',
        "url":"/index"
       }],
       activeTab:0
     }
   }
   changeActive(key){
     this.setState({
      activeTab:key
     })
   }
   render(){
     const tabs=this.state.tabArr;
     return(
       <div className="header-nav">
         <ul>
            {
              tabs.map((tabs,key)=>(
                  <li key={key}
                  className={key==this.state.activeTab?"activeNav":''} 
                  onClick={()=>this.changeActive(key)}>
                    <Link to={tabs["url"]}>{tabs["name"]}</Link>
                    
                  </li>
              ))
            }
         </ul>
       </div>
     )
   }
}
export default Nav