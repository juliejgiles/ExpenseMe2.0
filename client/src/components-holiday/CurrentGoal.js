import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context-holiday/GlobalState";
import { Link } from "react-router-dom";
import { Header } from "../components-holiday/Header";
import { GoalDescription } from "../components-holiday/GoalDescription";
import { ContributionList } from "../components-holiday/ContributionList";
import { AddContribution } from "../components-holiday/AddContribution";
import { GlobalProvider } from "../context-holiday/GlobalState";
import { GoalGlobalProvider } from "../context-goal/GoalGlobalState";
import { Balance } from "../components-holiday/Balance";
import { AddGoal } from "../components-holiday/AddGoal";
import { GoalList } from "../components-holiday/GoalList";
import { Progress } from "../pages/progressBar";
import { Contribution } from "../components-holiday/Contribution";
import { motion, AnimatePresence } from "framer-motion";

export const CurrentGoal = () => {
  return (
    <AnimatePresence>
      <motion.div
        className='goal-cont'
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
        <GlobalProvider>
          <GoalGlobalProvider>
            <GoalDescription />
            <Balance />
            <AddContribution />
            <GoalList />
            <ContributionList />
            <Link to='/holidays/'>
              <div className='button' id='button-addGoal'>
                <div id='circle'></div>
                <a>Delete/Add Goal</a>
              </div>
            </Link>
            <Link to='/tools/'>
              <div className='button' id='button-tool'>
                <div id='circle'></div>
                <a>Back</a>
              </div>
            </Link>
            {/* <Link to='/'>
              <div className='button-down' id='button-scroll'>
                <div id='circle'></div>
                <a>▼</a>
              </div>
            </Link> */}
            <Link to='/tools/'>Back</Link>
          </GoalGlobalProvider>
        </GlobalProvider>
      </motion.div>
    </AnimatePresence>
  );
};

export default CurrentGoal;
