import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2>Name: Varinder Singh</h2>
        <h3>Location: Punjab</h3>
        <h4>
          Contact:{" "}
          <a href="mailto:varindersingh6885@gmail.com">
            varindersingh6885@gmail.com
          </a>
        </h4>
      </div>
    );
  }
}

export default UserClass;
