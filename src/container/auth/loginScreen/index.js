import React, {useState} from "react";
import { Grid, Card, TextField, Button, Typography, InputAdornment } from "@mui/material";
import styles from "./styles";
import { Lock, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
    //     // alert(password+username)
    //     axios.post("http://localhost:8005/auth/login", {
    //         username,
    //         password,
    //     }).then(function(response){
    //         console.log(response)
    //     }).catch(function (error){
    //         console.log(error)
    //     })
    }

    return (
      <>
        <Grid container style={styles.root}>
          <Grid item md={8} style={styles.leftSection}></Grid>
          <Grid item md={4}>
            <Card style={{ height: "100%", backgroundColor: "black", color: "white", borderRadius: 0}}>
              <Grid
                container
                justify="center"
                alignItems="center"
                style={{ padding: 15, height: "100%" }}
              >
                <Grid item md={12} style={{ textAlign: "center" }}>
                  <Typography variant="h4">Welcome to Airbnb</Typography>
                  <Typography variant="h6">Enter your details below</Typography>
                </Grid>
                <Grid container>
                  <Grid item md={12} style={{ margin: 20}}>
                    <TextField fullWidth sx={{ input: { color: 'white' }, label: { color: 'white' }, borderBottom: "1px solid white"}}
                      label="Username"
                      type={"string"}
                      onChange={handleUsername}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" style={{color: "white"}}>
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={12} style={{ margin: 20 }}>
                    <TextField fullWidth sx={{ input: { color: 'white' }, label: { color: 'white' }, borderBottom: "1px solid white"}}
                      label="Password"
                      type={"password"}
                      onChange={handlePassword}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" style={{color: "white"}}>
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Button
                    style={{ width: "100%", background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)"}}
                    variant="contained"
                    onClick={handleLogin}
                  >
                    LOGIN
                  </Button>
                  <Typography
                    onClick={()=>{navigate("/forgotPassword")}}
                    style={{
                      color: "lightcoral",
                      textAlign: "right",
                      margin: 10,
                      width: "100%",
                      cursor: "pointer",
                      textDecoration: "underline"
                    }}
                  >
                    Forgot Password?
                  </Typography>
                
                  <div style={{width: "100%", marginTop: 16, marginBottom: 16, fontWeight: 400, fontSize: 12, lineHeight: "16px", display: "flex", flexDirection: "row"}}>
                    <div style={{width: "45%", content: "", display: "block", height: 1, backgroundColor: "rgb(221,221,221)", marginRight: 10}}></div>
                    <div style={{alignItems: "center", marginTop: -8}}>or</div>
                    <div style={{width: "45%", content: "", display: "block", height: 1, backgroundColor: "rgb(221,221,221)", marginLeft: 10}}></div>
                  </div>
                  <Button fullWidth variant="outlined" style={{color: "white", textTransform: "none", lineHeight: "30px", borderColor: "white", borderRadius: 8}}>
                      <div style={{flex: "0 1 0%", position: "absolute", left: 20}}><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: 20, width: 20, display: "block"}}><g fill="none" fill-rule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path d="M0 0h18v18H0V0z"></path></g></svg></div>
                      Continue with Google
                  </Button>
                </Grid>
                
                <Grid item md={12} style={{ textAlign: "center" }}>
                  <Typography>
                    Not a member yet?{" "}
                    <span
                      onClick={() => {
                        navigate("/signUp");
                      }}
                      style={{ color: "lightblue", cursor: "pointer", textDecoration: "underline"}}
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

export default Login;