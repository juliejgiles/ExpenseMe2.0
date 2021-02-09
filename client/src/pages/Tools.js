import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import "../App.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

export const Tools = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [brops, bet] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <AnimatePresence>
      <motion.div
        className='tool'
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <div>
          <Link to='/'>
            <div className='button' id='button-tool'>
              <div id='circle'></div>
              <a>Back</a>
            </div>
          </Link>
          <div className='container-two-tools'>
            <h1 className='dash-title'>Tricks Of The Trade</h1>

            <h4 className='subtitle'>WATCH YOUR WALLET GROW</h4>
          </div>

          <div className='tool-container'>
            <Link to='/current-goal'>
              <animated.div
                class='cardOne'
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              />{" "}
            </Link>
          </div>

          <Link to='/moneytips/'>
            <animated.div
              class='cardTwo'
              onMouseMove={({ clientX: x, clientY: y }) =>
                bet({ xys: calc(x, y) })
              }
              onMouseLeave={() => bet({ xys: [0, 0, 1] })}
              style={{ transform: brops.xys.interpolate(trans) }}
            />
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Tools;
