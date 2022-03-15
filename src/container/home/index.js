import React from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import "./home.css";
import {Grid, Typography, Button} from "@mui/material";
import PictureCard from "../../component/pictureCard"
import {useNavigate} from "react-router-dom"

function Home() {

    const navigate = useNavigate();

    return(
        <>
        <Header />
        <Grid>
            <div>
                <div className="home_section1_container">
                    <div className="home_section1_parent1">
                        <div className="home_section1_parent2">
                            <div className="home_section1_parent3">
                                <div className="home_section1_parent4">
                                    <div className="home_section1_pictureContainer">
                                        <div className="home_section1_pictureStyle">
                                            <picture>
                                                <source srcset="https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_q=highq&amp;im_w=1920 1x, https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_q=highq&amp;im_w=2560 2x" media="(min-width: 2080px)" />
                                                <source srcset="https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_w=1200 1x, https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_w=2560 2x" media="(min-width: 1440px)" />
                                                <source srcset="https://a0.muscache.com/im/pictures/644d9a47-e28c-4857-ad7b-2dc191cb3507.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/644d9a47-e28c-4857-ad7b-2dc191cb3507.jpg?im_w=1920 2x" media="(min-width: 1128px)" />
                                                <source srcset="https://a0.muscache.com/im/pictures/6dbfc87a-22a4-4d4a-b352-99aa93a98e78.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/6dbfc87a-22a4-4d4a-b352-99aa93a98e78.jpg?im_w=1440 2x" media="(min-width: 744px)" />
                                                <source srcset="https://a0.muscache.com/im/pictures/ac6ab9ee-7b70-42e9-a57d-a967ab6e2ef1.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/ac6ab9ee-7b70-42e9-a57d-a967ab6e2ef1.jpg?im_w=720 2x" media="(min-width: 375px)" />
                                                <source srcset="https://a0.muscache.com/im/pictures/52036958-54a4-4aa5-acb2-ebb123617253.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/52036958-54a4-4aa5-acb2-ebb123617253.jpg?im_w=720 2x" />
                                                <img className="home_section1_image" src="https://a0.muscache.com/im/pictures/6dbfc87a-22a4-4d4a-b352-99aa93a98e78.jpg?im_w=1440" />
                                            </picture>                                                
                                        </div>
                                    </div>
                                    <div className="home_section1_textContainer1">
                                        <div className="home_section1_textContainer2">
                                            <div className="home_section1_textContainer3">
                                                <div className="home_section1_textContainer4">
                                                    <div className="home_section1_textContainer5">
                                                        <div className="home_section1_textContainer6">
                                                            <h2 style={{margin: 0}}>
                                                                <div className="home_section1_textStyle">
                                                                    <p className="home_section1_text">Not sure where to go? Perfect.</p>
                                                                </div>
                                                            </h2>
                                                            <div className="home_section1_buttonStyle">
                                                                <button variant="contained" className="home_section1_button">I'm flexible</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="home_section2_container">
                    <div className="home_section2_heading">
                        <Typography variant="h4" id="home_section2_text">Inspiration for your next trip</Typography>
                    </div>
                    <div className="home_section2_content">
                        <div className="home_section2_grid">
                            <div>
                                <PictureCard url="https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_q=highq&im_w=720" title="Lonavla" description="66 kilometres away" color="#bc1a6e" />
                            </div>
                            <div>
                                <PictureCard url="https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_q=highq&im_w=720" title="Calangute" description="396 kilometres away" color="#cc2d4a" />
                            </div>
                            <div>
                                <PictureCard url="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_q=highq&im_w=720" title="Alibag" description="36 kilometres away" color="rgb(222, 49, 81)" />
                            </div>
                            <div>
                                <PictureCard url="https://a0.muscache.com/im/pictures/3836379f-169d-4259-8c08-a6cb50461903.jpg?im_q=highq&im_w=720" title="Karjat" description="53 kilometres away" color="rgb(217, 59, 48)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="home_section3_container">
                    <div className="home_section3_heading">
                        <Typography variant="h4" id="home_section3_text">Discover Airbnb Experiences</Typography>
                    </div>
                    <div className="home_section3_content">
                    <div className="home_section3_grid">
                        <div className="home_section3_card">
                            <div className="home_section3_image_container">
                                <div className="home_section3_image_style">
                                    <picture>
                                        <source srcset="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=1920 2x" media="(min-width: 2080px)" />
                                        <source srcset="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=1200 2x" media="(min-width: 1440px)" />
                                        <source srcset="https://a0.muscache.com/im/pictures/0dcae177-2f65-4a15-b9e8-75d8c9b3cbe8.jpg?im_w=480 1x, https://a0.muscache.com/im/pictures/0dcae177-2f65-4a15-b9e8-75d8c9b3cbe8.jpg?im_w=960 2x" media="(min-width: 1128px)" />
                                        <source srcset="https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg?im_w=720 2x" media="(min-width: 744px)" />
                                        <source srcset="https://a0.muscache.com/im/pictures/8f0847aa-9c7e-4371-990c-84987b61f7f7.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/8f0847aa-9c7e-4371-990c-84987b61f7f7.jpg?im_w=720 2x" media="(min-width: 375px)" />
                                        <source srcset="https://a0.muscache.com/im/pictures/0947f1e4-a6a9-4514-8b78-9e47ea797631.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/0947f1e4-a6a9-4514-8b78-9e47ea797631.jpg?im_w=720 2x" />
                                        <img className="home_section3_image" src="https://a0.muscache.com/im/pictures/0dcae177-2f65-4a15-b9e8-75d8c9b3cbe8.jpg?im_w=960"></img>
                                    </picture>
                                </div>
                            </div>
                            <div className="home_section3_text_container1">
                                <div className="home_section3_text_container2">
                                    <div className="home_section3_text_container3">
                                    <div className="home_section3_text_container4">
                                    <div className="home_section3_text_container5">
                                        <Typography id="home_section3_card_text">Things to do<br />on your trip</Typography>
                                        <Button variant="contained" id="home_section3_card_button">Experiences</Button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home_section3_card">
                            <div className="home_section3_image_container">
                                <div className="home_section3_image_style">
                                    <img className="home_section3_image" src="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=960"></img>
                                </div>
                            </div>
                            <div className="home_section3_text_container1">
                                <div className="home_section3_text_container2">
                                <div className="home_section3_text_container3">
                                    <div className="home_section3_text_container4">
                                    <div className="home_section3_text_container5">
                                        <Typography variant="h3" id="home_section3_card_text">Things to do<br />from home</Typography>
                                        <Button variant="contained" id="home_section3_card_button">Online Experiences</Button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="home_section4_container1">
                    <div className="home_section4_container2">
                        <div className="home_section4_container3">
                            <div className="home_section4_container4">
                                <div className="home_section4_content">
                                    <div className="home_section4_image_container">
                                        <div className="home_section4_image_style">
                                            <img className="home_section4_image" src="https://a0.muscache.com/im/pictures/83f0dc6f-9290-46f6-9db5-339d525b44d1.jpg?im_w=960" />
                                        </div>
                                    </div>
                                    <div className="home_section4_text_container1">
                                        <div className="home_section4_text_container2">
                                            <div className="home_section4_text_container3">
                                                <div className="home_section4_text_container4">
                                                    <div className="home_section4_text_container5">
                                                        <div className="home_section4_text_container6">
                                                            <div className="home_section4_text_style">
                                                                <Typography id="home_section4_text">Questions<br />about<br />hosting?</Typography>
                                                            </div>
                                                        </div>
                                                        <div className="home_section4_button_container">
                                                            <div className="home_section4_button_style">
                                                                <Button variant="contained" onClick={()=>navigate("/askASuperhost")} id="home_section4_button">Ask a Superhost</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="last_home_section_wrapper"></div>
            </div>

        </Grid>
        <Footer />
        </>
    )
}

export default Home;