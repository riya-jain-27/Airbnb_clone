import React, { useState, useRef, Component } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import PopUp from "../../component/popup";
import CarouselItem from "../../component/carouselItem";
import { Button, Grid, Typography, IconButton, SvgIcon } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const HostHome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPlaceOpen, setIsPlaceOpen] = useState(false);
    const [isGuestOpen, setIsGuestOpen] = useState(false);
    const [isDelhiOpen, setIsDelhiOpen] = useState(false);
    const [place, setPlace] = useState("entire home");
    const [guests, setGuests] = useState("4 guests");
    const [delhi, setDelhi] = useState("Delhi");
    const [isPlaying_1, setIsPlaying_1] = useState(true);
    const [isPlaying_2, setIsPlaying_2] = useState(true);
    const [carouselItem, setCarouselItem] = useState(2);

    const vidRef_1 = useRef();
    const vidRef_2 = useRef();
    const scrollTo = useRef();
    const navigate = useNavigate(); 

    const handleDownArrow = () => {
        scrollTo.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const handlePause_1 = () => {
        setIsPlaying_1(false);
        vidRef_1.current.pause()
    }
    
    const handlePlay_1 = () => {
        setIsPlaying_1(true);
        vidRef_1.current.play()
    }
    
    const handlePause_2 = () => {
        setIsPlaying_2(false);
        vidRef_2.current.pause()
    }
    
    const handlePlay_2 = () => {
        setIsPlaying_2(true);
        vidRef_2.current.play()
    }
    
    const togglePopUp = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handlePlace = () => {
        setIsPlaceOpen(!isPlaceOpen)
    }

    const handleGuest = () => {
        setIsGuestOpen(!isGuestOpen)
    }

    const handleDelhi = () => {
        setIsDelhiOpen(!isDelhiOpen)
    }

    const handleSelect = (e) => {
        setGuests(e.target.value)
    }
    
    return(
        <>
            {/* <Header /> */}
            <Grid>
                <Grid container style={{height: "100vh", display: "flex"}}>
                    <Grid style={{display: "block", position: "absolute", top: 48, left: 48, zIndex: 2}}>
                        <svg onClick={()=>navigate("/")} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: "block", height:36, width:36, fill:"#fff", cursor: "pointer"}} aria-label="Airbnb homepage" role="img" focusable="false"><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path></svg>
                    </Grid>
                    <Grid item md={6} style={{backgroundColor: "black", flex: "50%", color: "white", borderRadius: 0, position: "relative", height: "100%"}}>
                        <Grid style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100%"}}>
                            <Typography variant="h2" style={{color: "white", padding: 0, marginBottom: 52, fontWeight: 500, marginTop: 0}}>Hosting<br />makes Airbnb,<br />Airbnb</Typography>
                            <Button variant="contained" size="large" style={{borderRadius: 8, textTransform: "none", background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)", paddingTop: 14, paddingLeft: 24, paddingRight: 24, paddingBottom: 14, fontSize: 16}}>Try hosting</Button>
                            <IconButton onClick={handleDownArrow} aria-label="down" style={{color: "white", bottom: 40, position: "absolute"}}><KeyboardArrowDownRoundedIcon /></IconButton>
                        </Grid>
                    </Grid>
                    <Grid item md={6} style={{height: "100%", flex: "50%", position: "relative"}}>
                        <Grid style={{overflow: "hidden", height: "100%", position: "relative", width: "100%", willChange: "transform"}}>
                            <video ref={vidRef_1} autoPlay muted onEnded={()=>setIsPlaying_1(false)} style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "center top", display: "block"}}>
                            <source
                                src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265"
                                type="video/mp4; codecs=hevc"
                            />
                            <source
                                src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
                                type="video/mp4"
                            />
                            </video>
                            <div style={{bottom: 0, position: "absolute", width: "100%", height: "40vh", background: "linear-gradient(360deg, rgba(0, 0, 0, 0.54) 20.86%, rgba(0, 0, 0, 0) 90.37%)"}}></div>
                            <Grid style={{bottom: 48, left: "8%", position: "absolute"}}>
                                <Grid style={{marginBottom: 16, display: "inline-block", verticalAlign: "bottom", height: 56, width: "auto", minHeight: 1}}>
                                    <img src="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480" style={{objectFit: "contain", objectPosition: "left center", verticalAlign: "bottom", height: "100%", width: "100%", position: "static"}} />
                                </Grid>
                                <Typography style={{fontSize: 20, color: "white"}}>Host in Philadelphia</Typography>
                            </Grid>
                            <div style={{inset: 0, position: "absolute"}}></div>
                            <Grid style={{bottom: 180, position: "absolute", left: "8%"}}>
                                {isPlaying_1 ? <IconButton onClick={handlePause_1} aria-label="pause" style={{color: "white"}}><PauseIcon /></IconButton>
                                : <IconButton onClick={handlePlay_1} aria-label="play" style={{color: "white"}}><PlayArrowIcon /></IconButton>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid>
                    <Grid container ref={scrollTo} style={{height: 1131, position: "relative", transform: "translateY(1px)"}}>
                        <Grid style={{paddingTop: 160, paddingBottom: 80, paddingLeft: 48, maxWidth: 1760, margin: "0 auto", width: "100%"}}>
                            <h2 style={{fontSize: 64, textAlign: "center", color: "black", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 15, marginTop: 0, lineHeight: "64px"}}>You can host<br />anything, anywhwere</h2>
                            <Grid style={{position: "relative"}}>
                                <div style={{paddingTop: 20, margin: "60px auto 0", scrollSnapType: "x mandatory", overflowX: "auto", display: "flex", position: "relative"}}>
                                    <Grid style={{flex: "1 0 calc(32.75% + 1px)", scrollSnapAlign: "center", scrollSnapStop: "always", display: "flex", flexDirection: "column"}}></Grid>
                                    <CarouselItem host_img="https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720" content="Hosting my studio changed my life and gifted me with memorable experiences and people." sign_img="https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240" location="Milan" />
                                    <CarouselItem host_img="https://a0.muscache.com/im/pictures/31fb3cb1-c2a1-4e14-a9e9-6f279991790b.jpg?im_w=720" content="Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom." sign_img="https://a0.muscache.com/im/pictures/b0123613-6e48-4108-af8b-bb2d347b4de8.jpg?im_w=240" location="Atlanta" />
                                    <CarouselItem host_img="https://a0.muscache.com/im/pictures/a464d642-695e-4d2c-aa51-2302de067f45.jpg?im_w=720" content="We’re able to keep our culture alive by hosting our pasta-making experience." sign_img="https://a0.muscache.com/im/pictures/4314911d-559f-4fc7-a493-2edce264d839.jpg?im_w=240" location="Palombara Sabina" />
                                    <CarouselItem host_img="https://a0.muscache.com/im/pictures/d8627b07-b42c-40a1-807f-1eac9de39311.jpg?im_w=720" content="Airbnb has allowed me to create my own job doing what I love – taking care of guests in our home." sign_img="https://a0.muscache.com/im/pictures/80b16be2-f6bf-4a68-846f-b35d4b85c455.jpg?im_w=240" location="Chiang Mai" />
                                    <CarouselItem host_img="https://a0.muscache.com/im/pictures/b56f3d7c-5006-4ed2-967a-c421e3275b1f.jpg?im_w=720" content="Hosting my Bedouin tent has introduced me to people around the world." sign_img="https://a0.muscache.com/im/pictures/82a3e33e-a83e-49e8-b642-0de04018075b.jpg?im_w=240" location="Wadi Rum" />
                                    <CarouselItem host_img="https://a0.muscache.com/im/pictures/334530d8-2ad6-40e8-8fd2-4ac0835e693a.jpg?im_w=720" content="I love hosting my eco-home so people can connect with nature and their loved ones." sign_img="https://a0.muscache.com/im/pictures/62dccc5f-5fa6-4e24-8406-8ced33d1c403.jpg?im_w=240" location="Paraty" />
                                    <Grid style={{flex: "1 0 calc(32.75% + 1px)", scrollSnapAlign: "center", scrollSnapStop: "always", display: "flex", flexDirection: "column"}}></Grid>
                                </div>
                                <div style={{right: "calc(33.3% + 16px)", position: "absolute", bottom: 46, zIndex: 2}}>
                                    <span style={{display: "inline-block", width: 32, marginRight: 12}}>
                                        <IconButton style={{backgroundColor: "#EBEBEB", color: "#717171", borderRadius: "50%", position: "relative", height: 32, width: 32, alignItems: "center"}}><ArrowBackIosIcon fontSize="small" /></IconButton>
                                    </span>
                                    <span style={{display: "inline-block", width: 32}}>
                                        <IconButton style={{backgroundColor: "#EBEBEB", color: "#717171", borderRadius: "50%", position: "relative", height: 32, width: 32, alignItems: "center"}}><ArrowForwardIosIcon fontSize="small" /></IconButton>
                                    </span>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid>
                    <Grid container style={{height: 500, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", marginTop: 0, justifyContent: "center", paddingLeft: 80, paddingRight: 24, paddingTop: 120, zIndex: 1, width: "100%", maxWidth: 1760}}>
                        <Grid item style={{fontSize: 60, fontWeight: 600, color: "rgb(113,113,113)", marginRight: 8, marginBottom: 28, letterSpacing: "-0.02em", textAlign: "center"}}>
                            Host your <span style={{marginRight: 10, display: "inline-block", cursor: "pointer", color: "rgb(34,34,34)", position: "relative"}}>
                                <Grid onClick={handlePlace} style={{margin: 0, userSelect: "auto", wordSpacing: "normal", textTransform: "none", textIndent: 0, display: "inline-block", textAlign: "center", alignItems: "flex-start"}}>
                                    <span style={{userSelect: "none", position: "relative", marginLeft: 3, textTransform: "lowercase", borderBottom: "2px solid black"}}> entire place </span>
                                    {isPlaceOpen ? <svg style={{marginLeft: 4, verticalAlign: "middle", transform: "rotate(180deg)"}} width="14px" height="8px" viewBox="0 0 14px 8px" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008" stroke="#222" strokeWidth="2"></path></svg>
                                     : <svg style={{marginLeft: 4, verticalAlign: "middle"}} width="14px" height="8px" viewBox="0 0 14px 8px" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008" stroke="#222" strokeWidth="2"></path></svg> }                              
                                </Grid>
                                {isPlaceOpen ? 
                                    <Grid>
                                        <ul tabIndex={-1} role="listbox" style={{width: "calc(100% - 32px)", transform: "translateY(-12px)", position: "absolute", background: "rgb(255,255,255)", color: "black", borderRadius: "0px 0px 5px 5px", zIndex: 10, left: 3, letterSpacing: "normal", maxHeight: 400, overflowY: "scroll", marginTop: 12, padding: 0, listStyle: "none", border: "1px solid black"}}>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>Entire place</Typography>
                                            </li>
                                            <li onMouseOver={"this.style.backgroundColor= 'black', this.style.color= 'white'"} style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black", transition: "color 0.02s ease 0s, background-color 0.02s ease 0s"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>Private room</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black", }}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>Shared room</Typography>
                                            </li>
                                        </ul>
                                    </Grid>
                                 : null }
                            </span>
                             for <span style={{marginRight: 10, display: "inline-block", cursor: "pointer", color: "rgb(34,34,34)", position: "relative"}}>
                                <Grid onClick={handleGuest} style={{margin: 0, userSelect: "auto", wordSpacing: "normal", textTransform: "none", textIndent: 0, display: "inline-block", textAlign: "center", alignItems: "flex-start"}}>
                                    <span style={{userSelect: "none", position: "relative", marginLeft: 3, textTransform: "lowercase", borderBottom: "2px solid black"}}> 4 guests </span>
                                    {isGuestOpen ? <svg style={{marginLeft: 4, verticalAlign: "middle", transform: "rotate(180deg)"}} width="14px" height="8px" viewBox="0 0 14px 8px" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008" stroke="#222" strokeWidth="2"></path></svg>
                                     : <svg style={{marginLeft: 4, verticalAlign: "middle"}} width="14px" height="8px" viewBox="0 0 14px 8px" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008" stroke="#222" strokeWidth="2"></path></svg> }                              
                                </Grid>
                                {isGuestOpen ? 
                                    <Grid>
                                        <ul onClick={handleSelect} tabIndex={-1} role="listbox" style={{width: "calc(100% - 32px)", transform: "translateY(-12px)", position: "absolute", background: "rgb(255,255,255)", color: "black", borderRadius: "0px 0px 5px 5px", zIndex: 10, left: 3, letterSpacing: "normal", maxHeight: 400, overflowY: "scroll", margin: 12, padding: 0, listStyle: "none", border: "1px solid black"}}>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>1 guest</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>2 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>3 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>4 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>5 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>6 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>7 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>8 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>9 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>10 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>11 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>12 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>13 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>14 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>15 guests</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>16 guests</Typography>
                                            </li>
                                        </ul>
                                    </Grid>
                                 : null }
                            </span>
                            <br />
                            in <span style={{marginRight: 10, display: "inline-block", cursor: "pointer", color: "rgb(34,34,34)", position: "relative"}}>
                                <Grid onClick={handleDelhi} style={{margin: 0, userSelect: "auto", wordSpacing: "normal", textTransform: "none", textIndent: 0, display: "inline-block", textAlign: "center", alignItems: "flex-start"}}>
                                    <span style={{userSelect: "none", position: "relative", marginLeft: 3, textTransform: "none", borderBottom: "2px solid black"}}> Delhi </span>
                                    {isDelhiOpen ? <svg style={{marginLeft: 4, verticalAlign: "middle", transform: "rotate(180deg)"}} width="14px" height="8px" viewBox="0 0 14px 8px" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008" stroke="#222" strokeWidth="2"></path></svg>
                                     : <svg style={{marginLeft: 4, verticalAlign: "middle"}} width="14px" height="8px" viewBox="0 0 14px 8px" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008" stroke="#222" strokeWidth="2"></path></svg> }                              
                                </Grid>
                                {isDelhiOpen ? 
                                    <Grid>
                                        <ul tabIndex={-1} role="listbox" style={{width: "calc(100% - 32px)", transform: "translateY(-12px)", position: "absolute", background: "rgb(255,255,255)", color: "black", borderRadius: "0px 0px 5px 5px", zIndex: 10, left: 3, letterSpacing: "normal", maxHeight: 400, overflowY: "scroll", margin: 12, padding: 0, listStyle: "none", border: "1px solid black"}}>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>Delhi-6 Parkhust Plaza, Ashburn, VA, USA</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>Delhi India</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>Delhi Bazaar Ice Rink Plaza, Ashburn, VA, USA</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>Delhi NY, USA</Typography>
                                            </li>
                                            <li style={{padding: "26px 48px 26px 16px", position: "relative", borderBottom: "1px solid rgb(221,221,221)", color: "black"}}>
                                                <Typography style={{fontSize: 16, textAlign: "left"}}>Delhi ON, Canada</Typography>
                                            </li>
                                        </ul>
                                    </Grid>
                                 : null }
                            </span>
                            <br />
                            and earn up to ₹29,094/month
                        </Grid>
                        <Grid item onClick={togglePopUp} style={{fontSize: 16, textAlign: "center", marginTop: 12, fontWeight: 500, textDecoration: "underline", cursor: "pointer"}}>
                            How we estimate your earnings potential
                        </Grid>
                    </Grid>
                    {isModalOpen && <PopUp handleClose={togglePopUp} setIsOpen={setIsModalOpen} isOpen={isModalOpen} />}
                </Grid>

                <Grid>
                    <Grid container style={{marginTop: 24, marginLeft: "auto", marginRight: "auto", height: 780, width: "calc(100% - 96px)", maxWidth: 1760, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <Grid item style={{left: "50%", transform: "translateX(-50%)", filter: "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.28))", width: "100%", position: "absolute", zIndex: 0, verticalAlign: "bottom", height: "auto", width: "100%", borderRadius: 12}}>
                            <img style={{verticalAlign: "bottom", borderRadius: 12, height: "100%", width: "100%", position: "static"}} src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&im_q=highq"></img>
                        </Grid>
                        <Grid item style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white", zIndex: 1, textAlign: "center", fontWeight: 600, height: 480, fontSize: 64}}>
                            Questions about hosting?<br></br>Ask a Superhost.
                            <Button variant="contained" style={{textTransform: "none", marginTop: 48, position: "static", width: 180, bottom: 60, backgroundColor: "white", color: "black", paddingTop: 13, paddingBottom: 13, fontSize: 16, borderRadius: 10}}>Learn more</Button>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid>
                    <Grid container style={{marginTop: 57, marginBottom: 57, marginLeft: "auto", marginRight: "auto", height: "768px", width: "calc(100% - 96px)", maxWidth: 1760, borderRadius: 16, alignItems: "center", justifyContent: "center", backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row", position: "relative"}}>
                        <Grid item style={{marginTop: 0, width: "50%", paddingLeft: 80, paddingRight: 32, }}>
                            <div style={{border: 0, padding: 0, height: 1, width: 1, position: "absolute", overflow: "clip", clip: "rect(0 0 0 0)", clipPath: "inset(100%)"}}></div>
                            <svg width="510" height="110" viewBox="0 0 380 82" fill="none"><path d="M146.925 81.2371C143.135 81.2737 139.377 80.5474 135.875 79.1015C132.565 77.7229 129.575 75.6794 127.091 73.098C124.578 70.4632 122.607 67.3624 121.29 63.9711C119.872 60.3283 119.162 56.4493 119.199 52.5415C119.161 48.5636 119.888 44.6154 121.339 40.9103C122.705 37.4281 124.729 34.2399 127.3 31.519C129.874 28.8005 132.983 26.6417 136.432 25.1777C139.881 23.7138 143.595 22.9762 147.343 23.0112C151.122 22.9721 154.866 23.7381 158.324 25.2581C161.6 26.7011 164.51 28.8569 166.843 31.5677C169.198 34.3044 170.87 37.5582 171.723 41.0633L157.78 43.7763C156.845 41.5603 155.328 39.6374 153.388 38.2111C151.545 36.863 149.315 36.1434 147.03 36.159C144.647 36.1187 142.316 36.8511 140.386 38.2459C138.398 39.7489 136.843 41.7474 135.875 44.0407C134.73 46.6536 134.159 49.4812 134.202 52.3328C134.147 55.1304 134.699 57.9068 135.819 60.4719C136.802 62.7054 138.375 64.6294 140.372 66.0371C142.322 67.3966 144.65 68.1141 147.03 68.0893C149.439 68.1281 151.805 67.45 153.827 66.1415C155.881 64.78 157.454 62.8089 158.324 60.5067L172.267 63.2198C171.418 66.7971 169.671 70.1005 167.192 72.8197C164.711 75.5378 161.659 77.6757 158.254 79.0806C154.662 80.5524 150.808 81.2859 146.925 81.2371Z" fill="#222222"></path><path d="M203.279 81.2373C199.332 81.277 195.417 80.5318 191.767 79.046C188.311 77.6423 185.177 75.5631 182.555 72.9331C179.933 70.3032 177.876 67.1768 176.507 63.7417C175.037 60.043 174.305 56.098 174.353 52.1244C174.309 48.1747 175.063 44.256 176.571 40.5975C178.001 37.1521 180.096 34.0144 182.739 31.3593C185.387 28.7108 188.548 26.617 192.034 25.2028C195.737 23.7136 199.704 22.9686 203.702 23.0115C207.642 22.9746 211.55 23.7198 215.194 25.2028C218.644 26.617 221.773 28.6999 224.395 31.3285C227.017 33.9571 229.079 37.078 230.46 40.5071C231.931 44.1767 232.665 48.0942 232.622 52.0409C232.661 56.0084 231.908 59.9446 230.403 63.6235C228.981 67.0891 226.883 70.2447 224.228 72.9104C221.58 75.5589 218.419 77.6527 214.933 79.0669C211.233 80.5462 207.271 81.284 203.279 81.2373ZM203.491 68.0895C206.043 68.1242 208.546 67.3968 210.673 66.0026C212.822 64.5731 214.554 62.6108 215.694 60.3122C216.959 57.7669 217.592 54.9598 217.539 52.1244C217.591 49.2891 216.959 46.4822 215.694 43.9366C214.554 41.638 212.822 39.6757 210.673 38.2462C208.531 36.8838 206.038 36.1593 203.491 36.1593C200.943 36.1593 198.45 36.8838 196.308 38.2462C194.162 39.6767 192.433 41.6389 191.295 43.9366C190.027 46.4817 189.393 49.2885 189.443 52.1244C189.392 54.9604 190.027 57.7674 191.295 60.3122C192.433 62.6099 194.162 64.5722 196.308 66.0026C198.435 67.3968 200.938 68.1242 203.491 68.0895Z" fill="#222222"></path><path d="M251.309 79.5154L230.54 24.3867H246.589L258.967 64.0626L271.554 24.3867H287.079L266.302 79.5154H251.309Z" fill="#222222"></path><path d="M313.403 81.2377C309.494 81.2794 305.614 80.5536 301.989 79.1021C298.597 77.73 295.533 75.6683 292.994 73.0499C290.427 70.3742 288.425 67.2169 287.104 63.7631C285.672 60.0132 284.958 56.0306 285.001 52.0206C284.967 48.0973 285.681 44.203 287.104 40.5425C288.427 37.1175 290.411 33.9818 292.944 31.3113C295.423 28.7062 298.41 26.6282 301.722 25.2035C305.177 23.7241 308.905 22.9777 312.667 23.0122C316.47 22.9624 320.244 23.6721 323.766 25.0992C327.022 26.4424 329.945 28.4718 332.333 31.0469C334.771 33.7137 336.649 36.8352 337.858 40.2294C339.196 44.0527 339.854 48.078 339.8 52.125V55.7771H299.942C300.573 59.9046 302.08 63.1277 304.464 65.4465C305.657 66.6018 307.073 67.5055 308.628 68.1033C310.182 68.701 311.842 68.9805 313.508 68.9248C315.924 68.9522 318.303 68.3398 320.4 67.1509C322.518 65.9146 324.275 64.1524 325.497 62.0379L338.643 66.2118C337.414 69.296 335.468 72.0489 332.964 74.2465C330.377 76.5107 327.379 78.2649 324.13 79.4151C320.689 80.6408 317.059 81.2577 313.403 81.2377ZM312.702 34.2817C311.203 34.244 309.711 34.5013 308.313 35.0386C306.915 35.5759 305.637 36.3825 304.555 37.4121C302.344 39.499 300.888 42.3511 300.187 45.9685H324.691C324.13 42.3511 322.782 39.499 320.646 37.4121C319.598 36.3817 318.351 35.5729 316.98 35.0348C315.608 34.4967 314.141 34.2405 312.667 34.2817H312.702Z" fill="#222222"></path><path d="M377.354 24.1703C377.015 24.0972 376.676 24.0094 376.307 23.9509C375.32 23.7753 374.347 23.6875 373.36 23.6875C370.132 23.6875 367.331 24.4776 364.958 26.0284C362.571 27.5939 360.684 29.8324 359.284 32.7585L358.753 24.419H345.193V79.5036H359.903V52.4807C359.903 47.9598 360.994 44.4631 363.16 41.9905C365.327 39.5179 368.452 38.2889 372.519 38.2889C373.36 38.2889 374.185 38.3475 374.981 38.4499C375.777 38.5523 376.573 38.7425 377.339 39.0205V24.1703H377.354Z" fill="#222222"></path><path d="M25.58 81.2383C22.0881 81.2725 18.6336 80.5233 15.475 79.047C12.3817 77.5829 9.62337 75.5067 7.36998 72.9461C5.00766 70.2601 3.16841 67.1631 1.94558 63.8121C0.619396 60.1658 -0.0388835 56.314 0.00177462 52.4382C-0.0375934 48.4896 0.63984 44.5663 2.00172 40.8555C3.27381 37.4259 5.17738 34.2603 7.61559 31.5198C9.95431 28.8767 12.822 26.7446 16.0364 25.2589C19.2887 23.7595 22.8353 22.9922 26.422 23.012C29.8601 22.9625 33.2577 23.7508 36.3165 25.3076C39.248 26.824 41.7462 29.0492 43.5794 31.7772L44.0005 24.5772H57.579V79.673H44.0005L43.5794 71.6382C41.7131 74.5942 39.1007 77.0161 36.0007 78.6643C32.8038 80.3852 29.2176 81.271 25.58 81.2383ZM29.0535 68.0904C31.597 68.1251 34.0917 67.3977 36.2112 66.0034C38.3505 64.573 40.0734 62.6107 41.2076 60.313C42.4712 57.7682 43.1039 54.9611 43.0531 52.1251C43.1031 49.2892 42.4705 46.4823 41.2076 43.9373C40.0734 41.6395 38.3505 39.6772 36.2112 38.2468C34.0917 36.8525 31.597 36.1252 29.0535 36.1598C26.5101 36.1252 24.0154 36.8525 21.8959 38.2468C19.754 39.6763 18.0286 41.6387 16.8925 43.9373C15.6318 46.4828 15.0015 49.2897 15.054 52.1251C15.0007 54.9606 15.631 57.7677 16.8925 60.313C18.0286 62.6116 19.754 64.5739 21.8959 66.0034C24.0154 67.3977 26.5101 68.1251 29.0535 68.0904Z" fill="#FF385C"></path><path d="M80.224 9.29417C80.2552 10.8092 79.8686 12.3042 79.1052 13.6198C78.3694 14.8696 77.3054 15.9011 76.0252 16.6058C74.7088 17.3242 73.2287 17.701 71.7239 17.701C70.219 17.701 68.7389 17.3242 67.4225 16.6058C66.1423 15.9011 65.0783 14.8696 64.3425 13.6198C63.5878 12.3138 63.2038 10.8317 63.2308 9.32905C63.2038 7.82643 63.5878 6.34434 64.3425 5.03834C65.0768 3.78912 66.1413 2.75954 67.4225 2.05926C68.7374 1.33646 70.2181 0.957031 71.7239 0.957031C73.2296 0.957031 74.7103 1.33646 76.0252 2.05926C77.3064 2.75954 78.3709 3.78912 79.1052 5.03834C79.8562 6.33342 80.2425 7.80269 80.224 9.29417ZM64.2929 79.5153V24.2593H79.1619V79.5153H64.2929Z" fill="#FF385C"></path><path d="M118.128 24.1684C117.789 24.0952 117.45 24.0074 117.082 23.9489C116.094 23.7733 115.122 23.6855 114.134 23.6855C110.906 23.6855 108.106 24.4756 105.733 26.0265C103.345 27.5919 101.458 29.8304 100.058 32.7566L99.5277 24.4171H85.9678V79.5017H100.677V52.4788C100.677 47.9579 101.768 44.4611 103.935 41.9886C106.101 39.516 109.226 38.287 113.294 38.287C114.134 38.287 114.959 38.3455 115.755 38.4479C116.551 38.5503 117.347 38.7405 118.114 39.0185V24.1684H118.128Z" fill="#FF385C"></path></svg>
                            <Typography style={{display: "block", marginTop:40, marginBottom: 50, marginLeft: 0, marginRight: 0, color: "black", fontSize: 32, maxWidth: 460, fontWeight: 400}}>Top-to-bottom protection. Free for Hosts. Only on Airbnb.</Typography>
                            <Button variant="outlined" onClick={()=>navigate("/aircover")} style={{color: "black", borderColor: "black", diplay: "inline-block", position: "relative", fontSize: 16, fontWeight: 500, paddingTop: 10, paddingBottom: 10, paddingLeft: 23, paddingRight: 23, textTransform: "none", borderRadius: 8}}>Explore AirCover</Button>
                        </Grid>
                        <Grid item style={{height: 750, width: 630, position: "static", margin: 0}}>
                            <div style={{display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: 1}}>
                                <img decoding="async" loading="lazy" src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&im_q=highq" style={{objectFit: "contain", verticalAlign: "bottom", height: "100%", width: "100%", position: "static"}}></img>
                                {/* <div style={{background: `url(https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&im_q=highq)`}}></div> */}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container style={{height: "100vh", display: "flex"}}>
                    <Grid item md={6} style={{height: "100%", flex: "50%", position: "relative"}}>
                        <Grid style={{overflow: "hidden", height: "100%", position: "relative", width: "100%", willChange: "transform"}}>
                            <video ref={vidRef_2} autoPlay muted onEnded={()=>setIsPlaying_2(false)} style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "center top", display: "block"}}>
                            <source
                                src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4?imformat=h265"                                
                                type="video/mp4; codecs=hevc"
                            />
                            <source
                                src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"                                
                                type="video/mp4"
                            />
                            </video>
                            <div style={{inset: 0, position: "absolute"}}></div>
                            <Grid style={{bottom: 24, position: "absolute", left: 48}}>
                                {isPlaying_2 ? <IconButton onClick={handlePause_2} aria-label="pause" style={{color: "white"}}><PauseIcon /></IconButton>
                                : <IconButton onClick={handlePlay_2} aria-label="play" style={{color: "white"}}><PlayArrowIcon /></IconButton>}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} style={{backgroundColor: "black", flex: "50%", color: "white", borderRadius: 0, position: "relative", height: "100%"}}>
                        <Grid style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100%"}}>
                            <Typography variant="h3" style={{color: "white", padding: 0, marginBottom: 0, fontWeight: 500}}>Try hosting on<br />Airbnb</Typography>
                            <Typography style={{color: "white", padding: 0, marginTop: 32, fontSize: 18, fontWeight: "normal"}}>Join us. We'll help you every<br />step of the way</Typography>
                            <Grid style={{margin: 48, bottom: 24, right: 48, position: "static"}}>
                            <Button variant="contained" size="large" style={{borderRadius: 8, textTransform: "none", background: "linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)", paddingTop: 10, paddingLeft: 24, paddingRight: 24, paddingBottom: 10, fontSize: 16}}>Let's go!</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default HostHome;