const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== payload),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
