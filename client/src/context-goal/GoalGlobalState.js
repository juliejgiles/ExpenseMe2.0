import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//Initial state
const initialState = {
  goals: [],
  error: null,
  loading: true,
};

//create context
export const GoalGlobalContext = createContext(initialState);

//provider component
export const GoalGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  async function getGoals() {
    try {
      const res = await axios.get("/api/v1/goals");
      dispatch({
        type: "GET_GOALS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "GOAL_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteGoal(id) {
    try {
      await axios.delete(`/api/v1/goals/${id}`);
      dispatch({
        type: "DELETE_GOAL",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "GOAL_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addGoal(goal) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/goals", goal, config);
      dispatch({
        type: "ADD_GOAL",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "GOAL_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GoalGlobalContext.Provider
      value={{
        goals: state.goals,
        error: state.error,
        loading: state.loading,
        getGoals,
        deleteGoal,
        addGoal,
      }}
    >
      {children}
    </GoalGlobalContext.Provider>
  );
};
