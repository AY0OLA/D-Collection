import react, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  const [action, setAction] = useState("sign-up");

  return (
    <div className="Login" id="Login">
      <div className="Log-out">
        <h1>
          D<span className="tin">-Collection</span>
        </h1>
        {action === "password" ? (
          <div className="follow">
            {" "}
            <span className="Acc">Forget Password?</span>
            <span className="link">
              Enter your email address to get the password reset link
            </span>
          </div>
        ) : (
          <div>
            {action === "sign-up" ? (
              <div></div>
            ) : (
              <span className="Acc">Create an account</span>
            )}
          </div>
        )}

        <div className="content">
          {action === "password" ? (
            <div>
              <div className="Input">
                <div className="input">
                  <label htmlFor="email">Email Address</label>
                  <input className="mail" type="email" />
                </div>
              </div>
            </div>
          ) : (
            <div className="Input">
              {action === "sign-up" ? (
                <div></div>
              ) : (
                <div className="input">
                  <label htmlFor="name">Name</label>
                  <input className="mail" type="text" />
                </div>
              )}
              <div className="input">
                <label htmlFor="email">Email Address</label>
                <input className="mail" type="email" />
              </div>
              {action === "sign-up" ? (
                <div className="password">
                  <div className="flex">
                    <label htmlFor="password">Password</label>
                    <a
                      href="#"
                      className="password"
                      onClick={() => {
                        setAction("password");
                      }}
                    >
                      forget password?
                    </a>
                  </div>
                  <input className="mail" type="password" />
                </div>
              ) : (
                <div className="password">
                  <div className="flex">
                    <label htmlFor="password">Password</label>
                  </div>
                  <input className="mail" type="password" />
                </div>
              )}
            </div>
          )}
          {action === "password" ? (
            <div></div>
          ) : (
            <div>
              {action === "sign-up" ? (
                <div className="sign">
                  <input type="checkbox" id="check" />
                  Keep me signed in
                </div>
              ) : (
                <div className="sign">
                  By Continuing, you agree to our{" "}
                  <a href="#">terms and condition</a>
                </div>
              )}
            </div>
          )}

          {action === "password" ? (
            <div className="login">
              <a href="#">Password Reset</a>
            </div>
          ) : (
            <div>
              {action === "sign-up" ? (
                <div className="login">
                  <a href="#">Login</a>
                </div>
              ) : (
                <div className="login">
                  <a href="#">Sign Up</a>
                </div>
              )}
            </div>
          )}
          {action === "password" ? (
            <div></div>
          ) : (
            <div>
              {action === "sign-up" ? (
                <div className="option flex">
                  <div className="line1"></div>
                  <span className="OPSign">or sign in with</span>
                  <div className="line1"></div>
                </div>
              ) : (
                <div className="option flex">
                  <div className="line1"></div>
                  <span className="OPSign">or sign up with</span>
                  <div className="line1"></div>
                </div>
              )}
            </div>
          )}
          {action === "password" ? (
            <div></div>
          ) : (
            <div className="google ">
              <FcGoogle className="icon" />
              <span>Continue with Google</span>
            </div>
          )}
          {action === "password" ? (
            <div className="create">
              <a
                href="#"
                onClick={() => {
                  setAction("sign-up");
                }}
              >
                Login in
              </a>
            </div>
          ) : (
            <div>
              {action === "sign-up" ? (
                <div className="create">
                  Create an Account{" "}
                  <a
                    href="#"
                    className="sign-up"
                    onClick={() => {
                      setAction("sign-in");
                    }}
                  >
                    Sign up here
                  </a>
                </div>
              ) : (
                <div className="create">
                  Already have an account{" "}
                  <a
                    href="#"
                    className="sign-up"
                    onClick={() => {
                      setAction("sign-up");
                    }}
                  >
                    Sign in here
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
