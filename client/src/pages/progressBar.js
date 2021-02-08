import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PropTypes from "prop-types";

export const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 400);

  return (
    <div className='progress'>
      <div className='progress-done' style={style}>
        {done}%
      </div>
    </div>
  );
};
