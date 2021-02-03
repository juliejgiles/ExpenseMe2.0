import React from "react";
import { Holidays } from "./pages/Holidays";
import { MoneyTips } from "./pages/MoneyTips";
import { Tools } from "./pages/Tools";
import { Dashboard } from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact={true} component={Dashboard} />
      </Switch>
      <Switch>
        <Route path={"/tools"} exact={true} component={Tools} />
      </Switch>
      <Switch>
        <Route path={"/holidays"} exact={true} component={Holidays} />
      </Switch>
      <Switch>
        <Route path={"/moneytips"} exact={true} component={MoneyTips} />
      </Switch>
    </Router>
  );
}

export default App;
