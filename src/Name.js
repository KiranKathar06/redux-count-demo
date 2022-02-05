import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Name = () => {
  const name = useSelector((state) => state);
  const dispatch = useDispatch();
  const ShowName = () => {
    dispatch({ type: "Add", data: "Gaurav" });
  };
  return (
    <>
      <div>
        <h2>SHow The Data</h2>
        <ul>
          <li>{name}</li>
        </ul>
        <input type="text"></input>
        <span>
          <button type="submit" onClick={ShowName}>
            Click Me
          </button>
        </span>
      </div>
    </>
  );
};

export default Name;
