export default (state, action) => {
  switch (action.type) {
    case "GET_GOALS":
      return {
        ...state,
        loading: false,
        goals: action.payload,
      };

    case "DELETE_GOAL":
      return {
        ...state,
        goals: state.goals.filter((goal) => goal._id !== action.payload),
      };

    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };

    case "GOAL_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
