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
import { Progress } from "../pages/progressBar";
import { Contribution } from "../components-holiday/Contribution";

export const CurrentGoal = () => {
  return (
    <div className='goal-cont'>
      <GlobalProvider>
        <GoalGlobalProvider>
          {/* <Header /> */}
          {/* <AddGoal /> */}
          <GoalDescription />
          <Balance />
          <AddContribution />
          <GoalList />
          <ContributionList />

          <Link to='/tools/'>Back</Link>
        </GoalGlobalProvider>
      </GlobalProvider>
    </div>
  );
};

export default CurrentGoal;
