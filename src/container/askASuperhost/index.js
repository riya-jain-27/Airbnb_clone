import React, {useState, useRef} from "react";
import Footer from "../../component/footer";
import { Button, Grid, Typography, IconButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const AskASuperhost = () =>{
    const [isPlaying, setIsPlaying] = useState(true);

    const vidRef = useRef();
    const navigate = useNavigate();

    const handleLogo = () => {
        navigate("/");
    }

    const handlePause = () => {
        setIsPlaying(false);
        vidRef.current.pause()
    }
    
    const handlePlay = () => {
        setIsPlaying(true);
        vidRef.current.play()
    }

    return(
        <>
        <Grid>
            <Grid style={{padding: "32px 48px", height: 112, top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 4, position: "fixed", backgroundColor: "white"}}>
                <div style={{display: "flex", alignItems: "center", cursor: "pointer"}}>
                    <div style={{appearance: "none", display: "inline-block", borderRadius: "50%", border: "none", outline: "none", margin: 0, position:"relative", padding: 0}}>
                        <svg onClick={handleLogo} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: "block", height: 32 , width: 32, fill: "currentcolor"}} aria-hidden="true" role="presentation" focusable="false"><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path></svg>
                    </div>
                </div>
                <div>

                </div>
            </Grid>

            <Grid paddingTop={"112px"}>
                <div style={{position: "absolute", top: 0, left:0, width: "100%", height: "65vh", pointerEvents: "none"}}></div>
                
                <Grid style={{top: 96, transform: "translateY(0px)"}}>
                    <div style={{padding: "64px 120px 120px"}}>
                        <div style={{maxWidth: 1760, margin: "auto"}}>
                            <h1 style={{padding: 0, margin: 0}}>
                                <span style={{fontSize: 64, lineHeight: "72px", fontWeight: 600, color: "#5f002a"}}>Questions about hosting?</span>
                            </h1>
                            <div style={{marginTop: 80, display: "flex", alignItems: "center", flexDirection: "row"}}>
                                <Button variant="contained" style={{display: "inline-block", margin: 0, position: "relative", width: "auto", fontSize: 18, lineHeight: "24px", fontWeight: 500, borderRadius: 8, outline: "none", paddingTop: 16, paddingBottom: 16, paddingLeft: 32, paddingRight: 32, background: "#5f002a", color: "white", textTransform: "none"}}>Ask a Superhost</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid style={{position: "relative", backgroundColor:"white", zIndex: 3}}>
                    <Grid container style={{height: 860, display: "flex", flexDirection: "row", marginBottom: 120}}>
                        <Grid item style={{backgroundColor: "#5f002a", flex: "50%", color: "white", borderRadius: 0, position: "relative", height: "100%", zIndex: 1, minHeight: "48%"}}>
                            <Grid style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", height: "100%", padding: "0px 120px 80px", marginLeft: "auto", maxWidth: 1000}}>
                                <Grid style={{padding: 0, fontSize: 48, lineHeight: "56px", background: "#5f002a", display: "flex", flexDirection: "column", fontWeight: 600, letterSpacing: "-0.02em"}}>
                                    <Typography style={{marginBottom: 16, fontSize: 22, lineHeight: "26px", fontWeight: 500}}>Ask a Superhost</Typography>
                                    <h1 style={{padding: 0, margin: 0, fontSize: "1em", fontWeight: "600"}}>Get free one-on-one help from Airbnb’s best Hosts</h1>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{height: "100%", flex: "50%", position: "relative", background: "#5f002a"}}>
                            <Grid style={{overflow: "hidden", height: "100%", position: "relative", width: "100%", willChange: "transform"}}>
                                <video ref={vidRef} autoPlay muted onEnded={()=>setIsPlaying(false)} style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "center top", display: "block"}}>
                                <source src="https://a0.muscache.com/v/c1/77/c1776f77-b7d6-568b-94f7-4ebb82c47fc9/c1776f77b7d6568b94f74ebb82c47fc9_4000k_1.mp4?imformat=h265" type="video/mp4; codecs=hevc" />
                                <source src="https://a0.muscache.com/v/c1/77/c1776f77-b7d6-568b-94f7-4ebb82c47fc9/c1776f77b7d6568b94f74ebb82c47fc9_4000k_1.mp4" type="video/mp4" />
                                </video>
                                <div style={{bottom: 0, position: "absolute", width: "100%", height: "30vh", background: "linear-gradient(360deg, rgba(0, 0, 0, 0.54) 20.86%, rgba(0, 0, 0, 0) 90.37%)"}}></div>
                                <div style={{left: "50%", transform: "translate(-50%, -50%)", bottom: 48, position: "absolute"}}>
                                    <div style={{display: "flex", flexDirection: "row", width: "100%", alignItems: "center"}}>
                                        <span style={{fontSize: 12, lineHeight: "16px", fontWeight: 700, color: "white", marginRight: 4, marginLeft: 4}}>Loubna</span>
                                        <span style={{height: 2, width: 2, backgroundColor: "white", borderRadius: "50%"}}></span>
                                        <span style={{fontSize: 12, lineHeight: "16px", fontWeight: 700, color: "white", marginRight: 4, marginLeft: 4}}>Hosting since 2017</span>
                                    </div>
                                </div>
                                <Grid style={{bottom: 48, position: "absolute", right: 48}}>
                                    {isPlaying ? <IconButton onClick={handlePause} aria-label="pause" style={{color: "white"}}><PauseIcon /></IconButton>
                                    : <IconButton onClick={handlePlay} aria-label="play" style={{color: "white"}}><PlayArrowIcon /></IconButton>}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid style={{padding: "0px 120px 120px"}}>
                    <Grid style={{display: "flex", flexDirection: "row", maxWidth: 1760, margin: "auto", alignContent: "space-between"}}>
                        <Grid item style={{marginRight: 120, marginBottom: 48, flex: "33%"}}>
                            <div style={{fontSize: 26, lineHeight: "30px", display: "block", fontWeight: 500, marginBottom: 16, marginTop: 32}}>Personal tips <br />and guidance</div>
                            <div style={{marginBottom: 0, fontSize: 18, lineHeight: "24px", display: "block"}}>We’ve matched you with an experienced Superhost to answer all of your questions, whenever works best for you.</div>
                        </Grid>
                        <Grid item style={{marginRight: 120, marginBottom: 48, flex: "33%"}}>
                            <div style={{fontSize: 26, lineHeight: "30px", display: "block", fontWeight: 500, marginBottom: 16, marginTop: 32}}>Hands-on help <br />listing your place</div>
                            <div style={{marginBottom: 0, fontSize: 18, lineHeight: "24px", display: "block"}}>Your Superhost will help you create your listing and share advice for taking photos, describing your space, and more.</div>
                        </Grid>
                        <Grid item style={{marginRight: 0, marginBottom: 48, flex: "33%"}}>
                            <div style={{fontSize: 26, lineHeight: "30px", display: "block", fontWeight: 500, marginBottom: 16, marginTop: 32}}>Prep for your <br />first guest</div>
                            <div style={{marginBottom: 0, fontSize: 18, lineHeight: "24px", display: "block"}}>You’ll get the support and direction you need to start welcoming guests and earn your first great review.</div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid style={{maxWidth: 2480, margin: "auto"}}>
                    <div style={{padding: "0px 120px 80px", fontSize: 48, lineHeight: "56px"}}>
                        <h2 style={{fontSize: 48, lineHeight: "56px", maxWidth: 1760, margin: "auto", fontWeight: 500, letterSpacing: "-0.02em"}}>Your Superhost will be there every step of the way</h2>
                    </div>
                    <Grid>
                        <Grid style={{marginBottom: 8, position: "relative", height: 860}}>
                            <div style={{marginBottom: 8, position: "relative", height: 860}}>
                                <div style={{display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: 1, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                <img style={{objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%", position: "static"}} src="https://a0.muscache.com/im/pictures/ed9358e5-6a01-41fb-b911-6c5e1af976b7.jpg?im_w=2560&amp;im_q=highq" />
                                </div>
                            </div>
                            <div style={{position: "sticky", zIndex: 2, display: "block", opacity: 1, left: 120, bottom: 120, margin: "80px 120px"}}>
                                <div style={{position: "relative", maxWidth: 1760, margin: "auto"}}>
                                    <div style={{padding: 40, borderRadius: 12, background: "white", maxWidth: 620, boxShadow: "0px 0px 0px 1px rgb(0 0 0 / 4%), 0px 6px 20px rgb(0 0 0 / 20%)"}}>
                                        <div style={{fontSize: 18, fontWeight: 650, lineHeight: "28px"}}>Step 1</div>
                                        <div style={{fontSize: 32, fontWeight: 500, lineHeight: "36px", marginTop: 8, marginBottom: 32, width: "75%"}}>Meet your Superhost</div>
                                        <div style={{borderBottom: "1px solid #dddddd"}}></div>
                                        <div style={{display: "flex", flexDirection: "row", marginTop: 32}}>
                                            <div style={{marginRight: 24}}>
                                                <div style={{display: "inline-block", verticalAlign: "bottom", height: 48, width: 48, minHeight: 1, borderRadius: 24, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                                <img src="https://a0.muscache.com/im/pictures/cd4001c7-9526-48fd-a193-c7de7d73369f.jpg?im_w=240" style={{objectFit: "cover", verticalAlign: "bottom", borderRadius: 24, height: "100%", width: "100%", position: "static"}} />
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{display: "flex", flexDirection: 'row'}}>
                                                    <span style={{display: "block", fontSize: 16, fontWeight: 650, lineHeight: "20px", marginRight: 4, marginBottom: 4}}>Imaan</span>
                                                    <span style={{color: "#717171", fontSize: 12, lineHeight: "16px", marginTop: 2}}>10:21am</span>
                                                </div>
                                                <span style={{fontSize: 16, lineHeight: "20px"}}>Hi there! I love being a Host and am so excited to learn more about you and your place.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid style={{marginBottom: 8, position: "relative", height: 860}}>
                            <div style={{marginBottom: 8, position: "relative", height: 860}}>
                                <div style={{display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: 1, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                <img style={{objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%", position: "static"}} src="https://a0.muscache.com/im/pictures/f6786475-e93f-411c-b2b9-5c29fe714050.jpg?im_w=2560&im_q=highq" />
                                </div>
                            </div>
                            <div style={{position: "sticky", zIndex: 2, display: "block", opacity: 1, left: 120, bottom: 120, margin: "80px 120px"}}>
                                <div style={{position: "relative", maxWidth: 1760, margin: "auto"}}>
                                    <div style={{padding: 40, borderRadius: 12, background: "white", maxWidth: 620, boxShadow: "0px 0px 0px 1px rgb(0 0 0 / 4%), 0px 6px 20px rgb(0 0 0 / 20%)"}}>
                                        <div style={{fontSize: 18, fontWeight: 650, lineHeight: "28px"}}>Step 2</div>
                                        <div style={{fontSize: 32, fontWeight: 500, lineHeight: "36px", marginTop: 8, marginBottom: 32, width: "75%"}}>Get answers to any question, big or small</div>
                                        <div style={{borderBottom: "1px solid #dddddd"}}></div>
                                        <div style={{display: "flex", flexDirection: "row", marginTop: 32}}>
                                            <div style={{marginRight: 24}}>
                                                <div style={{display: "inline-block", verticalAlign: "bottom", height: 48, width: 48, minHeight: 1, borderRadius: 24, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                                <img src="https://a0.muscache.com/im/pictures/f82e594f-d7e2-4032-a021-9c15f490f42e.jpg?im_w=240" style={{objectFit: "cover", verticalAlign: "bottom", borderRadius: 24, height: "100%", width: "100%", position: "static"}} />
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{display: "flex", flexDirection: 'row'}}>
                                                    <span style={{display: "block", fontSize: 16, fontWeight: 650, lineHeight: "20px", marginRight: 4, marginBottom: 4}}>Khun</span>
                                                    <span style={{color: "#717171", fontSize: 12, lineHeight: "16px", marginTop: 2}}>3:45pm</span>
                                                </div>
                                                <span style={{fontSize: 16, lineHeight: "20px"}}>What happens if something breaks or gets damaged in my home? I’m a little nervous.</span>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", flexDirection: "row", marginTop: 32}}>
                                            <div style={{marginRight: 24}}>
                                                <div style={{display: "inline-block", verticalAlign: "bottom", height: 48, width: 48, minHeight: 1, borderRadius: 24, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                                <img src="https://a0.muscache.com/im/pictures/cd4001c7-9526-48fd-a193-c7de7d73369f.jpg?im_w=240" style={{objectFit: "cover", verticalAlign: "bottom", borderRadius: 24, height: "100%", width: "100%", position: "static"}} />
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{display: "flex", flexDirection: 'row'}}>
                                                    <span style={{display: "block", fontSize: 16, fontWeight: 650, lineHeight: "20px", marginRight: 4, marginBottom: 4}}>Imaan</span>
                                                    <span style={{color: "#717171", fontSize: 12, lineHeight: "16px", marginTop: 2}}>6:05pm</span>
                                                </div>
                                                <span style={{fontSize: 16, lineHeight: "20px"}}>My guests have always been very respectful, but there’s <a target="_blank" href="/aircover" style={{color: "black", borderRadius: 4,}}>AirCover</a> if accidents happen.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid style={{marginBottom: -8, position: "relative", height: 860}}>
                            <div style={{marginBottom: 8, position: "relative", height: 860}}>
                                <div style={{display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: 1, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                <img style={{objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%", position: "static"}} src="https://a0.muscache.com/im/pictures/6d0abc93-c726-4f8b-8420-c41f67554567.jpg?im_w=2560&im_q=highq" />
                                </div>
                            </div>
                            <div style={{position: "sticky", zIndex: 2, display: "block", opacity: 1, left: 120, bottom: 120, margin: "80px 120px"}}>
                                <div style={{position: "relative", maxWidth: 1760, margin: "auto"}}>
                                    <div style={{padding: 40, borderRadius: 12, background: "white", maxWidth: 620, boxShadow: "0px 0px 0px 1px rgb(0 0 0 / 4%), 0px 6px 20px rgb(0 0 0 / 20%)"}}>
                                        <div style={{fontSize: 18, fontWeight: 650, lineHeight: "28px"}}>Step 3</div>
                                        <div style={{fontSize: 32, fontWeight: 500, lineHeight: "36px", marginTop: 8, marginBottom: 32, width: "75%"}}>Confidently welcome your first guest</div>
                                        <div style={{borderBottom: "1px solid #dddddd"}}></div>
                                        <div style={{display: "flex", flexDirection: "row", marginTop: 32}}>
                                            <div style={{marginRight: 24}}>
                                                <div style={{display: "inline-block", verticalAlign: "bottom", height: 48, width: 48, minHeight: 1, borderRadius: 24, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                                <img src="https://a0.muscache.com/im/pictures/cd4001c7-9526-48fd-a193-c7de7d73369f.jpg?im_w=240" style={{objectFit: "cover", verticalAlign: "bottom", borderRadius: 24, height: "100%", width: "100%", position: "static"}} />
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{display: "flex", flexDirection: 'row'}}>
                                                    <span style={{display: "block", fontSize: 16, fontWeight: 650, lineHeight: "20px", marginRight: 4, marginBottom: 4}}>Imaan</span>
                                                    <span style={{color: "#717171", fontSize: 12, lineHeight: "16px", marginTop: 2}}>6:17pm</span>
                                                </div>
                                                <span style={{fontSize: 16, lineHeight: "20px"}}>Here’s a friendly reminder to leave a welcome note and local treat. Then you’re all set!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid style={{display: "flex", background: "black", color: "white", flexDirection: "column", paddingBottom: 120}}>
                    <Grid style={{maxWidth: 2000}}>
                        <div style={{padding: "120px 120px 64px"}}>
                            <h2 style={{marginBottom: 24, fontSize: 64, lineHeight: "72px", letterSpacing: "-0.02em"}}>More ways to start Hosting</h2>
                            <p style={{fontSize: 18, lineHeight: "24px", marginBottom: 40}}>No matter where you start, we have tips, videos, and guides for each step.</p>
                            <div style={{width: "auto", gridTemplateColumns: "auto 1fr", display: "inline-grid", rowGap: "16px", columnGap: "16px", justifyItems: "baseline"}}>
                                <Button variant="contained" style={{position: "relative", textTransform: "none", fontSize: 16, lineHeight: "20px", fontWeight: 500, borderRadius: 8, paddingTop: 13, paddingBottom: 13, paddingLeft: 23, paddingRight: 23, background: "white", color: "black"}}>Learn about hosting</Button>
                                <Button variant="outlined" style={{position: "relative", textTransform: "none", fontSize: 16, lineHeight: "20px", fontWeight: 500, borderRadius: 8, paddingTop: 13, paddingBottom: 13, paddingLeft: 23, paddingRight: 23, background: "black", color: "white", borderColor: "white"}}>Start listing your place</Button>
                            </div>
                        </div>
                        <div style={{scrollPadding: "0 120px 0 120px", width: "100%", display: "flex", flexDirection: "row", scrollSnapType: "x mandatory", overflowX: "auto"}}>
                            <div style={{padding: "0 120px", display: "flex", flexDirection: "row"}}>
                                <div style={{flex: "1 0 25%", scrollSnapAlign: "start", scrollSnapStop: "always", marginRight: 16, borderRadius: 12, position: "relative", cursor: "pointer"}}>
                                    <button style={{position: "relative", borderRadius: 0, outline: "none", display: "block", margin: 0, padding: 0, textDecoration: "none", height: "100%", width: "100%", background: "transparent", border: "none", cursor: "pointer"}}>
                                        <div style={{display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: 1, borderRadius: 12, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                        <img src="https://a0.muscache.com/im/pictures/8491648e-838c-4cf4-a4da-6694e3190e5f.jpg" style={{objectFit: "cover", objectPosition: "center top", verticalAlign: "bottom", borderRadius: 12, height: "100%", width: "100%", position: "static"}} />
                                        </div>
                                        <div style={{width: "100%", height: "70%", position: "absolute", pointerEvents: "none", bottom: 0, left: 0, background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"}}></div>
                                        <div style={{fontSize: 26, lineHeight: "30px", bottom: 24, position: "absolute", left: 24, pointerEvents: "none", fontWeight: 600, color: "white", textAlign: "left"}}>How to describe <br />your place</div>
                                        <div style={{width: 34, height: 34, bottom: 24, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: "50%", position: "absolute", right: 24}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", height: 13, width: 13, fill: "#222222"}} ><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                        </div>
                                    </button>
                                </div>
                                <div style={{flex: "1 0 25%", scrollSnapAlign: "start", scrollSnapStop: "always", marginRight: 16, borderRadius: 12, position: "relative", cursor: "pointer"}}>
                                    <button style={{position: "relative", borderRadius: 0, outline: "none", display: "block", margin: 0, padding: 0, textDecoration: "none", height: "100%", width: "100%", background: "transparent", border: "none", cursor: "pointer"}}>
                                        <div style={{display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: 1, borderRadius: 12, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                        <img src="https://a0.muscache.com/im/pictures/26068757-0744-435f-a8b7-8a9bf81fe27d.jpg" style={{objectFit: "cover", objectPosition: "center top", verticalAlign: "bottom", borderRadius: 12, height: "100%", width: "100%", position: "static"}} />
                                        </div>
                                        <div style={{width: "100%", height: "70%", position: "absolute", pointerEvents: "none", bottom: 0, left: 0, background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"}}></div>
                                        <div style={{fontSize: 26, lineHeight: "30px", bottom: 24, position: "absolute", left: 24, pointerEvents: "none", fontWeight: 600, color: "white", textAlign: "left"}}>How to take <br />great photos</div>
                                        <div style={{width: 34, height: 34, bottom: 24, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: "50%", position: "absolute", right: 24}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", height: 13, width: 13, fill: "#222222"}} ><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                        </div>
                                    </button>
                                </div>
                                <div style={{flex: "1 0 25%", scrollSnapAlign: "start", scrollSnapStop: "always", marginRight: 16, borderRadius: 12, position: "relative", cursor: "pointer"}}>
                                    <button style={{position: "relative", borderRadius: 0, outline: "none", display: "block", margin: 0, padding: 0, textDecoration: "none", height: "100%", width: "100%", background: "transparent", border: "none", cursor: "pointer"}}>
                                        <div style={{display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: 1, borderRadius: 12, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                        <img src="https://a0.muscache.com/im/pictures/d950dbfc-d571-4f51-881b-be3cf3e35cda.jpg" style={{objectFit: "cover", objectPosition: "center top", verticalAlign: "bottom", borderRadius: 12, height: "100%", width: "100%", position: "static"}} />
                                        </div>
                                        <div style={{width: "100%", height: "70%", position: "absolute", pointerEvents: "none", bottom: 0, left: 0, background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"}}></div>
                                        <div style={{fontSize: 26, lineHeight: "30px", bottom: 24, position: "absolute", left: 24, pointerEvents: "none", fontWeight: 600, color: "white", textAlign: "left"}}>How to name <br />your place</div>
                                        <div style={{width: 34, height: 34, bottom: 24, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: "50%", position: "absolute", right: 24}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", height: 13, width: 13, fill: "#222222"}} ><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                        </div>
                                    </button>
                                </div>
                                <div style={{flex: "1 0 25%", scrollSnapAlign: "start", scrollSnapStop: "always", marginRight: 16, borderRadius: 12, position: "relative", cursor: "pointer"}}>
                                    <button style={{position: "relative", borderRadius: 0, outline: "none", display: "block", margin: 0, padding: 0, textDecoration: "none", height: "100%", width: "100%", background: "transparent", border: "none", cursor: "pointer"}}>
                                        <div style={{display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: 1, borderRadius: 12, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                        <img src="https://a0.muscache.com/im/pictures/c64c6a3b-b5cb-430a-a5c9-7227d86fab94.jpg" style={{objectFit: "cover", objectPosition: "center top", verticalAlign: "bottom", borderRadius: 12, height: "100%", width: "100%", position: "static"}} />
                                        </div>
                                        <div style={{width: "100%", height: "70%", position: "absolute", pointerEvents: "none", bottom: 0, left: 0, background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"}}></div>
                                        <div style={{fontSize: 26, lineHeight: "30px", bottom: 24, position: "absolute", left: 24, pointerEvents: "none", fontWeight: 600, color: "white", textAlign: "left"}}>How to set your <br />price</div>
                                        <div style={{width: 34, height: 34, bottom: 24, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: "50%", position: "absolute", right: 24}}>
                                            <svg viewBox="0 0 32 32" style={{display: "block", height: 13, width: 13, fill: "#222222"}} ><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                        </div>
                                    </button>
                                </div>
                                <div style={{flex: "1 0 24px", scrollSnapAlign: "start", scrollSnapStop: "always", marginRight: 16, borderRadius: 12, position: "relative", cursor: "pointer"}}></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
           
            </Grid>
        </Grid>
        <Footer />
        </>
    )
}

export default AskASuperhost;