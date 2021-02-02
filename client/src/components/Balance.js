import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Adding commas to money figures using regex
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your balance</h4>
      <h1> ${numberWithCommas(total)}</h1>
    </>
  );
};
