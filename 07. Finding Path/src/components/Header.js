import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const changeBtnName = () => {
    setBtnName((prevValue) => (prevValue === "Login" ? "Logout" : "Login"));
  };

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
