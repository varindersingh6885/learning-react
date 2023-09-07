import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 0,
    };
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
        <button
          className="mt-1"
          onClick={() => this.setState({ count1: this.state.count1 + 1 })}
        >
          Count1: {this.state.count1}
        </button>
        <button
          className="ml-1"
          onClick={() => this.setState({ count2: this.state.count2 + 1 })}
        >
          Count2: {this.state.count2}
        </button>
      </div>
    );
  }
}

export default UserClass;
