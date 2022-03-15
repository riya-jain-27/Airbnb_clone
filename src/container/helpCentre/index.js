import React, {useState, useEffect} from "react";
import { Grid, Card, Typography, Button, TextField, Input} from "@mui/material";
import fire from "../../fire";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

const HelpCentre = (props) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]); 
    const [noData, setNoData] = useState(false)
    const db = getDatabase();
    const navigate = useNavigate()

    useEffect(() => {
        readDataFromFirebase();
    }, []);
    
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage =() => {
        // console.log(message);
        push(ref(db, "/helpCentre"), {
            message: message,
            user: "Riya",
            timestamp: new Date().getHours()+':'+new Date().getMinutes(),
        });
        setMessage("");
    }
    
    const readDataFromFirebase = () => {
        onValue(ref(db, "/helpCentre"), (data) => {
            let messagesFromServer = data.val();
            if(!messagesFromServer){
                setNoData(true)
            }
            let messagesArray = [];
            for(let key in messagesFromServer) {
                messagesArray.push(messagesFromServer[key]);
            }
            setMessages(messagesArray);
        });
    }

    return (
        <>
            <div style={{margin: 0, padding: 0, border: 0, fontSize: "100%", verticalAlign: "baseline"}}>
                <nav style={{height: 72, backdropFilter: "blur(25px) saturate(140%)", background: "rgb(0,0,0,0.85)", position: "sticky", top: 0, paddingTop: 0, zIndex: 2}}>
                    <div style={{paddingRight: 120, paddingLeft: 60, margin: "auto", height: "inherit"}}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%"}}>
                            <div onClick={()=>navigate("/")} style={{display: "flex", color: "white", fontSize: 32}}>
                                <svg viewBox="0 0 1000 1000" role="img" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor", cursor: "pointer"}}><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
                                <Typography style={{paddingLeft: 10, fontSize: 22, fontWeight: 500}}>Help Centre</Typography>
                            </div>
                            <Button onClick={()=>window.history.go(-1)} style={{display: "inline-block", position: "relative", fontSize: 16, lineHeight: "20px", fontWeight: 500, borderRadius: 8, paddingTop: 14, paddingBottom: 14, paddingLeft: 24, paddingRight: 24, color: "white", background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)", textTransform: "none"}}>Go back</Button>
                        </div>
                    </div>
                </nav>
            </div>
            
            <Grid container style={{height: "100vh", marginTop: -72}}>
                <Grid item sm={4} style={{background: "black", color: "white"}}>
                    <Grid style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100%"}}>
                        <Typography variant="h3" style={{color: "white", padding: 0, marginBottom: 52, fontWeight: 500, marginTop: 0}}>Hi<br />How can we help?</Typography>
                        <Typography style={{color: "white", padding: 0, marginTop: 32, fontSize: 18, fontWeight: "normal"}}><span style={{fontSize: 30}}>Need to get in touch?</span><br />We’ll start with some questions<br /> and get you to the right place.</Typography>
                    </Grid>
                </Grid>
                <Grid item sm={8} style={{background: "white", overflow: "hidden", marginTop: 72}}>
                    <Grid style={{position: "relative", height:"100%"}}>
                        <Grid id="display" style={{height: "80vh", overflow: "auto", margin: 10}}>
                        <Typography style={{backgroundColor: "#717171", padding: 10, borderRadius: 15, textAlign: "left", width: "50%"}}><span style={{fontWeight: 600}}>Airbnb bot</span> <span style={{fontSize: 12}}>{new Date().getHours()+':'+new Date().getMinutes()}</span><br />Hi, let’s get you some help. We’re going to ask you some questions and then connect you with a member of our support team.<br />Can you describe your issue in a few sentences? This will help our team understand what’s going on.<br /><br />Please don’t include sensitive info like credit card numbers.</Typography>
                            {messages.length>0? (
                                <>
                                {
                                    messages.map((msg,i)=>{
                                        return(
                                            <div style={{padding: 10, textAlign: "-webkit-right"}}>
                                                <Typography key={i} style={{backgroundColor: "lightblue", padding: 10, borderRadius: 15, textAlign: "left", maxWidth: "50%", width: "fit-content"}}><span style={{fontWeight: 600}}>{`${msg.user}`}</span> <span style={{fontSize: 12}}>{`${msg.timestamp}`}</span><br />{`${msg.message}`}</Typography>
                                            </div>
                                        )
                                    })
                                }
                                </>
                            ):(
                                <>
                                    {noData ? ( <Typography> No new messages </Typography> ) : ( <Typography>Loading....</Typography> ) }
                                </>
                            )}
                        </Grid>
                        <Grid id="bottomActionBar" style={{position: "absolute", bottom: 20, width: "99%"}}>
                            <Grid container spacing={1} alignItems="center" style={{paddingLeft: 20}}>
                                <Grid item sm={8}>
                                <TextField type="text" label="Message" value={message} variant="standard" style={{width: "80%", color: "black", alignContent: "center"}} onChange={handleMessage} />
                                </Grid>
                                <Grid item sm={4}>
                                <Button variant="contained" style={{width: "100%", backgroundColor: "black"}} onClick={sendMessage}>Send</Button>
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