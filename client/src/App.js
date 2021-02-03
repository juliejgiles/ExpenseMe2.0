import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Holidays } from "./components/pages/Holidays";
import { MoneyTips } from "./components/pages/MoneyTips";

import "./App.css";

function App() {
  return (
    (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    ),
    (
      //Multi-page routing
      <Router>
        <Link to="/holidays">Holiday tracker</Link>
        <Link to="/moneytips">Money Saving Tips</Link>

        <Switch>
          <Route path="/holidays">
            <Holidays />
          </Route>
          <Route path="/moneytips">
            <MoneyTips />
          </Route>
        </Switch>
      </Router>
    )
  );
}

export default App;
