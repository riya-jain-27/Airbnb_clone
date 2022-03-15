import { Grid, Card, TextField, Typography, InputAdornment, Button, IconButton} from "@mui/material";
import React, { useState } from "react";
import { AccountCircle, Lock } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ForgotPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = () => {

    }

    return(
        <>
        <Grid container justify="center" alignItems="center" style={styles.root}>
            <IconButton onClick={()=>window.history.go(-1)} style={{left: 48, top: 48, position: "absolute", color: "white"}}><ArrowBackIcon fontSize="large" /></IconButton>
            <Card style={{padding: 30, borderRadius: 6, color: "white", backgroundColor: "black"}}>
                <Grid style={{marginBottom: 40, textAlign: "center"}}>
                    <Typography variant="h5">Reset Password</Typography>
                    <Typography variant="body1">Enter your new password</Typography>
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
                <Grid md={12}>
                    <Button fullWidth style={{background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)"}} onClick={handleSubmit} variant="contained">SUBMIT</Button>
                </Grid> 
            </Card>
        </Grid>
        </>
    )
}

const styles = {
    root:{
        height: "100vh",
        backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/georgia-airbnb-1617052538.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
    }
}


export default ForgotPassword