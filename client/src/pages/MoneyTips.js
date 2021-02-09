import { Link } from "react-router-dom";
import { render } from "react-dom";
import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import CardA from "../1.png";
import CardB from "../2.png";
import CardC from "../3.png";

const pages = [
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${CardA})`,
      }}
    ></animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${CardB})`,
      }}
    ></animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${CardC})`,
      }}
    ></animated.div>
  ),
];

export const MoneyTips = () => {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <div className='money-back'>
      <div className='simple-trans-main' onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
        <Link to='/tools/'>
          <div className='button' id='button-tips'>
            <div id='circle'></div>
            <a>Back</a>
          </div>
        </Link>
      </div>
    </div>
  );
};
