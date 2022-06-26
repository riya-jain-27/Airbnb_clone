import React, {useState} from "react";
import { Grid, Card, TextField, Button, Typography, InputAdornment } from "@mui/material";
import "../styles.css";
import { Lock, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import fire from "../../../fire"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import BASEURL from "../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useSelect } from "@mui/base";
import * as actiontypes from "../../../redux/actiontypes";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const LoggedIn = () => {
    dispatch({type: actiontypes.LOGGED_IN});
    // console.log(store.isUserLoggedIn);
  }

  const handleLogin = () => {
    // alert(password+username)
    axios
    .post(`${BASEURL}/auth/login`, {
      username,
      password,
    })
    .then(function (response) {
      if (response.data.message === "Login success"){
        LoggedIn();
        navigate("/home");
      }
      else alert(response.data.message);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const googleLogin = () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    LoggedIn();
    navigate("/home")
  }).catch((error) => {
    // Handle Errors here.
    console.log("error::::::", error)
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert("Login failed")
  });
  }

    return (
      <>
        <Grid container style={styles.root}>
          <Grid item sm={12} md={8} style={styles.leftSection}></Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card id="auth_rightSection">
              <Grid
                container
                justify="center"
                alignItems="center"
                id="auth_rightSection_container"
              >
                <Grid item md={12} id="auth_text">
                  <Typography variant="h4">Welcome to Airbnb</Typography>
                  <Typography variant="h6">Enter your details below</Typography>
                </Grid>
                <Grid container>
                  <Grid item md={12} id="auth_input_container">
                    <TextField fullWidth sx={{ input: { color: 'white' }, label: { color: 'white' }, borderBottom: "1px solid white"}}
                      label="Username"
                      type={"string"}
                      onChange={handleUsername}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" id="auth_input_icon">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={12} id="auth_input_container">
                    <TextField fullWidth sx={{ input: { color: 'white' }, label: { color: 'white' }, borderBottom: "1px solid white"}}
                      label="Password"
                      type={"password"}
                      onChange={handlePassword}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" id="auth_input_icon">
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Button
                    id="auth_button"
                    variant="contained"
                    onClick={handleLogin}
                  >
                    LOGIN
                  </Button>
                  <Typography
                    onClick={()=>{navigate("/forgotPassword")}}
                    id="auth_login_forgotPassword">
                    Forgot Password?
                  </Typography>
                
                  <div id="auth_login_separator">
                    <div id="auth_login_leftline"></div>
                    <div id="auth_login_or">or</div>
                    <div id="auth_login_rightline"></div>
                  </div>
                  <Button onClick={googleLogin} fullWidth variant="outlined" id="auth_login_google">
                      <div id="auth_login_google_logo"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: 20, width: 20, display: "block"}}><g fill="none" fillRule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path d="M0 0h18v18H0V0z"></path></g></svg></div>
                      Continue with Google
                  </Button>
                </Grid>
                
                <Grid item md={12} id="auth_bottomText">
                  <Typography>
                    Not a member yet?{" "}
                    <span
                      onClick={() => {
                        navigate("/signUp");
                      }}
                      id="auth_login_signUp"
                    >
                      Sign up
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </>
    );
}

const styles ={
  root: {
      height: "100vh",
  },
  leftSection: {
      backgroundImage: `url(https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F05%2F26%2Flead-south-dakota-airbnb-exterior-AIRBNBTRAVEL0521.jpg)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
  }
}

export default Login;