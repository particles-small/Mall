import React from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import App from "../App.js"
import Index from "./index/index"
import accountPage from "./shoppAccount/accountPage";

const BasicRoute =()=>(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />>
      <Route path="/index" component={Index} />
      <Route path="/account" component={accountPage} />
    </Switch>

  </Router>
)
export default BasicRoute;
