import React, { createContext, useReducer } from "react";
import AppReducer from "../context-holiday/AppReducer";
import axios from "axios";

//Initial state
const initialState = {
  contributions: [],
  error: null,
  loading: true,
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  async function getContributions() {
    try {
      const res = await axios.get("/api/v1/contributions");

      dispatch({
        type: "GET_CONTRIBUTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "CONTRIBUTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteContribution(id) {
    try {
      await axios.delete(`/api/v1/contributions/${id}`);
      dispatch({
        type: "DELETE_CONTRIBUTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "CONTRIBUTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addContribution(contribution) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "/api/v1/contributions",
        contribution,
        config
      );
      dispatch({
        type: "ADD_CONTRIBUTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "CONTRIBUTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        contributions: state.contributions,
        error: state.error,
        loading: state.loading,
        getContributions,
        deleteContribution,
        addContribution,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
