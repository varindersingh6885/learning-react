import { Component } from "react";

import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");

    return (
      <div>
        <div className="m-1">
          <h1>About</h1>
          <h2>This is food app built in Namaste React Web Series</h2>
        </div>

        <div className="m-1">
          <h3>Team members:</h3>
          <UserClass name="Varinder Singh" componentType="class based" />
        </div>
      </div>
    );
  }
}

export default About;
