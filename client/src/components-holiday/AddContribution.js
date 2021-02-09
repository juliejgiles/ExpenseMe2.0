import React, { useState, useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";

export const AddContribution = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addContribution } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newContribution = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };

    addContribution(newContribution);
  };
  function refreshPage() {
    window.location.reload(false);
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <h3>Make a contribution towards your goal </h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Description</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>

        <button className='btn' onClick={refreshPage}>
          Add Contribution
        </button>
      </form>
    </div>
  );
};
