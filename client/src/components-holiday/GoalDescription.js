import React, { useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";

//Adding commas to money figures using regex
import { numberWithCommas } from "../utils/format";

export const GoalDescription = () => {
  const { contributions } = useContext(GlobalContext);
  const amounts = contributions.map((contribution) => contribution.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your goal target amount:</h4>
      <h1> ${numberWithCommas(total)}</h1>
    </>
  );
};
