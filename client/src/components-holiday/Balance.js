import React, { useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";
import { numberWithCommas } from "../utils/format";

//Adding commas to money figures using regex
// import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { contributions } = useContext(GlobalContext);
  const amounts = contributions.map((contribution) => contribution.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your balance</h4>
      <h1> ${numberWithCommas(total)}</h1>
    </>
  );
};
