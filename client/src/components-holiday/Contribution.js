import React, { useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Contribution = ({ contribution }) => {
  const { deleteContribution } = useContext(GlobalContext);
  return (
    <li>
      {contribution.text}
      <span>$ {numberWithCommas(Math.abs(contribution.amount))}</span>
      <button
        onClick={() => deleteContribution(contribution._id)}
        // onClick={() => console.log("clicked")}
        className="delete-btn"
      ></button>
    </li>
  );
};
