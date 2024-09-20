import React from "react";
import "./Login.css";
import dogImage from "../assets/perritohome2.png"; // Imagen del perro
import Navbar from "../Navbar/NavbarLogin";

const Login = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <div className="background">
        <div className="overlay">
          <div className="content-container">
            <div className="login-left">
              <img src={dogImage} alt="Dog" className="dog-image" />
            </div>
            <div className="login-right">
              <div className="login-box">
                <h2>Login</h2>
                <form>
                  <div className="input-group">
                    <label htmlFor="username">
                      <i className="fa fa-user"></i> Username or Email
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username or Email"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">
                      <i className="fa fa-lock"></i> Enter your Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <button type="submit" className="login-button">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
