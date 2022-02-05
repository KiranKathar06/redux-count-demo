const initial = "kiran";
const reducer = (state = initial, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "Add":
      return (state = action.data);
    default:
      return state;
  }
};

export default reducer;
