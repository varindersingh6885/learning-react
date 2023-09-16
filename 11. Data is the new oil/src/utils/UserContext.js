import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "John Doe",
  },
});

export default UserContext;
