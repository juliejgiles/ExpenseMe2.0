import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components-holiday/Header";
import { GoalDescription } from "../components-holiday/GoalDescription";
import { ContributionList } from "../components-holiday/ContributionList";
import { AddContribution } from "../components-holiday/AddContribution";
import { GlobalProvider } from "../context-holiday/GlobalState";
import { GoalGlobalProvider } from "../context-goal/GoalGlobalState";
import { Balance } from "../components-holiday/Balance";
import { AddGoal } from "../components-holiday/AddGoal";

export const Holidays = () => {
  return (
    <div>
      <GlobalProvider>
        <GoalGlobalProvider>
          <Header />
          <AddGoal />
          <GoalDescription />
          <ContributionList />
          <AddContribution />
          <Balance />
          <Link to="/tools/">Back</Link>
        </GoalGlobalProvider>
      </GlobalProvider>
    </div>
  );
};

export default Holidays;
