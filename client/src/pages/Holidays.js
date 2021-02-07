import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components-holiday/Header";
import { GoalDescription } from "../components-holiday/GoalDescription";
import { ContributionList } from "../components-holiday/ContributionList";
import { AddContribution } from "../components-holiday/AddContribution";
import { GlobalProvider } from "../context-holiday/GlobalState";
import { Balance } from "../components-holiday/Balance";

export const Holidays = () => {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <GoalDescription />
        <ContributionList />
        <AddContribution />
        <Balance />
        <Link to="/tools/">Back</Link>
      </GlobalProvider>
    </div>
  );
};

export default Holidays;
