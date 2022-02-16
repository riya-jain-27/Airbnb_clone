import React from "react";
import styles from "./styles"
import { Button, Grid, Icon, Typography } from "@mui/material";
import FooterLinks from "../../content/footer";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
      <>
        <Grid container style={styles.root}>
          <FooterColumn data={FooterLinks} />
          <Grid style={styles.banner}>
            <Grid justifyItems={"space-between"} style={styles.info}>
              <Grid item style={styles.left}>
                <Typography style={styles.leftText}>
                  © 2022 Airbnb, Inc.
                </Typography>
                <Grid item style={{ display: "flex" }}>
                  <Typography style={styles.break}>·</Typography>
                  <Typography style={styles.leftText}>Privacy</Typography>
                  <Typography style={styles.break}>·</Typography>
                  <Typography style={styles.leftText}>Terms</Typography>
                  <Typography style={styles.break}>·</Typography>
                  <Typography style={styles.leftText}>Sitemap</Typography>
                  <Typography style={styles.break}>·</Typography>
                  <Typography style={styles.leftText}>Company Details</Typography>
                </Grid>
              </Grid>
              <Grid item style={styles.right}>
                <Grid style={styles.options}>
                  <Typography style={styles.english}>English (IN)</Typography>
                  <Typography style={styles.inr}>₹ INR</Typography>
                </Grid>
                <Grid style={styles.icons}>
                  <ul style={styles.media}>
                    <li style={styles.facebook}>
                      <a
                        href="https://www.facebook.com/AirbnbIndia"
                        target="_blank"
                        rel = "noopener noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <FacebookIcon fontSize="medium" />
                      </a>
                    </li>
                    <li style={styles.twitter}>
                      <a
                        href="https://twitter.com/airbnb_in"
                        target="_blank"
                        rel = "noopener noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <TwitterIcon fontSize="medium" />
                      </a>
                    </li>
                    <li style={styles.instagram}>
                      <a
                        href="https://instagram.com/airbnb"
                        target="_blank"
                        rel = "noopener noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <InstagramIcon fontSize="medium" />
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
}

const FooterColumn = (props) => {
    return(
        <>
            <Grid container style={styles.content}>
                <Grid item md={3} style={styles.column}>
                    <RenderComponent data={props.data.support} />
                </Grid>
                <Grid item md={3} style={styles.column}>
                    <RenderComponent data={props.data.community} />
                </Grid>
                <Grid item md={3} style={styles.column}>
                    <RenderComponent data={props.data.hosting} />
                </Grid>
                <Grid item md={3} style={styles.column}>
                    <RenderComponent data={props.data.about} />
                </Grid>
            </Grid>
        </>
    )
}

const RenderComponent = (props) => {
    return(
        <>
        <Grid>
            <Grid>
                <Typography style={styles.title}>{props.data.title}</Typography>
            </Grid>
            {props.data.content.map((item,index)=>{
                return(
                    <Grid key={index}>
                        <Typography style={styles.element}>{item}</Typography>
                    </Grid>
                )
            })}
        </Grid>
        </>
    )
}

export default Footer;