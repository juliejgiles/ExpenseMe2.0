import React from "react";
import { Header } from "./components/Header";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
