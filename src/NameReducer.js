const initialValue = "Kiran";

const NameReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "AddName":
      return state;
    default:
      return state;
  }
};
export default NameReducer;
