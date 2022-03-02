import React, {useState} from "react";
import Footer from "../../component/footer";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AirCover = () => {
    const [ans1,setAns1] = useState(false);
    const [ans2,setAns2] = useState(false);
    const [ans3,setAns3] = useState(false);
    const [ans4,setAns4] = useState(false);
    const [ans5,setAns5] = useState(false);
    const [ans6,setAns6] = useState(false);
    const [ans7,setAns7] = useState(false);

    const navigate = useNavigate();
    
    return(
        <>
        <div style={{margin: 0, padding: 0, border: 0, fontSize: "100%", verticalAlign: "baseline"}}>
            <nav style={{height: 72, backdropFilter: "blur(25px) saturate(140%)", background: "rgb(255,255,255,0.85)", position: "sticky", top: 0, paddingTop: 0, zIndex: 2}}>
                <div style={{paddingRight: 120, paddingLeft: 120, margin: "auto", height: "inherit"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%"}}>
                        <div onClick={()=>navigate("/")} style={{display: "inline-block", color: "#ff385c", fontSize: 32}}>
                            <svg viewBox="0 0 1000 1000" role="img" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
                        </div>
                        <Button onClick={()=>navigate("/hostYourHome")} style={{display: "inline-block", position: "relative", fontSize: 16, lineHeight: "20px", fontWeight: 500, borderRadius: 8, paddingTop: 14, paddingBottom: 14, paddingLeft: 24, paddingRight: 24, color: "white", background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)", textTransform: "none"}}>Try hosting</Button>
                    </div>
                </div>
            </nav>
        </div>

        <Grid>
            <Grid style={{background: "#f7f7f7"}}>
                <div style={{textAlign: "center"}}>
                    <img style={{marginTop: -72, height: 500, objectFit: "cover", maxWidth: 2560, width: "100%"}} src="https://a0.muscache.com/pictures/9453c80d-cbae-487e-9837-e4e3069a9224.jpg" />
                </div>
                <div style={{paddingRight: 120, paddingLeft: 120, margin: "auto", height: "inherit"}}>
                    <h1 style={{marginTop: 40, marginBottom: 15}}>
                        <div style={{display: "block", height: "100%", width: "100%"}}>
                        <img style={{height: 115, maxWidth: "100%", verticalAlign: "middle"}} src="https://a0.muscache.com/pictures/001c0cf5-d83a-4346-a2fb-006cd0520eda.jpg" />
                        </div>
                    </h1>
                    <h2 style={{marginTop: 40, marginBottom: 0, fontSize: 26, lineHeight: "30px", fontWeight: 400}}>Top-to-bottom protection. <br />Free for every Host. Only on Airbnb.</h2>
                </div>
            </Grid>

            <Grid style={{background: "#f7f7f7", paddingBottom: 160, paddingTop: 80}}>
                <Grid style={{paddingLeft: 120, paddingRight: 120, margin: "auto", width: "100%", height: "inherit"}}>
                    <div style={{display: "grid", columnGap: "16px", gridTemplateColumns: "repeat(3,1fr)"}}>
                        <div style={{paddingTop: 32, paddingBottom: 32, borderBottom: "1px solid #dddddd"}}>
                            <h2 style={{marginBottom: 0, marginTop: 0, fontSize: 22, lineHeight: "26px", fontWeight: 600}}>$1m USD liability insurance</h2>
                            <p style={{marginRight: 64, marginBottom: 0, marginTop: 8, fontSize: 17, lineHeight: "24px", fontWeight: 350}}>You’re protected – even in the rare event that a guest is hurt.</p>
                        </div>
                        <div style={{paddingTop: 32, paddingBottom: 32, borderBottom: "1px solid #dddddd"}}>
                            <h2 style={{marginBottom: 0, marginTop: 0, fontSize: 22, lineHeight: "26px", fontWeight: 600}}>$1m damage protection</h2>
                            <p style={{marginRight: 64, marginBottom: 0, marginTop: 8, fontSize: 17, lineHeight: "24px", fontWeight: 350}}>We cover damage by guests to your space and belongings, including valuables.</p>
                        </div>
                        <div style={{paddingTop: 32, paddingBottom: 32, borderBottom: "1px solid #dddddd"}}>
                            <h2 style={{marginBottom: 0, marginTop: 0, fontSize: 22, lineHeight: "26px", fontWeight: 600}}>Pet-damage protection</h2>
                            <p style={{marginRight: 64, marginBottom: 0, marginTop: 8, fontSize: 17, lineHeight: "24px", fontWeight: 350}}>Not to worry: unexpected damage caused by four-legged guests is covered.</p>
                        </div>
                        <div style={{paddingTop: 32, paddingBottom: 32, borderBottom: "1px solid #dddddd"}}>
                            <h2 style={{marginBottom: 0, marginTop: 0, fontSize: 22, lineHeight: "26px", fontWeight: 600}}>Deep-cleaning protection</h2>
                            <p style={{marginRight: 64, marginBottom: 0, marginTop: 8, fontSize: 17, lineHeight: "24px", fontWeight: 350}}>We compensate you for unexpected cleaning costs.</p>
                        </div>
                        <div style={{paddingTop: 32, paddingBottom: 32, borderBottom: "1px solid #dddddd"}}>
                            <h2 style={{marginBottom: 0, marginTop: 0, fontSize: 22, lineHeight: "26px", fontWeight: 600}}>Income-loss protection</h2>
                            <p style={{marginRight: 64, marginBottom: 0, marginTop: 8, fontSize: 17, lineHeight: "24px", fontWeight: 350}}>Airbnb reimburses lost income if you cancel confirmed bookings due to damage.</p>
                        </div>
                        <div style={{paddingTop: 32, paddingBottom: 32, borderBottom: "1px solid #dddddd"}}>
                            <h2 style={{marginBottom: 0, marginTop: 0, fontSize: 22, lineHeight: "26px", fontWeight: 600}}>14-day filing window</h2>
                            <p style={{marginRight: 64, marginBottom: 0, marginTop: 8, fontSize: 17, lineHeight: "24px", fontWeight: 350}}>You have 14 days to report damage – even if you’re booked back-to-back.</p>
                        </div>
                        <div style={{paddingTop: 32}}>
                            <h2 style={{marginBottom: 0, marginTop: 0, fontSize: 22, lineHeight: "26px", fontWeight: 600}}>Quicker reimbursements</h2>
                            <p style={{marginRight: 64, marginBottom: 0, marginTop: 8, fontSize: 17, lineHeight: "24px", fontWeight: 350}}>Hosts get faster reimbursements for guest damages (9 days on average).</p>
                        </div>
                        <div style={{paddingTop: 32}}>
                            <h2 style={{marginBottom: 0, marginTop: 0, fontSize: 22, lineHeight: "26px", fontWeight: 600}}>Faster track for Superhosts</h2>
                            <p style={{marginRight: 64, marginBottom: 0, marginTop: 8, fontSize: 17, lineHeight: "24px", fontWeight: 350}}>Superhosts get access to a dedicated support line with priority routing.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid> 
                <div style={{paddingTop: 160, paddingBottom: 160}}>
                    <div style={{paddingLeft: 80, paddingRight: 80, margin: "auto", height: "inherit"}}>
                        <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                            <h2 style={{marginTop: 0, fontSize: 72, lineHeight: "76px", letterSpacing: "-0.02em", fontWeight: 600}}>Only Airbnb gives you AirCover</h2>
                        </div>
                        <table style={{marginLeft: "auto", marginRight: "auto", marginTop: 40, borderCollapse: "collapse", maxWidth: 804, width: "100%"}}>
                            <thead>
                                <tr style={{backgroundColor: "#ffffff", position: "static", top: 0, height: "calc(env(safe-area-inset-top) + 48px)"}}>
                                    <th style={{paddingLeft: 6, paddingRight: 6, paddingTop: "env(safe-area-inset-top)", fontSize: 22, lineHeight: "26px", fontWeight: 400, verticalAlign: "middle"}}></th>
                                    <th style={{paddingLeft: 6, paddingRight: 6, paddingTop: "env(safe-area-inset-top)", fontSize: 22, lineHeight: "26px", fontWeight: 400, verticalAlign: "middle"}}>Airbnb</th>
                                    <th style={{paddingLeft: 6, paddingRight: 6, paddingTop: "env(safe-area-inset-top)", fontSize: 22, lineHeight: "26px", fontWeight: 400, verticalAlign: "middle"}}>Competitors</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{borderBottom: "1px solid #dddddd", height: 80, }}>
                                    <th style={{paddingRight: 8, textAlign: "left", fontSize: 22, lineHeight: "26px", fontWeight: 600, verticalAlign: "middle", }}>$1m USD liability insurance</th>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{borderBottom: "1px solid #dddddd", height: 80, }}>
                                    <th style={{paddingRight: 8, textAlign: "left", fontSize: 22, lineHeight: "26px", fontWeight: 600, verticalAlign: "middle", }}>$1m damage protection</th>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#E12C32", strokeWidth:"5.333333333333333", overflow: "visible"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{borderBottom: "1px solid #dddddd", height: 80, }}>
                                    <th style={{paddingRight: 8, textAlign: "left", fontSize: 22, lineHeight: "26px", fontWeight: 600, verticalAlign: "middle", }}>Pet-damage protection</th>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#E12C32", strokeWidth:"5.333333333333333", overflow: "visible"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{borderBottom: "1px solid #dddddd", height: 80, }}>
                                    <th style={{paddingRight: 8, textAlign: "left", fontSize: 22, lineHeight: "26px", fontWeight: 600, verticalAlign: "middle", }}>Deep-cleaning protection</th>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#E12C32", strokeWidth:"5.333333333333333", overflow: "visible"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{borderBottom: "1px solid #dddddd", height: 80, }}>
                                    <th style={{paddingRight: 8, textAlign: "left", fontSize: 22, lineHeight: "26px", fontWeight: 600, verticalAlign: "middle", }}>Income-loss protection</th>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#E12C32", strokeWidth:"5.333333333333333", overflow: "visible"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{borderBottom: "1px solid #dddddd", height: 80, }}>
                                    <th style={{paddingRight: 8, textAlign: "left", fontSize: 22, lineHeight: "26px", fontWeight: 600, verticalAlign: "middle", }}>14-day filing window</th>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{borderBottom: "1px solid #dddddd", height: 80, }}>
                                    <th style={{paddingRight: 8, textAlign: "left", fontSize: 22, lineHeight: "26px", fontWeight: 600, verticalAlign: "middle", }}>Quicker reimbursements</th>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#E12C32", strokeWidth:"5.333333333333333", overflow: "visible"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{borderBottom: "1px solid #dddddd", height: 80, }}>
                                    <th style={{paddingRight: 8, textAlign: "left", fontSize: 22, lineHeight: "26px", fontWeight: 600, verticalAlign: "middle", }}>Faster track for Superhosts</th>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#00A506", strokeWidth:"5.333333333333333", overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td style={{verticalAlign: "middle"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 24, width: 24, stroke: "#E12C32", strokeWidth:"5.333333333333333", overflow: "visible"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{marginTop: 32, margin: "24px auto 0", fontSize: 16, lineHeight: "20px", fontWeight: 600, maxWidth: 804}}>AirCover benefits compared to those offered for free by our top competitors.</div>
                    </div>
                </div>
            </Grid>

            <Grid>
                <div style={{backgroundColor: "#f7f7f7", margin: "auto", display: "grid", gridTemplateRows: "repeat(2, min-content)", maxWidth: 1440, overflow: "hidden", borderRadius: 12}}>
                    <div style={{paddingLeft: 80, paddingRight: 0, marginTop: 80, fontSize: 72, lineHeight: "110%", maxWidth: 715, letterSpacing: "-0.02em", fontWeight: 600}}>Always included and always free whenever you host.</div>
                    <div style={{display: "block", height: "100%", width: "100%"}}>
                        <img style={{height: 517, width: "100%", objectFit: "cover", verticalAlign: "bottom"}} src="https://a0.muscache.com/im/pictures/be366e4c-bcce-4c8a-8f0f-03a36eb42a60.jpg?im_w=1920&im_q=highq" />
                    </div>
                </div>
            </Grid>

            <Grid>
                <div style={{paddingBottom: 24, paddingTop: 160}}>
                    <div style={{paddingRight: 120, paddingLeft: 120, margin: "auto", height: "inherit"}}>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 40, rowGap: 40}}>
                            <div style={{flex: "50%", color: "black"}}>
                                <h2 style={{marginBottom: 24, marginTop: 0, fontSize: 72, lineHeight: "76px", wordSpacing: "100vw", letterSpacing: "-0.02em", maxWidth: "60vw", fontWeight: 600}}>Your questions, answered</h2>
                                <div style={{marginTop: 24, fontSize: 16, lineHeight: "20px", whiteSpace: "pre-line"}}>Can’t find what you’re looking for? <br />Visit our <a href="/help" style={{color: "black", fontWeight: 600}}>Help Centre</a></div>
                            </div>
                            <div style={{flex: "50%", marginTop: 0}}>
                                <div>
                                    <div style={{paddingTop: 8, paddingBottom: 8}}>
                                        <div onClick={()=>setAns1(!ans1)} style={{cursor: "pointer", paddingTop: 24, paddingBottom: 24, borderRadius: 1, outline: "none"}}>
                                            <div style={{display: "flex"}}>
                                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: "1 1 auto", width: "100%"}}>
                                                    <div style={{fontSize: 22, lineHeight: "26px"}}>What is AirCover?</div>
                                                </div>
                                                <div style={{marginLeft: 16, display: "flex", alignItems: "center", minHeight: 20}}>
                                                    {ans1 ? <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible", transform: "rotate(180deg)"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans1 ? <div style={{display: "block", fontSize: 16, lineHeight: "24px", color: "#717171", whiteSpace: "pre-line", paddingBottom: 16}}>AirCover is top-to-bottom protection for Hosts. It includes $1m Host liability insurance, $1m Experiences liability insurance, and $1m Host damage protection, with new coverage for pet damage, deep cleaning, and more.</div> : null }
                                    </div>
                                    <hr style={{border: 0, borderTop: "1px solid #dddddd", margin: 0}} />
                                </div>
                                <div>
                                    <div style={{paddingTop: 8, paddingBottom: 8}}>
                                        <div onClick={()=>setAns2(!ans2)} style={{cursor: "pointer", paddingTop: 24, paddingBottom: 24, borderRadius: 1, outline: "none"}}>
                                            <div style={{display: "flex"}}>
                                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: "1 1 auto", width: "100%"}}>
                                                    <div style={{fontSize: 22, lineHeight: "26px"}}>What’s the difference between damage protection and liability insurance?</div>
                                                </div>
                                                <div style={{marginLeft: 16, display: "flex", alignItems: "center", minHeight: 20}}>
                                                    {ans2 ? <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible", transform: "rotate(180deg)"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans2 ? <div style={{display: "block", fontSize: 16, lineHeight: "24px", color: "#717171", whiteSpace: "pre-line", paddingBottom: 16}}>Host damage protection covers you if your place or belongings ever get damaged by a guest during an Airbnb stay. Host liability insurance applies in the rare event that a guest gets hurt during an Airbnb stay or Experience.</div> : null }
                                    </div>
                                    <hr style={{border: 0, borderTop: "1px solid #dddddd", margin: 0}} />
                                </div>
                                <div>
                                    <div style={{paddingTop: 8, paddingBottom: 8}}>
                                        <div onClick={()=>setAns3(!ans3)} style={{cursor: "pointer", paddingTop: 24, paddingBottom: 24, borderRadius: 1, outline: "none"}}>
                                            <div style={{display: "flex"}}>
                                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: "1 1 auto", width: "100%"}}>
                                                    <div style={{fontSize: 22, lineHeight: "26px"}}>How does AirCover work with my personal insurance?</div>
                                                </div>
                                                <div style={{marginLeft: 16, display: "flex", alignItems: "center", minHeight: 20}}>
                                                    {ans3 ? <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible", transform: "rotate(180deg)"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans3 ? <div style={{display: "block", fontSize: 16, lineHeight: "24px", color: "#717171", whiteSpace: "pre-line", paddingBottom: 16}}>While AirCover protects you while you’re hosting an Airbnb stay or Experience, it is not a substitute for personal insurance. Since everyone’s situation is different, you should talk to your insurer to see how or if your policy overlaps with AirCover.</div> : null }
                                    </div>
                                    <hr style={{border: 0, borderTop: "1px solid #dddddd", margin: 0}} />
                                </div>
                                <div>
                                    <div style={{paddingTop: 8, paddingBottom: 8}}>
                                        <div onClick={()=>setAns4(!ans4)} style={{cursor: "pointer", paddingTop: 24, paddingBottom: 24, borderRadius: 1, outline: "none"}}>
                                            <div style={{display: "flex"}}>
                                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: "1 1 auto", width: "100%"}}>
                                                    <div style={{fontSize: 22, lineHeight: "26px"}}>Are there damages that AirCover doesn’t cover?</div>
                                                </div>
                                                <div style={{marginLeft: 16, display: "flex", alignItems: "center", minHeight: 20}}>
                                                    {ans4 ? <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible", transform: "rotate(180deg)"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans4 ? <div style={{display: "block", fontSize: 16, lineHeight: "24px", color: "#717171", whiteSpace: "pre-line", paddingBottom: 16}}>AirCover doesn’t cover normal wear and tear or losses incurred due to acts of nature (like earthquakes and hurricanes). You can find a complete list <span style={{textDecoration: "underline", cursor: "pointer", color: "black", fontWeight: 600}}>here</span>.</div> : null }
                                    </div>
                                    <hr style={{border: 0, borderTop: "1px solid #dddddd", margin: 0}} />
                                </div>
                                <div>
                                    <div style={{paddingTop: 8, paddingBottom: 8}}>
                                        <div onClick={()=>setAns5(!ans5)} style={{cursor: "pointer", paddingTop: 24, paddingBottom: 24, borderRadius: 1, outline: "none"}}>
                                            <div style={{display: "flex"}}>
                                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: "1 1 auto", width: "100%"}}>
                                                    <div style={{fontSize: 22, lineHeight: "26px"}}>I host an Experience. Am I protected by AirCover?</div>
                                                </div>
                                                <div style={{marginLeft: 16, display: "flex", alignItems: "center", minHeight: 20}}>
                                                    {ans5 ? <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible", transform: "rotate(180deg)"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans5 ? <div style={{display: "block", fontSize: 16, lineHeight: "24px", color: "#717171", whiteSpace: "pre-line", paddingBottom: 16}}>Yes. AirCover’s Experiences liability insurance applies to you in the rare event that a guest gets hurt or their belongings are damaged during your Experience.</div> : null }
                                    </div>
                                    <hr style={{border: 0, borderTop: "1px solid #dddddd", margin: 0}} />
                                </div>
                                <div>
                                    <div style={{paddingTop: 8, paddingBottom: 8}}>
                                        <div onClick={()=>setAns6(!ans6)} style={{cursor: "pointer", paddingTop: 24, paddingBottom: 24, borderRadius: 1, outline: "none"}}>
                                            <div style={{display: "flex"}}>
                                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: "1 1 auto", width: "100%"}}>
                                                    <div style={{fontSize: 22, lineHeight: "26px"}}>I need to make a claim. How do I do it?</div>
                                                </div>
                                                <div style={{marginLeft: 16, display: "flex", alignItems: "center", minHeight: 20}}>
                                                    {ans6 ? <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible", transform: "rotate(180deg)"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans6 ? <div style={{display: "block", fontSize: 16, lineHeight: "24px", color: "#717171", whiteSpace: "pre-line", paddingBottom: 16}}>If a guest has damaged your place or belongings, visit our <span style={{textDecoration: "underline", cursor: "pointer", color: "black", fontWeight: 600}}>Resolution Centre</span> to submit an AirCover request. <br /><br />If a guest has been injured, complete the <span style={{textDecoration: "underline", cursor: "pointer", color: "black", fontWeight: 600}}>liability insurance intake form</span>.</div> : null }
                                    </div>
                                    <hr style={{border: 0, borderTop: "1px solid #dddddd", margin: 0}} />
                                </div>
                                <div>
                                    <div style={{paddingTop: 8, paddingBottom: 8}}>
                                        <div onClick={()=>setAns7(!ans7)} style={{cursor: "pointer", paddingTop: 24, paddingBottom: 24, borderRadius: 1, outline: "none"}}>
                                            <div style={{display: "flex"}}>
                                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: "1 1 auto", width: "100%"}}>
                                                    <div style={{fontSize: 22, lineHeight: "26px"}}>How long does it take to get reimbursed through AirCover for damage?</div>
                                                </div>
                                                <div style={{marginLeft: 16, display: "flex", alignItems: "center", minHeight: 20}}>
                                                    {ans7 ? <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 4, overflow: "visible", transform: "rotate(180deg)"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans7 ? <div style={{display: "block", fontSize: 16, lineHeight: "24px", color: "#717171", whiteSpace: "pre-line", paddingBottom: 16}}>We always try to resolve damage reimbursement requests as quickly as possible – within 9 days on average.</div> : null }
                                    </div>
                                    <hr style={{border: 0, borderTop: "1px solid #dddddd", margin: 0}} />
                                </div>
                                <div style={{marginTop: 160, maxWidth: 400, fontSize: 16, lineHeight: "20px"}}>
                                    Learn even more about AirCover and all it has to offer, along with the terms and conditions, <span style={{color: "black", fontWeight: 600, textDecoration: "underline", cursor: "pointer"}}>here</span>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid>
                <div style={{marginBottom: 120, borderRadius: 12}}>
                    <div style={{margin: "auto", maxHeight: 676, gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(1,1fr)", maxWidth: 1440, display: "grid", borderRadius: 12}}>
                        <div style={{paddingLeft: 80, paddingRight: 80, paddingTop: 160, paddingBottom: 160, background: "black", gridRow: 1, color: "white"}}>
                            <h2 style={{marginBottom: 24, marginTop: 0, fontSize: 72, lineHeight: "76px", letterSpacing: "-0.02em", maxWidth: "unset", fontWeight: 600}}>Hosting on Airbnb</h2>
                            <div style={{fontSize: 22, lineHeight: "26px", whiteSpace: "pre-line"}}>Join us. We’ll help you every <br />step of the way.</div>
                            <Button onClick={()=>navigate("/hostYourHome")} variant="contained" style={{marginTop: 80, textTransform: "none", padding: "14px 24px", color: "white", fontSize: 16, background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)", borderRadius: 8}}>Let's go</Button>
                        </div>
                        <div style={{gridColumn: 2, gridRow: 1, overflow: "hidden"}}>
                            <div style={{display: "block", height: "100%", width: "100%"}}>
                                <img style={{width: "100%", height: "100%", objectFit: "cover", verticalAlign: "bottom", objectPosition: "50% 20%"}} src="https://a0.muscache.com/im/pictures/31863cc5-ec40-42ad-8c40-6ce213e772b8.jpg?im_w=2560" />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

        </Grid>
        
        <Footer />
        </>
    )
}

export default AirCover