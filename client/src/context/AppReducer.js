//reducer changes the state and sends it down to components
export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state, //return initial state
        loading: false,
        transactions: action.payload, //the payload is the data we get from GlobalState actions
      };
    case "DELETE_TRANSACTION":
      return {
        ...state, //return initial state
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
