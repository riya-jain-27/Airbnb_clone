import React, {useState, useRef} from "react";
import Footer from "../../component/footer";
import { Button, Grid, Typography, IconButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./style.css";

const AskASuperhost = () =>{
    const [isPlaying, setIsPlaying] = useState(true);
    const name = ["Teddy", "Vidal", "Steven", "Sally", "Loubna", "Teddy", "Vidal", "Steven", "Sally", "Loubna", "Loubna", "Loubna", "Loubna"]
    const year = ["2015", "2017", "2016", "2017", "2017","2015", "2017", "2016", "2017", "2017", "2017", "2017", "2017"]
    const [counter, setCounter] = useState(0)
    const [scrollHeight, setScrollHeight] = useState(0);

    const vidRef = useRef();
    const navigate = useNavigate();

    const handleLogo = () => {
        navigate("/home");
    }

    const handlePause = () => {
        setIsPlaying(false);
        vidRef.current.pause()
    }
    
    const handlePlay = () => {
        setIsPlaying(true);
        vidRef.current.play()
    }
    const inst = setInterval(change, 2000)
    function change(){
        if(isPlaying){ 
            setCounter((counter+1)%12);
            clearInterval(inst);
        }
    }

    window.onscroll = () =>{
        const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
        setScrollHeight(newScrollHeight);
    }
    const opacity = Math.min((1 - scrollHeight / 300), 1);

    // <script>
    //     {window.scroll(function() {
    //         let scroll = this.scroll();            
    //         ('#superhost_header_button').css({
    //             opacity: function(){
    //                 var elemHeight = this.height(),
    //                 opacity = ((1 - (elemHeight - scroll) / elemHeight) * 0.2);
    //                 return opacity;
    //             }
    //             });
    //     })}
    // </script>

    return(
        <>
        <Grid>
            <div className="superhost_header_container">
                <div className="superhost_header_logo_container1">
                    <div className="superhost_header_logo_container2">
                        <svg onClick={handleLogo} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="superhost_header_logo" aria-hidden="true" role="presentation" focusable="false"><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path></svg>
                    </div>
                </div>
                <div className="superhost_header_button_container">
                    <Button variant="contained" onClick={()=>navigate("/becomeHost")} id="superhost_header_button">Become a host</Button>
                </div>
            </div>

            <Grid id="superhost_container">
                <div style={{position: "absolute", top: 0, left:0, width: "100%", height: "65vh", pointerEvents: "none"}}></div>
                
                <div className="superhost_section1_container1">
                    <div className="superhost_section1_container2">
                        <div className="superhost_section1_content" style={{opacity: `${opacity}`}}>
                            <h1 className="superhost_section1_text_container">
                                <span className="superhost_section1_text">Questions about hosting?</span>
                            </h1>
                            <div className="superhost_section1_button_container">
                                <Button variant="contained" id="superhost_section1_button">Ask a Superhost</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Grid id="superhost_sections">
                    <div className="superhost_section2_container">
                        <div className="superhost_section2_leftSection">
                            <div className="superhost_section2_leftSection_container">
                                <div className="superhost_section2_leftSection_content">
                                    <Typography id="superhost_section2_heading">Ask a Superhost</Typography>
                                    <h1 className="superhost_section2_text">Get free one-on-one help from Airbnb’s best Hosts</h1>
                                </div>
                            </div>
                        </div>
                        <div className="superhost_section2_rightSection">
                            <div className="superhost_section2_rightSection_container">
                                <video ref={vidRef} autoPlay muted onEnded={()=>setIsPlaying(false)} className="superhost_section2_video">
                                <source src="https://a0.muscache.com/v/c1/77/c1776f77-b7d6-568b-94f7-4ebb82c47fc9/c1776f77b7d6568b94f74ebb82c47fc9_4000k_1.mp4?imformat=h265" type="video/mp4; codecs=hevc" />
                                <source src="https://a0.muscache.com/v/c1/77/c1776f77-b7d6-568b-94f7-4ebb82c47fc9/c1776f77b7d6568b94f74ebb82c47fc9_4000k_1.mp4" type="video/mp4" />
                                </video>
                                <div className="superhost_section2_gradient"></div>
                                <div className="superhost_section2_rightSection_content">
                                    <div className="superhost_section2_text_container">
                                        <span className="superhost_section2_name_year">{name[counter]}</span>
                                        <span className="superhost_section2_dot"></span>
                                        <span className="superhost_section2_name_year">Hosting since {year[counter]}</span>
                                    </div>
                                </div>
                                <div className="superhost_section2_button">
                                    {isPlaying ? <IconButton onClick={handlePause} aria-label="pause" id="superhost_section2_play_pause"><PauseIcon /></IconButton>
                                    : <IconButton onClick={handlePlay} aria-label="play" id="superhost_section2_play_pause"><PlayArrowIcon /></IconButton>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="superhost_section3_container">
                        <div className="superhost_section3_content">
                            <div className="superhost_section3_text">
                                <div className="superhost_section3_heading">Personal tips <br />and guidance</div>
                                <div className="superhost_section3_body">We’ve matched you with an experienced Superhost to answer all of your questions, whenever works best for you.</div>
                            </div>
                            <div className="superhost_section3_text">
                                <div className="superhost_section3_heading">Hands-on help <br />listing your place</div>
                                <div className="superhost_section3_body">Your Superhost will help you create your listing and share advice for taking photos, describing your space, and more.</div>
                            </div>
                            <div className="superhost_section3_text">
                                <div className="superhost_section3_heading">Prep for your <br />first guest</div>
                                <div className="superhost_section3_body">You’ll get the support and direction you need to start welcoming guests and earn your first great review.</div>
                            </div>
                        </div>
                    </div>

                    <div className="superhost_section4_container">
                        <div className="superhost_section4_heading_container">
                            <h2 className="superhost_section4_heading">Your Superhost will be there every step of the way</h2>
                        </div>
                        <Grid>
                            <div className="superhost_section4_section">
                                <div className="superhost_section4_section">
                                    <div className="superhost_section4_bg">
                                        <img className="superhost_section4_image" src="https://a0.muscache.com/im/pictures/ed9358e5-6a01-41fb-b911-6c5e1af976b7.jpg?im_w=2560&amp;im_q=highq" />
                                    </div>
                                </div>
                                <div className="superhost_section4_content" style={{opacity: window.scrollY>2320 ? 0:1}}>
                                    <div className="superhost_section4_card">
                                        <div className="superhost_section4_card_content">
                                            <div className="superhost_section4_step">Step 1</div>
                                            <div className="superhost_section4_stepDesc">Meet your Superhost</div>
                                            <div className="superhost_section4_border"></div>
                                            <div className="superhost_section4_body">
                                                <div className="superhost_section4_profile_container">
                                                    <div className="superhost_section4_profile">
                                                        <img src="https://a0.muscache.com/im/pictures/cd4001c7-9526-48fd-a193-c7de7d73369f.jpg?im_w=240" className="superhost_section4_profileImg" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="superhost_section4_info">
                                                        <span className="superhost_section4_name">Imaan</span>
                                                        <span className="superhost_section4_time">10:21am</span>
                                                    </div>
                                                    <span className="superhost_section4_ans">Hi there! I love being a Host and am so excited to learn more about you and your place.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="superhost_section4_section">
                                <div className="superhost_section4_section">
                                    <div className="superhost_section4_bg">
                                        <img className="superhost_section4_image" src="https://a0.muscache.com/im/pictures/f6786475-e93f-411c-b2b9-5c29fe714050.jpg?im_w=2560&im_q=highq" />
                                    </div>
                                </div>
                                <div className="superhost_section4_content" style={{opacity: window.scrollY>3200 ? 0:1}}>
                                    <div className="superhost_section4_card">
                                        <div className="superhost_section4_card_content">
                                            <div className="superhost_section4_step">Step 2</div>
                                            <div className="superhost_section4_stepDesc">Get answers to any question, big or small</div>
                                            <div className="superhost_section4_border"></div>
                                            <div className="superhost_section4_body">
                                                <div className="superhost_section4_profile_container">
                                                    <div className="superhost_section4_profile">
                                                        <img src="https://a0.muscache.com/im/pictures/f82e594f-d7e2-4032-a021-9c15f490f42e.jpg?im_w=240" className="superhost_section4_profileImg" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="superhost_section4_info">
                                                        <span className="superhost_section4_name">Khun</span>
                                                        <span className="superhost_section4_time">3:45pm</span>
                                                    </div>
                                                    <span className="superhost_section4_ans">What happens if something breaks or gets damaged in my home? I’m a little nervous.</span>
                                                </div>
                                            </div>
                                            <div className="superhost_section4_body">
                                                <div className="superhost_section4_profile_container">
                                                    <div className="superhost_section4_profile">
                                                        <img src="https://a0.muscache.com/im/pictures/cd4001c7-9526-48fd-a193-c7de7d73369f.jpg?im_w=240" className="superhost_section4_profileImg" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="superhost_section4_info">
                                                        <span className="superhost_section4_name">Imaan</span>
                                                        <span className="superhost_section4_time">6:05pm</span>
                                                    </div>
                                                    <span className="superhost_section4_ans">My guests have always been very respectful, but there’s <a onClick={()=>navigate("/aircover")} style={{color: "black", borderRadius: 4,}}>AirCover</a> if accidents happen.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="superhost_section4_section3">
                                <div className="superhost_section4_section3">
                                    <div className="superhost_section4_bg">
                                    <img className="superhost_section4_image" src="https://a0.muscache.com/im/pictures/6d0abc93-c726-4f8b-8420-c41f67554567.jpg?im_w=2560&im_q=highq" />
                                    </div>
                                </div>
                                <div className="superhost_section4_content">
                                    <div className="superhost_section4_card">
                                        <div className="superhost_section4_card_content" style={{opacity: window.scrollY>4100 ? 0:1}}>
                                            <div className="superhost_section4_step">Step 3</div>
                                            <div className="superhost_section4_stepDesc">Confidently welcome your first guest</div>
                                            <div className="superhost_section4_border"></div>
                                            <div className="superhost_section4_body">
                                                <div className="superhost_section4_profile_container">
                                                    <div className="superhost_section4_profile">
                                                        <img src="https://a0.muscache.com/im/pictures/cd4001c7-9526-48fd-a193-c7de7d73369f.jpg?im_w=240" className="superhost_section4_profileImg" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="superhost_section4_info">
                                                        <span className="superhost_section4_name">Imaan</span>
                                                        <span className="superhost_section4_time">6:17pm</span>
                                                    </div>
                                                    <span className="superhost_section4_ans">Here’s a friendly reminder to leave a welcome note and local treat. Then you’re all set!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </div>

                    <div className="superhost_section5_container1">
                        <div className="superhost_section5_container2">
                            <div className="superhost_section5_content">
                                <h2 className="superhost_section5_heading">More ways to start Hosting</h2>
                                <p className="superhost_section5_text">No matter where you start, we have tips, videos, and guides for each step.</p>
                                <div className="superhost_section5_buttons">
                                    <Button variant="contained" onClick={()=>navigate("/hostYourHome")} id="superhost_section5_button1">Learn about hosting</Button>
                                    <Button variant="outlined" onClick={()=>navigate("/becomeHost")} id="superhost_section5_button2">Start listing your place</Button>
                                </div>
                            </div>
                            <div className="superhost_section5_carousel">
                                <div className="superhost_section5_body">
                                    <div className="superhost_section5_card1">
                                        <button className="superhost_section5_card2">
                                            <div className="superhost_section5_bg">
                                                <img src="https://a0.muscache.com/im/pictures/8491648e-838c-4cf4-a4da-6694e3190e5f.jpg" className="superhost_section5_image" />
                                            </div>
                                            <div className="superhost_section5_gradient"></div>
                                            <div className="superhost_section5_cardText">How to describe <br />your place</div>
                                            <div className="superhost_section5_play_container">
                                                <svg viewBox="0 0 32 32" className="superhost_section5_play"><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="superhost_section5_card1">
                                        <button className="superhost_section5_card2">
                                            <div className="superhost_section5_bg">
                                            <img src="https://a0.muscache.com/im/pictures/26068757-0744-435f-a8b7-8a9bf81fe27d.jpg" className="superhost_section5_image" />
                                            </div>
                                            <div className="superhost_section5_gradient"></div>
                                            <div className="superhost_section5_cardText">How to take <br />great photos</div>
                                            <div className="superhost_section5_play_container">
                                                <svg viewBox="0 0 32 32" className="superhost_section5_play" ><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="superhost_section5_card1">
                                        <button className="superhost_section5_card2">
                                            <div className="superhost_section5_bg">
                                            <img src="https://a0.muscache.com/im/pictures/d950dbfc-d571-4f51-881b-be3cf3e35cda.jpg" className="superhost_section5_image" />
                                            </div>
                                            <div className="superhost_section5_gradient"></div>
                                            <div className="superhost_section5_cardText">How to name <br />your place</div>
                                            <div className="superhost_section5_play_container">
                                                <svg viewBox="0 0 32 32" className="superhost_section5_play" ><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="superhost_section5_card1">
                                        <button className="superhost_section5_card2">
                                            <div className="superhost_section5_bg">
                                            <img src="https://a0.muscache.com/im/pictures/c64c6a3b-b5cb-430a-a5c9-7227d86fab94.jpg" className="superhost_section5_image" />
                                            </div>
                                            <div className="superhost_section5_gradient"></div>
                                            <div className="superhost_section5_cardText">How to set your <br />price</div>
                                            <div className="superhost_section5_play_container">
                                                <svg viewBox="0 0 32 32" className="superhost_section5_play" ><path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="superhost_section5_child"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Grid>
            </Grid>
        </Grid>
        <Footer />
        </>
    )
}

export default AskASuperhost;