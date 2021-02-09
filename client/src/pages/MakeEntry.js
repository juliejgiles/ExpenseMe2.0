import { Link, Switch, Route, NavLink, useLocation } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalState";
import { AddTransaction } from "../components/AddTransaction";

export const MakeEntry = () => {
  return (
    <div>
      <GlobalProvider>
        <h2>Make an entry</h2>
        <AddTransaction />

        <Link to="/">Back</Link>
      </GlobalProvider>
    </div>
  );
};
