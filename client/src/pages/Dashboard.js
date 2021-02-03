import React from "react";
import { Header } from "../components/Header";
import { AddTransaction } from "../components/AddTransaction";
import { GlobalProvider } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <AddTransaction />
          <Link to="/tools/">Tools</Link>
        </div>
      </GlobalProvider>
    </div>
  );
};
