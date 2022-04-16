import React, {useState, useEffect} from "react";
import { Grid, Card, Typography, Button, TextField, Input} from "@mui/material";
import fire from "../../fire";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./style.css";

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
            <div className="helpCentre_header_container1">
                <nav className="helpCentre_header_container2">
                    <div className="helpCentre_header_container3">
                        <div className="helpCentre_header_container4">
                            <div onClick={()=>navigate("/")} className="helpCentre_header_left">
                                <svg viewBox="0 0 1000 1000" role="img" className="helpCentre_header_logo"><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
                                <Typography id="helpCentre_header_text">Help Centre</Typography>
                            </div>
                            <Button onClick={()=>window.history.go(-1)} id="helpCentre_header_button">Go back</Button>
                        </div>
                    </div>
                </nav>
            </div>
            
            <Grid container id="helpCentre_container">
                <Grid item xs={12} sm={4} style={{background: "black", color: "white"}}>
                    <div className="helpCentre_left">
                        <Typography variant="h3" id="helpCentre_left_heading">Hi<br />How can we help?</Typography>
                        <Typography id="helpCentre_left_text"><span style={{fontSize: 30}}>Need to get in touch?</span><br />We’ll start with some questions<br /> and get you to the right place.</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} id="helpCentre_right_container">
                    <div className="helpCentre_right">
                        <div className="helpCentre_display">
                            <Typography id="helpCentre_botMessage"><span className="helpCentre_senderName">Airbnb bot</span> <span className="helpCentre_time">{new Date().getHours()+':'+new Date().getMinutes()}</span><br />Hi, let’s get you some help. We’re going to ask you some questions and then connect you with a member of our support team.<br />Can you describe your issue in a few sentences? This will help our team understand what’s going on.<br /><br />Please don’t include sensitive info like credit card numbers.</Typography>
                            {messages.length>0? (
                                <>
                                {
                                    messages.map((msg,i)=>{
                                        return(
                                            <div key={i} className="helpCentre_textMessage">
                                                <Typography  id="helpCentre_userMessage"><span className="helpCentre_senderName">{`${msg.user}`}</span> <span className="helpCentre_time">{`${msg.timestamp}`}</span><br />{`${msg.message}`}</Typography>
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
                        </div>
                        <div className="helpCentre_bottomActionBar">
                            <Grid container spacing={1} alignItems="center" style={{paddingLeft: 20}}>
                                <Grid item xs={8}>
                                 <TextField type="text" label="Message" value={message} variant="standard" id="helpCentre_messageBox" onChange={handleMessage} />
                                </Grid>
                                <Grid item xs={4}>
                                  <Button variant="contained" id="helpCentre_sendButton" onClick={sendMessage}>Send</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default HelpCentre