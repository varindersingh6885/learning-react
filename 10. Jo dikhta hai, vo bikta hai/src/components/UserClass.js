import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

/**
 *
 * Life Cycle
 *
 * Mounting:
 *    Constructor (set dummy data)
 *    render()
 *        HTML is rendered
 *    componentDidMount()
 *        Api call
 *        update state -> this.setState(Api data)
 *
 *  ---------------------------------------------
 *
 * Updating:
 *    render(with new state data)
 *    HTML updated with new data
 *    componentDidUpdate()
 *
 * ----------------------------------------------
 *
 * Unmount:
 *    componentWillUnmount()
 *
 */

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      userData: {
        avatar_url: "https://dummy",
        name: "John Doe",
        location: "India",
        html_url: "https://dummy",
        blog: "https://dummy",
      },
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    const data = await fetch(GITHUB_USER_API + this.props.username);
    const userData = await data.json();
    this.setState({ userData });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { username, componentType } = this.props;
    const { userData } = this.state;
    console.log("render");
    return (
      <div>
        {userData && (
          <div className="user-card">
            <div>
              {" "}
              <img className="user-img" src={userData.avatar_url} />
            </div>
            <div>
              <h2>Name: {userData.name}</h2>
              <h4>Location: {userData.location}</h4>
              <h4>
                Contact:{" "}
                <a href={userData.blog} target="_blank">
                  LinkedIn
                </a>
                {", "}
                <a href={userData.html_url} target="_blank">
                  Github
                </a>
              </h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserClass;
