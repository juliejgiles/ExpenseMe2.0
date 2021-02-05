import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";
import { Contribution } from "./Contribution";

export const ContributionList = () => {
  const { contributions } = useContext(GlobalContext);

  return (
    <>
      <h3>Contributions you've made</h3>
      <ul className="list">
        {contributions.map((contribution) => (
          <Contribution key={contribution.id} contribution={contribution} />
        ))}
      </ul>
    </>
  );
};
