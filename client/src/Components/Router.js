/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import Humor from "../pages/Humor";
import Main from "../pages/Main";
import Serious from "../pages/Serious";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/humor' component={Humor} />
          <Route path='/serious' component={Serious} />
        </Switch>
      </>
    </Router>
  );
};
