import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { handleGoogleSignIn, initializeLoginFramework } from "./LoginManage";
import "./Login.css";
import GLogo from "../../Images/g.png";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  initializeLoginFramework();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };
  return (
    <div className="">
      <div className="otherLogin">
        <div className="signInButton" onClick={googleSignIn}>
          <img src={GLogo} alt="" />
          <p>Continue with Google</p>
        </div>
      </div>
    </div>
  );
};
export default Login;
