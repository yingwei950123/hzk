import React from "react";
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import Home from './component/Home'
import Login from './component/Login'
function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
            
        </Switch>
      </div>
    </Router>
  );
}


export default AppRouter;