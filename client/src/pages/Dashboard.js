import React, {
  useState,
  useRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { Header } from "../components/Header";
import { GlobalProvider } from "../context/GlobalState";
import Dankmemes from "../components/Chart";
import PieChart from "../components/pieChart";
import LineChart from "../components/lineChart";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { useTransition, animated } from "react-spring";
import { Modal } from "./modal";
import { MakeEntry } from "./MakeEntry";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "white" }}>
      {" "}
      <PieChart />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "white" }}>
      {" "}
      <Dankmemes />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "white" }}>
      <LineChart />
    </animated.div>
  ),
];

export const Dashboard = () => {
  const modalRef = useRef();
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
        <div
          className='button'
          id='button-3'
          onClick={() => modalRef.current.open()}
        >
          <div id='circle'></div>
          <a>Make An Entry</a>
        </div>
        <Link to='/tools'>
          <div class='button' id='button-7'>
            <div id='dub-arrow'>
              <img
                src='https://www.flaticon.com/svg/vstatic/svg/1077/1077198.svg?token=exp=1612690504~hmac=f4078d1ed3006a9ad20c938b81384c42'
                alt=''
              />
            </div>

            <a>Use The Tools</a>
          </div>
        </Link>

        <div className='container-two'>
          <h1 className='dash-title'>Dashboard</h1>

          <h4 className='subtitle'>WHERE'D MY MONEY GO?</h4>

          <IncomeExpenses />
        </div>
        <div className='container-one' onClick={onClick}>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item];
            return <Page key={key} style={props} />;
          })}
        </div>

        <Modal ref={modalRef}>
          <div className='modal-move'>
            <MakeEntry />
          </div>
        </Modal>

        <div className='container-three'>
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
};
