import React from "react";
import { Grid,  Typography } from "@mui/material";
import styles from "./styles";


const CarouselItem = (props) => {
    return(
        <Grid style={styles.container}>
            <Grid style={{paddingRight: 18}}>
                <button style={styles.top}>
                    <Grid style={styles.hostphoto}>
                        <Grid style={styles.hostphotogrid}>
                            <img importance="low" loading="lazy" src={props.host_img} style={styles.image} />
                            <Grid style={styles.background}></Grid>
                        </Grid>
                    </Grid>
                </button>
                <Grid style={styles.bottom}>
                    <Typography style={styles.text}>{props.content}</Typography>
                    <Grid>
                        <Grid style={styles.signature}>
                            <img importance="low" loading="lazy" src={props.sign_img} style={styles.sign_img} />
                        </Grid>
                    </Grid>
                    <Typography style={styles.location}>Host in {props.location}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CarouselItem;
