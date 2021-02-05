import React, { useState, useCallback } from "react";
import { Header } from "../components/Header";
import { GlobalProvider } from "../context/GlobalState";
import { Link } from "react-router-dom";
import Dankmemes from "../components/Chart";
import PieChart from "../components/pieChart";
import LineChart from "../components/lineChart";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { useTransition, animated } from "react-spring";
const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>
      {" "}
      <PieChart />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>
      {" "}
      <Dankmemes />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      <LineChart />
    </animated.div>
  ),
];

export const Dashboard = () => {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <GlobalProvider>
      <Header />

      <div className='dashboard'>
        <div className='container-two'>
          <h1 className='dash-title'>Dashboard</h1>

          <h4 className='subtitle'>WHERE'D MY MONEY GO?</h4>
          <IncomeExpenses />
        </div>
        <div className='container-one' onClick={onClick}>
          <Link to='/tools/'>Tools</Link>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item];
            return <Page key={key} style={props} />;
          })}
        </div>
        <div className='container-three'>
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
};
