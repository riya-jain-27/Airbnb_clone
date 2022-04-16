import {
  Grid,
  Card,
  TextField,
  Typography,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { AccountCircle, Lock } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import "../styles.css";


const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = () =>{
    axios.post("http://localhost:8005/auth/forgotPassword", {
        username,
        password,
        confirmPassword,
    }).then(function(response){
        alert(response.data.message)
    }).catch(function (error){
        console.log(error)
    })
  };

  return (
    <>
      <Grid container justify="center" alignItems="center" style={styles.root}>
        <IconButton
          onClick={() => window.history.go(-1)}
          id="auth_forgotpassword_arrow"
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Card id="auth_forgotpassword_card">
          <Grid id="auth_forgotpassword_text">
            <Typography variant="h5">Reset Password</Typography>
            <Typography variant="body1">Enter your new password</Typography>
          </Grid>
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
            <TextField
              fullWidth
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                borderBottom: "1px solid white",
              }}
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
            <TextField
              fullWidth
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                borderBottom: "1px solid white",
              }}
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
          <Grid item md={12}>
            <Button
              fullWidth
              id="auth_button"
              onClick={handleSubmit}
              variant="contained"
            >
              SUBMIT
            </Button>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

const styles = {
  root: {
    height: "100vh",
    backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/georgia-airbnb-1617052538.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    justifyContent: "center",
  },
};

export default ForgotPassword;
