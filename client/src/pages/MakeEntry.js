import { Link, Switch, Route, NavLink, useLocation } from "react-router-dom";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { GlobalProvider } from "../context/GlobalState";
import { AddTransaction } from "../components/AddTransaction";

export const MakeEntry = () => {
  return (
    <div>
      <GlobalProvider>
        <h2>Make an entry</h2>
        <AddTransaction />

        <Link to='/'>Back</Link>
      </GlobalProvider>
    </div>
  );
};
