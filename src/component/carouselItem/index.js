import React from "react";
import { Grid,  Typography } from "@mui/material";
import "./styles.css";


const CarouselItem = (props) => {
    return(
        <div className="carouselItem_container" >
            <div style={{paddingRight: 18}}>
                <div className="carouselItem_top">
                    <div className="carouselItem_hostphoto">
                        <div className="carouselItem_hostphotogrid">
                            <img importance="low" loading="lazy" src={props.host_img} className="carouselItem_image" />
                            <div className="carouselItem_background"></div>
                        </div>
                    </div>
                    <button className="carouselItem_button"></button>
                </div>
                <div className="carouselItem_bottom">
                    <Typography id="carouselItem_text">{props.content}</Typography>
                    <div>
                        <div className="carouselItem_signature">
                            <img importance="low" loading="lazy" src={props.sign_img} className="carouselItem_sign_img" />
                        </div>
                    </div>
                    <Typography id="carouselItem_location">Host in {props.location}</Typography>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem;
