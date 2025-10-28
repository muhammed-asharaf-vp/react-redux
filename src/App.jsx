// App.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // ✅ Access the Redux store state
  const count = useSelector((state) => state.count);

  // ✅ Get dispatch function
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Redux Counter</h1>

      <h2>Count: {count}</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
