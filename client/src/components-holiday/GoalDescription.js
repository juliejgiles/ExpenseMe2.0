import React, { useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";
import { GoalGlobalContext } from "../context-goal/GoalGlobalState";

//Adding commas to money figures using regex
import { numberWithCommas } from "../utils/format";

export const GoalDescription = ({ goal }) => {
  const { goals } = useContext(GoalGlobalContext);
  const amounts = goals.map((goal) => goal.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your goal</h4>
      <h1> ${goals[0].text}</h1>
      <h4>Your goal target amount:</h4>
      <h1> ${numberWithCommas(amounts[0])}</h1>
    </>
  );
};
