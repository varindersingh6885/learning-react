import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Something weng wrong!</h1>
      <h4>
        {error.status}: {error.statusText}
      </h4>
    </div>
  );
};

export default NotFound;
