import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalProvider } from "../context-holiday/GlobalState";
import { GoalGlobalProvider } from "../context-goal/GoalGlobalState";
import { AddGoal } from "../components-holiday/AddGoal";
import { GoalList } from "../components-holiday/GoalList";

export const Holidays = () => {
  return (
    <div>
      <GlobalProvider>
        <GoalGlobalProvider>
          <AddGoal />

          <GoalList />

          <Link to="/tools/">Back</Link>
        </GoalGlobalProvider>
      </GlobalProvider>
    </div>
  );
};

export default Holidays;
