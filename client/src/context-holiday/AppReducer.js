export default (state, action) => {
  switch (action.type) {
    case "GET_CONTRIBUTIONS":
      return {
        ...state,
        loading: false,
        contributions: action.payload,
      };

    case "DELETE_CONTRIBUTION":
      return {
        ...state,
        contributions: state.contributions.filter(
          (contribution) => contribution._id !== action.payload
        ),
      };

    case "ADD_CONTRIBUTION":
      return {
        ...state,
        contributions: [...state.contributions, action.payload],
      };

    case "CONTRIBUTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
