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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <p>Online status: {onlineStatus ? "🟢" : "🔴"}</p>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>
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
