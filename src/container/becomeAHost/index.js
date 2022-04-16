import React, {useState, useRef} from "react";
import { Button, Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css"

const BecomeAHost = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const vidRef = useRef();
    const navigate = useNavigate();

    const handlePause = () => {
        setIsPlaying(false);
        vidRef.current.pause()
    }
    
    const handlePlay = () => {
        setIsPlaying(true);
        vidRef.current.play()
    }

    const handleToggle = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    return(
        <>
        {/* {isPopupOpen ? (
            <div className="become_popup_container">
                <div className="become_popup_content">
                    <div className="become_popup_closeButton">
                        <IconButton onClick={()=>setIsPopupOpen(false)} id="become_popup_close"><CloseIcon fontSize="small" /></IconButton>
                    </div>
                    <div className="become_popup_videoContainer1">
                        <div className="become_popup_videoContainer2">
                            <div className="become_popup_videoContainer3">
                                <video className="become_popup_video">
                                    <source src="https://a0.muscache.com/v/7a/b4/7ab45f53-0246-5dcd-b186-537347432fc3/7ab45f5302465dcdb186537347432fc3_4000k_1.mp4?imformat=h265&amp;impolicy=high_quality" type="video/mp4; codecs=hevc" />
                                    <source src="https://a0.muscache.com/v/7a/b4/7ab45f53-0246-5dcd-b186-537347432fc3/7ab45f5302465dcdb186537347432fc3_4000k_1.mp4?impolicy=high_quality" type="video/mp4" />
                                    <track srclang="en" label="English" kind="subtitles" src="https://a0.muscache.com/videos/AmbassadorMarketingLanding/AmbassadorMarketingLanding_N9_final/LYS_VIDEOS/subtitles/cf5f9e66-749c-4d0a-a349-75280db6e548"></track>
                                </video>
                                <div className="become_popup_videoTab">
                                    <div className="become_popup_videoTab_container">
                                        <div className="become_popup_videoTab_buttons">
                                            <div style={{transform: "scale(1)", opacity: 1}}>
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: 60, width: 60, fill: "rgb(255, 255, 255)"}}><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="become_popup_videoTab_controls">
                                            <div className="become_popup_videoTab_options">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : ( */}
            <Grid style={{display: "flex", flexDirection: "row", opacity: 1, width: "100%", height: "100vh", transition: "opacity 600ms"}}>
                <Grid style={{display: "flex", flexGrow: 1, minHeight: "50%", flexDirection: "column", width: "50%", height: "100vh", maxHeight: "100%", position: "fixed", alignItems: "flex-start", justifyContent: "flex-end"}}>
                    <div style={{position: "fixed", zIndex: 1, top: 32, left: 48, display: "inline"}}>
                        <div onClick={()=>navigate("/")} style={{display: "inline-flex", borderRadius: "50%", cursor: "pointer", position: "relative", color: "white", width: 40, height: 40, justifyContent: "center", alignItems: "center"}}>
                            <svg viewBox="0 0 32 32" style={{display: "block", height: 32, width: 32, fill: "white", position: "relative"}}><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path></svg>
                        </div>
                    </div>
                    <div style={{height: "100%", position: "absolute", top: 0, left: 0, right: 0, bottom: -12}}>
                        <div style={{height: "100%", overflow: "hidden", position: "relative", width: "100%", willChange: "transform"}}>
                            <video ref={vidRef} autoPlay muted onEnded={()=>setIsPlaying(false)} style={{objectFit: "cover", objectPosition: "0 25%", display: "inline-block", height: "100%", width: "100%"}}>
                                <source src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div style={{bottom: 0, position: "absolute", width: "100%", height: "30vh", background: "linear-gradient(360deg, rgba(0, 0, 0, 0.54) 20.86%, rgba(0, 0, 0, 0) 90.37%)"}}></div>
                        <div style={{right: 48, left: 48, bottom: 40, position: "absolute", color: "white"}}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <span>
                                        <button onClick={handleToggle} style={{height: 40, cursor: "pointer", textAlign: "center", border: "none", backgroundColor: "rgb(0,0,0,0.5)", color: "white", position: "relative", paddingLeft: 16, paddingRight: 16, borderRadius: 32, display: "inline-flex", alignItems: "center", flexDirection: "row-reverse", flex: 1, fontSize: 16, lineHeight: "20px", fontWeight: 500}}>
                                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <div>Play full video</div>
                                            </div>
                                            <div style={{marginRight: 8}}>
                                                <svg viewBox="0 0 32 32" style={{display: "block", height: 16, width:16, fill: "white"}}><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                            </div>
                                        </button>
                                    </span>
                                    {isPlaying ? <IconButton onClick={handlePause} aria-label="pause" style={{color: "white", backgroundColor: "rgb(0,0,0,0.5)"}}><PauseIcon /></IconButton>
                                        : <IconButton onClick={handlePlay} aria-label="play" style={{color: "white", backgroundColor: "rgb(0,0,0,0.5)"}}><PlayArrowIcon /></IconButton>}
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid style={{left: "50%", zIndex: 2, width: "50vw", top: 0, right: 0, position: "fixed"}}>
                    <div style={{padding: "32px 48px 0px", flexDirection: "row", justifyContent: "flex-end", backgroundColor: "black", height: 88, display: "flex"}}>
                        <div style={{paddingRight: 0, flex: "none", minWidth: 0, pointerEvents: "auto"}}>
                            <Button onClick={()=>navigate("/hostYourHome")} style={{textTransform: "none", color: "white", display: "block", fontSize: 12, lineHeight: "16px", fontWeight: 500, borderRadius: 32, height: 32, paddingLeft: 16, paddingRight: 16, backgroundColor: "#222222"}}>Exit</Button>
                        </div>
                    </div>
                </Grid>

                <Grid style={{zIndex: 0, width: "50%", borderRadius: 0, position: "inherit", height: "100%", minHeight: "unset", maxHeight: "unset", marginLeft: "50vw", flex: "50%", display: "flex", backgroundColor: "black", color: "white", alignSelf: "flex-end"}}>
                    <div style={{overflowY: "auto", marginTop: 88, paddingLeft: 48, paddingRight: 48, marginBottom: 82, borderTop: "1px solid black", height: "calc(100vh - calc(88px + 82px))", width: "100%", display: "flex", flexDirection: "column", zIndex: "inherit"}}>
                        <div style={{marginTop: "auto", marginBottom: "auto"}}>
                            <div style={{display: "flex", flex: "1 1 0%", width: "100%", height: "100%", opacity: 1, transition: "opacity 0.6s"}}>
                                <div style={{paddingBottom: 0, width: "100%", paddingTop: 0, margin: "auto"}}>
                                    <div style={{textAlign: "center", maxWidth: 480, margin: "auto", backgroundColor: "transparent", color: "white"}}>
                                        <h1 style={{marginTop: 0, marginBottom: 32, fontSize: 48, lineHeight: "56px", fontWeight: 600, overflowWrap: "break-word"}}>Become a Host in 10 easy steps</h1>
                                        <div style={{maxWidth: 400, marginLeft: "auto", marginRight: "auto", fontWeight: 400, fontSize: 18, lineHeight: "24px"}}>Join us. We'll help you every step of the way.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "50vw", backgroundColor: "inherit", bottom: 0, position: "fixed", zIndex: 2}}>
                        <div style={{backgroundColor: "black", borderTop: "2px solid #222222"}}>
                            <div style={{paddingTop: 16, paddingBottom: 16, display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                <div style={{marginRight: 48}}>
                                    <Button variant="contained" size="large" style={{borderRadius: 8, textTransform: "none", background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)", paddingTop: 14, paddingLeft: 24, paddingRight: 24, paddingBottom: 14, fontSize: 16, fontWeight: 600}}>Let's go!</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        {/* )} */}

        </>
    )
}

export default BecomeAHost