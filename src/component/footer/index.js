import React from "react";
import "./styles.css";
import { Button, Grid, Icon, Typography } from "@mui/material";
import FooterLinks from "../../content/footer";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
      <>
        <Grid container className="footer_container">
          <FooterColumn data={FooterLinks} />
          <Grid id="footer_banner">
            <div id="footer_bottom-min">
              <Grid item id="footer_right">
                <Grid id="footer_options">
                  <div id="footer_english">
                    <span style={{marginRight: 8}}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: 16, width: 16, fill: "currentcolor"}}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>                    </span>
                    English (IN)
                  </div>
                  <Typography id="footer_inr">₹  INR</Typography>
                </Grid>
                <Grid id="footer_icons">
                  <ul id="footer_media">
                    <li id="footer_facebook">
                      <a
                        href="https://www.facebook.com/AirbnbIndia"
                        target="_blank"
                        rel = "noopener noreferrer"
                        id="footer_icon"                      >
                        <FacebookIcon fontSize="medium" />
                      </a>
                    </li>
                    <li id="footer_twitter">
                      <a
                        href="https://twitter.com/airbnb_in"
                        target="_blank"
                        rel = "noopener noreferrer"
                        id="footer_icon"                      >
                        <TwitterIcon fontSize="medium" />
                      </a>
                    </li>
                    <li id="footer_instagram">
                      <a
                        href="https://instagram.com/airbnb"
                        target="_blank"
                        rel = "noopener noreferrer"
                        id="footer_icon"
                      >
                        <InstagramIcon fontSize="medium" />
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <div id="footer_leftParent">
                <Grid item id="footer_left">
                  <Typography id="footer_leftText">
                    © 2022 Airbnb, Inc.
                  </Typography>
                  <Grid item style={{display: "flex", marginLeft: -19}}>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Privacy</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Terms</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Sitemap</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Company Details</Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div id="footer_bottom-middle">
              <Grid item id="footer_right">
                <Grid id="footer_options">
                  <div id="footer_english">
                    <span style={{marginRight: 8}}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: 16, width: 16, fill: "currentcolor"}}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>                    </span>
                    English (IN)
                  </div>
                  <Typography id="footer_inr">₹  INR</Typography>
                </Grid>
                <Grid id="footer_icons">
                  <ul id="footer_media">
                    <li id="footer_facebook">
                      <a
                        href="https://www.facebook.com/AirbnbIndia"
                        target="_blank"
                        rel = "noopener noreferrer"
                        id="footer_icon"                      >
                        <FacebookIcon fontSize="medium" />
                      </a>
                    </li>
                    <li id="footer_twitter">
                      <a
                        href="https://twitter.com/airbnb_in"
                        target="_blank"
                        rel = "noopener noreferrer"
                        id="footer_icon"                      >
                        <TwitterIcon fontSize="medium" />
                      </a>
                    </li>
                    <li id="footer_instagram">
                      <a
                        href="https://instagram.com/airbnb"
                        target="_blank"
                        rel = "noopener noreferrer"
                        id="footer_icon"
                      >
                        <InstagramIcon fontSize="medium" />
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <div style={{display: "flex", justifyContent: "center"}}>
                <Grid item id="footer_left">
                  <Typography id="footer_leftText">
                    © 2022 Airbnb, Inc.
                  </Typography>
                  <Grid item style={{display: "flex", marginLeft: -19}}>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Privacy</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Terms</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Sitemap</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Company Details</Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div id="footer_bottom-max">                
                <Grid item id="footer_left">
                  <Typography id="footer_leftText">
                    © 2022 Airbnb, Inc.
                  </Typography>
                  <Grid item style={{display: "flex", marginLeft: -19}}>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Privacy</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Terms</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Sitemap</Typography>
                    <Typography id="footer_break">·</Typography>
                    <Typography id="footer_listText">Company Details</Typography>
                  </Grid>
                </Grid>
                <Grid item id="footer_right">
                  <Grid id="footer_options">
                    <div id="footer_english">
                      <span style={{marginRight: 8}}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: 16, width: 16, fill: "currentcolor"}}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>                    </span>
                      English (IN)
                    </div>
                    <Typography id="footer_inr">₹  INR</Typography>
                  </Grid>
                  <Grid id="footer_icons">
                    <ul id="footer_media">
                      <li id="footer_facebook">
                        <a
                          href="https://www.facebook.com/AirbnbIndia"
                          target="_blank"
                          rel = "noopener noreferrer"
                          id="footer_icon"                      >
                          <FacebookIcon fontSize="medium" />
                        </a>
                      </li>
                      <li id="footer_twitter">
                        <a
                          href="https://twitter.com/airbnb_in"
                          target="_blank"
                          rel = "noopener noreferrer"
                          id="footer_icon"                      >
                          <TwitterIcon fontSize="medium" />
                        </a>
                      </li>
                      <li id="footer_instagram">
                        <a
                          href="https://instagram.com/airbnb"
                          target="_blank"
                          rel = "noopener noreferrer"
                          id="footer_icon"
                        >
                          <InstagramIcon fontSize="medium" />
                        </a>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
            </div>
          </Grid>
        </Grid>
      </>
    );
}

const FooterColumn = (props) => {
    return(
        <>
            <div id="footer_content">
                <section id="footer_column">
                    <RenderComponent data={props.data.support} />
                </section>
                <section id="footer_column">
                    <RenderComponent data={props.data.community} />
                </section>
                <section id="footer_column">
                    <RenderComponent data={props.data.hosting} />
                </section>
                <section id="footer_column">
                    <RenderComponent data={props.data.about} />
                </section>
            </div>
        </>
    )
}

const RenderComponent = (props) => {
    return(
        <>
            <div>
                <Typography id="footer_title">{props.data.title}</Typography>
            </div>
            <ul id="footer_links">
            {props.data.content.map((item,index)=>{
                return(
                  <li key={index} id="footer_element"><Typography id="footer_item">{item}</Typography></li>
                )
            })}
            </ul>
        </>
    )
}

export default Footer;