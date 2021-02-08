import React, { useState, useContext } from "react";
import { GoalGlobalContext } from "../context-goal/GoalGlobalState";

export const AddGoal = () => {
  const [text, setText] = useState("No goals set");
  const [amount, setAmount] = useState(0);

  const { addGoal } = useContext(GoalGlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };

    addGoal(newGoal);
    console.log("button clicked");
  };

  return (
    <div>
      <div>
        <h3>Add a new holiday or goal </h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Description</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's your goal?"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Goal Target Amount <br />
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
          <button className="btn">Add Goal</button>
        </form>
      </div>
    </div>
  );
};
