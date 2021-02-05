export default (state, action) => {
  switch (action.type) {
    case "DELETE_CONTRIBUTION":
      return {
        ...state,
        contributions: state.contributions.filter(
          (contribution) => contribution.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};
