import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const changeBtnName = () => {
    setBtnName((prevValue) => (prevValue === "Login" ? "Logout" : "Login"));
  };

  const onlineStatus = useOnlineStatus();

  // if no dependency array then useEffect is called on every render
  // if dependency array is empty = [] then useEffect is just called once on initial render
  // if dependency array is [btnName] then useEffect is called everytime btnName is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="flex justify-between shadow-md items-center mb-4 p-2">
      <div className="w-24">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div>
        <ul className="flex">
          <li className="m-4">
            <p>Online status: {onlineStatus ? "🟢" : "🔴"}</p>
          </li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="m-4">Cart</li>
          <li className="m-4">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="m-4">
            <button onClick={changeBtnName} className="log-btn">
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
