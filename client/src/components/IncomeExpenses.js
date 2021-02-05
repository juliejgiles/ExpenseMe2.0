import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Adding commas to money figures using regex
import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    //Adding all positive amounts together and fixing it to 2 decimal places
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{numberWithCommas(income)}</p>
      </div>
      <div className='inc-exp-containerOne'>
        <div>
          <h4>Expense</h4>
          <p className='money minus'>{numberWithCommas(expense)}</p>
        </div>
      </div>
    </div>
  );
};
