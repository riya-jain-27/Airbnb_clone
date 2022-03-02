import React, {useState, useEffect} from "react";
import { Grid, Card, Typography, Button, TextField} from "@mui/material";
import fire from "../../fire";

const HelpCentre = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]); 
    const db = fire.database();

    useEffect(() => {
        readDataFromFirebase();
    }, []);
    
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage =() => {
        console.log(message);
        db.push({
            message: message,
            user: "Riya",
            timestamp: new Date(),
        });
        setMessage("");
    }
    
    const readDataFromFirebase = () => {
        db.on("value", (data) => {
            let messagesForServer = data.val();
            let messagesArray = [];
            for(let key in messagesForServer) {
                messagesArray.push(messagesForServer[key]);
            }
            setMessages(messagesArray);
        });
    }

    return (
        <>
            <Grid container style={{height: "100vh"}}>
                <Grid item sm={7}>
                    <Card style={{height: "100%"}}>
                        <Typography variant={"h2"}>We are here to help!!</Typography>
                        <Typography variant={"body1"}>
                            Available between 9am to 6pm (IST). Closed on weekends and public holidays
                        </Typography>
                    </Card>
                </Grid>
                <Grid item sm={5}>
                    <Grid style={{position: "relative", height:"100%"}}>
                        <Grid>
                            <Typography variant="h3">Chat With Us</Typography>
                        </Grid>
                        <Grid id="display" style={{height: "80vh", overflow: "auto", margin: 10}}>
                            {messages.length>0? (
                                <>
                                {
                                    messages.map((msg,i)=>{
                                        return(
                                            <Typography key={i}>{`${msg.message} --- ${msg.user}`}</Typography>
                                        )
                                    })
                                }
                                </>
                            ):(
                                <Typography>No new message</Typography>
                            )}
                        </Grid>
                        <Grid id="bottomActionBar" style={{position: "absolute", bottom: 20, width: "99%", backgroundColor: "#f1f6d2"}}>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item sm={8}>
                                <TextField type="text" label="Message" value={message} variant="outlined" style={{width: "100%"}} onChange={handleMessage} />
                                </Grid>
                                <Grid item sm={4}>
                                <Button variant="contained" style={{width: "100%"}} onClick={sendMessage}>Send</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default HelpCentre