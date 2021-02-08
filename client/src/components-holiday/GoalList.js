import React, { useContext, useEffect } from "react";
import { GoalGlobalContext } from "../context-goal/GoalGlobalState";
import { Goal } from "./Goal";

export const GoalList = () => {
  const { goals, getGoals } = useContext(GoalGlobalContext);

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <>
      <h3>Your past goals:</h3>
      <ul className='list'>
        {goals.map((goal) => (
          <Goal key={goal.id} goal={goal} />
        ))}
      </ul>
    </>
  );
};
