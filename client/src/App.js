import React from "react";
import { Holidays } from "./pages/Holidays";
import { MoneyTips } from "./pages/MoneyTips";
import { Tools } from "./pages/Tools";
import { Dashboard } from "./pages/Dashboard";
import { MakeEntry } from "./pages/MakeEntry";
import { CurrentGoal } from "./components-holiday/CurrentGoal";
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
        <Route path={"/current-goal"} exact={true} component={CurrentGoal} />
      </Switch>
      <Switch>
        <Route path={"/moneytips"} exact={true} component={MoneyTips} />
      </Switch>
      <Switch>
        <Route path={"/entry"} exact={true} component={MakeEntry} />
      </Switch>
    </Router>
  );
}

export default App;
