import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <div className="m-1">
        <h1>About</h1>
        <h2>This is food app built in Namaste React Web Series</h2>
      </div>

      <div className="m-1">
        <h3>Team members:</h3>
        <User />
        <UserClass />
      </div>
    </div>
  );
};

export default About;
