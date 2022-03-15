import React, {useRef} from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
import { useSpring, animated } from "@react-spring/core";

const PopUp = (props) => {
    const modalRef = useRef();

    const closeModal = e => {
        if(modalRef.current === e.target){
            props.setIsOpen(false)
        }
        document.body.style.overflow = "unset"
    }

    { props.isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset" }

    // const animation = useSpring({
    //     config: {
    //         duration: 250,
    //     },
    //     transform: props.isOpen ?  `translateY(0%)` : `translateY(-100%)`,
    //     opacity: props.isOpen ? 1 : 0,
    // })

    return(
        <Grid>
            <div className="popup_banner"></div>
            <div className="popup_box" ref={modalRef} onClick={closeModal} >
                <div className="popup_div"></div>
                {/* <animated.div className="popup_on}> */}
                <div className="popup_section">
                    <div className="popup_close">
                        <IconButton onClick={props.handleClose} aria-label="close" id="popup_closeIcon"><CloseIcon /></IconButton>
                    </div>
                    <div className="popup_textSection">
                        <div className="popup_content">
                            <div className="popup_text">
                                <Typography id="popup_heading">How we estimate your earning potential</Typography>
                                <div className="popup_para">
                                    <p>We make a few simple assumptions and calculations to determine your earnings:</p>
                                    <ul className="popup_list">
                                        <li>If you have an entire place, we assume you can host four guests. If you’re listing a private room, we count that as two guests, and for a shared room, just one guest. You can change your selections in the drop-down menu at any time.</li>
                                        <br />
                                        <li>We take the median nightly price (before expenses, fees and taxes) based on booking data in your area from the last 12 months.</li>
                                        <br />
                                        <li>We then multiply that price by the total number of occupied nights to get the monthly earnings estimate. To estimate the number of nights that you might host, we look at how often others in your area are hosting.</li>
                                    </ul>
                                    Keep in mind that these are just estimates. How much you actually earn depends on a number of other factors such as your availability, price, acceptance and cancellation rates, any legal restrictions and demand in your area.
                                    <br />
                                    <br />
                                    Also, your ability to host may depend on the local laws in your area. <span className="popup_learnMore">Learn more</span>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </animated.div> */}
                <div className="popup_div"></div>
            </div>
            <div className="popup_div"></div>
        </Grid>
    )
}

export default PopUp;