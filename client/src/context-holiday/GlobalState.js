import React, { createContext, useReducer } from "react";
import AppReducer from "../context-holiday/AppReducer";
//Initial state
const initialState = {
  contributions: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  function deleteContribution(id) {
    dispatch({
      type: "DELETE_CONTRIBUTION",
      payload: id,
    });
  }

  function addContribution(contribution) {
    dispatch({
      type: "ADD_CONTRIBUTION",
      payload: contribution,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        contributions: state.contributions,
        deleteContribution,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
