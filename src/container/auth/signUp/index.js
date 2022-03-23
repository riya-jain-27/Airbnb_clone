import React, {useState} from "react";
import { Grid, Card, TextField, Button, Typography, InputAdornment } from "@mui/material";
import styles from "./styles";
import { Lock, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpScreen = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleLogin = () => {
        // alert(password+username);
        axios.post("http://localhost:8005/auth/signUp", {
            username,
            password,
            confirmPassword,
        }).then(function(response){
            alert(response.data.message)
        }).catch(function (error){
            console.log(error)
        })
    }

    return (
      <>
        <Grid container style={styles.root}>
          <Grid item md={8} style={styles.leftSection}></Grid>
          <Grid item md={4}>
            <Card style={{ height: "100%", borderRadius: 0, color: "white", backgroundColor: "black" }}>
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
                  <Grid item md={12} style={{ margin: 20 }}>
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
                  <Grid item md={12} style={{ margin: 20 }}>
                  <TextField fullWidth sx={{ input: { color: 'white' }, label: { color: 'white' }, borderBottom: "1px solid white"}}
                      label="Confirm Password"
                      type={"password"}
                      onChange={handleConfirmPassword}
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
                    style={{ width: "100%",background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)" }}
                    variant="contained"
                    onClick={handleLogin}
                  >
                    SIGN UP
                  </Button>
                </Grid>
                <Grid item md={12} style={{ textAlign: "center" }}>
                  <Typography>
                    Already a member? {" "}
                    <span
                      onClick={() => {
                        navigate("/");
                      }}
                      style={{ color: "lightblue", cursor: "pointer", textDecoration: "underline" }}
                    >
                      Login
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

export default SignUpScreen;