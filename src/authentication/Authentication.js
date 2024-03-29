import React, { useState } from "react";
import "./authentication.css";
import Login from "./login";
import Signup from "./signup";

function Authentication() {
  const [active, setActive] = useState("login");
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="authentication">
      <div className="auth__left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt=""></img>
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don`t have an account?
                <button onClick={handleChange}>Sign up</button>{" "}
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
