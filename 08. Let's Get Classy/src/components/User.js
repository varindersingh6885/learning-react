const User = (props) => {
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
    </div>
  );
};

export default User;
