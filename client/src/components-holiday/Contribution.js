import React, { useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";

export const Contribution = ({ contribution }) => {
  const { deleteContribution } = useContext(GlobalContext);
  return (
    <li>
      {contribution.text}
      <span>$ {Math.abs(contribution.amount)}</span>
      <button
        onClick={() => deleteContribution(contribution.id)}
        className="delete-btn"
      ></button>
    </li>
  );
};
