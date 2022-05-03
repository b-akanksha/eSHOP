import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import { auth } from "../../utils/firebaseUtil";
import { useStateValue } from "../../context/StateProvider";
import { Alert, Snackbar } from "@mui/material";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [{ error }, dispatch] = useStateValue();

  const handleClose = () => dispatch({ type: "CLOSE_ERROR" });

  const handleError = (message) =>
    dispatch({ type: "ERROR_OCCURED", payload: message });

  const setToken = () => dispatch({ type: "ADD_TOKEN", payload: "token" });

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
        setToken();
      })
      .catch((error) => handleError(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
        setToken();
      })
      .catch((error) => handleError(error.message));
  };

  return (
    <>
      <div className="login">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="login__logo">
            <StoreMallDirectoryOutlinedIcon
              className="login__logoImage"
              fontSize="large"
            />
            <h2 className="login__logoTitle">eSHOP</h2>
          </div>
        </Link>

        <div className="login__container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="login__signInButton"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>

          <p>
            By signing-in you agree to the eShop Website Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button className="login__registerButton" onClick={register}>
            Create your eShop Account
          </button>
        </div>
      </div>
      <Snackbar
        open={error.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          <b>{error.message}</b>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
