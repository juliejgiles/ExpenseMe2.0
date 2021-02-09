import React, { useContext } from "react";
import { GoalGlobalContext } from "../context-goal/GoalGlobalState";

export const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});
  const { goals } = useContext(GoalGlobalContext);
  const amounts = goals.map((goal) => goal.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const i = goals.length - 1;
  const descriptions = goals.map((goal) => goal.text);
  const yourGoal = descriptions[i];
  const targets = goals.map((goal) => goal.amount);
  const yourTarget = targets[i];

  const percentage = (total / yourTarget) * 100;

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 400);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};
