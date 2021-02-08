import React, { useContext } from "react";
import { GoalGlobalContext } from "../context-goal/GoalGlobalState";
import { numberWithCommas } from "../utils/format";

export const Goal = ({ goal }) => {
  const { deleteGoal } = useContext(GoalGlobalContext);
  return (
    <li>
      {goal.text}
      <span>$ {numberWithCommas(Math.abs(goal.amount))}</span>
      <button
        onClick={() => deleteGoal(goal._id)}
        // onClick={() => console.log("clicked")}
        className="delete-btn"
      ></button>
    </li>
  );
};
