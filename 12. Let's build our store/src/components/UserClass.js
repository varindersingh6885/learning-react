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
          <div className="flex items-center p-4 border my-2 rounded-lg">
            <div>
              {" "}
              <img
                className="w-28 rounded-full m-2"
                src={userData.avatar_url}
              />
            </div>
            <div className="px-4">
              <h2 className="my-1">Name: {userData.name}</h2>
              <h4 className="my-1">Location: {userData.location}</h4>
              <h4 className="my-1">
                Contact:{" "}
                <a
                  href={userData.blog}
                  target="_blank"
                  className="underline text-blue-600 cursor-pointer"
                >
                  LinkedIn
                </a>
                {", "}
                <a
                  href={userData.html_url}
                  target="_blank"
                  className="underline text-blue-600 cursor-pointer"
                >
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
