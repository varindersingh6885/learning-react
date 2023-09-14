import { Component } from "react";

import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="p-4">
        <div className="my-2">
          <h1>About</h1>
          <h2>This is food app built in Namaste React Web Series</h2>
        </div>

        <div className="my-1">
          <h3>Team members:</h3>
          <UserClass username="varindersingh6885" />
          <UserClass username="akshaymarch7" />
        </div>
      </div>
    );
  }
}

export default About;
