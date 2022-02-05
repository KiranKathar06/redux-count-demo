import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Name from "./Name";
function App() {
  const myname = useSelector((state) => state);
  const dispatch = useDispatch();
  const IncrementData = () => {
    dispatch({ type: "INCREMENT" });
  };
  const DECREMENTDATA = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="App">
      <div>{myname}</div>
      <button type="submit" onClick={IncrementData}>
        INCREMENT
      </button>
      <button type="submit" onClick={DECREMENTDATA}>
        DECREMENT
      </button>
      <Name />
    </div>
  );
}

export default App;
