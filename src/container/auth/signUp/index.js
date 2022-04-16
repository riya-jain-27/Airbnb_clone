import React, {useState} from "react";
import { Grid, Card, TextField, Button, Typography, InputAdornment } from "@mui/material";
import { Lock, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";
import BASEURL from "../../../constants"

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
        axios.post(`${BASEURL}/auth/signUp`, {
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
                  <Grid item md={12} id="auth_input_container">
                  <TextField fullWidth sx={{ input: { color: 'white' }, label: { color: 'white' }, borderBottom: "1px solid white"}}
                      label="Confirm Password"
                      type={"password"}
                      onChange={handleConfirmPassword}
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
                    SIGN UP
                  </Button>
                </Grid>
                <Grid item md={12} id="auth_bottomText">
                  <Typography>
                    Already a member? {" "}
                    <span
                      onClick={() => {
                        navigate("/");
                      }}
                      id="auth_login_signUp"
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

const styles ={
  root: {
      height: "100vh",
  },
  leftSection: {
      backgroundImage: `url(https://www.strategyzer.com/hubfs/Business_Model_Examples-airBnB.jpg)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
  }
}

export default SignUpScreen;