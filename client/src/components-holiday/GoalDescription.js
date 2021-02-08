import React, { useContext } from "react";
// import { GlobalContext } from "../context-holiday/GlobalState";
import { GoalGlobalContext } from "../context-goal/GoalGlobalState";

//Adding commas to money figures using regex
import { numberWithCommas } from "../utils/format";

export const GoalDescription = () => {
  const { goals } = useContext(GoalGlobalContext);
  const amounts = goals.map((goal) => goal.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const i = goals.length - 1;
  const descriptions = goals.map((goal) => goal.text);
  const yourGoal = descriptions[i];
  const targets = goals.map((goal) => goal.amount);
  const yourTarget = targets[i];

  return (
    <>
      <h4 className='subtitle-goal'>Your Deepest Desires:</h4>
      <h1 className='dash-title-goal'> {yourGoal}</h1>
      <h4 className='subtitle-goal'>How much you needa save:</h4>
      <h1 className='dash-title-goal'> ${yourTarget}</h1>
    </>
  );
};
