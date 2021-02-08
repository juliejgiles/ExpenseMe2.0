import React, { useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";
import { numberWithCommas } from "../utils/format";
import { GoalGlobalContext } from "../context-goal/GoalGlobalState";
import { Progress } from "../pages/progressBar";

//Adding commas to money figures using regex
// import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { contributions } = useContext(GlobalContext);
  const amounts = contributions.map((contribution) => contribution.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const [style, setStyle] = React.useState({});
  const { goals } = useContext(GoalGlobalContext);
  const i = goals.length - 1;
  const descriptions = goals.map((goal) => goal.text);
  const yourGoal = descriptions[i];
  const targets = goals.map((goal) => goal.amount);
  const yourTarget = targets[i];
  const percentage = (total / yourTarget) * 100;

  console.log(percentage);

  return (
    <>
      <h4>Your balance</h4>
      <h1 className='balance'> ${numberWithCommas(total)}</h1>
      <Progress done={percentage} />
    </>
  );
};
