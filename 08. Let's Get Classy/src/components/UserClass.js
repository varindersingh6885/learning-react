import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, componentType } = this.props;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h4>Location: Punjab</h4>
        <h4>
          Contact:{" "}
          <a href="mailto:varindersingh6885@gmail.com">
            varindersingh6885@gmail.com
          </a>
        </h4>
        <h4>Component Type: {componentType}</h4>
      </div>
    );
  }
}

export default UserClass;
