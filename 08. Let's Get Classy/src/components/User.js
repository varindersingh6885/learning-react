import { useState } from "react";

const User = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h4>Location: Punjab</h4>
      <h4>
        Contact:{" "}
        <a href="mailto:varindersingh6885@gmail.com">
          varindersingh6885@gmail.com
        </a>
      </h4>
      <h4>Component Type: {props.componentType}</h4>

      <button className="mt-1" onClick={() => setCount1(count1 + 1)}>
        Count1: {count1}
      </button>
      <button className="ml-1" onClick={() => setCount2(count2 + 1)}>
        Count2: {count2}
      </button>
    </div>
  );
};

export default User;
