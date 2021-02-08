import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";
import { Link } from "react-router-dom";
import { Header } from "../components-holiday/Header";
import { GoalDescription } from "../components-holiday/GoalDescription";
import { ContributionList } from "../components-holiday/ContributionList";
import { AddContribution } from "../components-holiday/AddContribution";
import { GlobalProvider } from "../context-holiday/GlobalState";
import { GoalGlobalProvider } from "../context-goal/GoalGlobalState";
import { Balance } from "../components-holiday/Balance";
import { AddGoal } from "../components-holiday/AddGoal";
import { GoalList } from "../components-holiday/GoalList";
import { Progress } from "./progressBar";
import { Contribution } from "../components-holiday/Contribution";

export const Holidays = () => {
  return (
    <div>
      <GlobalProvider>
        <GoalGlobalProvider>
          <Header />
          <AddGoal />
          <GoalDescription />
          <GoalList />
          <ContributionList />
          <AddContribution />
          <Balance />
          <Link to="/tools/">Back</Link>

          <h1>React Progress Bar</h1>
          <Progress done="100" />
        </GoalGlobalProvider>
      </GlobalProvider>
    </div>
  );
};

export default Holidays;
