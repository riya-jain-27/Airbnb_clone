import React, { useEffect, useState } from "react";
import { Button, Grid, Tab, Tabs, IconButton, Hidden, getCardMediaUtilityClass} from "@mui/material";
import "./styles.css";
import Footer from "../../component/footer";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import * as actionTypes from "../../redux/actiontypes";
import { color } from "@mui/system";

const Flexible = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [category, setCategory] = useState("farms");
  const [tab, setTab] = useState("Farms");
  
  useEffect(()=>{
    getCardData()
  },[])

  const cards = useSelector((store)=> {return store.cards})
  const cardCategories = ["farms", "beachfront", "amazing pools", "offbeat"]
  const tabCategories = ["Farms", "Beachfront",  "Amazing pools", "Offbeat", "Cabins", "Tiny homes", "Treehouses", "A-frames", "Containers", "Castles", "Cycladic homes", "Domes", "Islands", "Luxe", "Houseboats", "Kezhans", "Off-the-grid", "Barns", "Ryokans", "Yurts", "Campervans", "Trulli", "Boats", "Ski-in/Ski-out"]
  const icons = ["https://a0.muscache.com/pictures/373869d1-31bb-4a47-95d9-ccd5e478b715.jpg",
                 "https://a0.muscache.com/pictures/483c0cae-5bfe-45b3-b4e4-8697253b2875.jpg",
                 "https://a0.muscache.com/pictures/ea71f998-267a-4ffd-9ca8-ee70814dd775.jpg",
                 "https://a0.muscache.com/pictures/62a57a75-2906-463f-ad3d-e5beed43b3aa.jpg",
                 "https://a0.muscache.com/pictures/ddab88e4-da9d-4e7c-8af8-165507476572.jpg",
                 "https://a0.muscache.com/pictures/c54d41c5-c279-442f-9ec3-afbc1c5104cb.jpg",
                 "https://a0.muscache.com/pictures/ac09b78a-19c0-46fc-b604-fc90a8912864.jpg",
                 "https://a0.muscache.com/pictures/2f4996be-1e1d-4e34-b966-e5d381b3f438.jpg",
                 "https://a0.muscache.com/pictures/95f799e1-079a-4fd0-ad2e-ba240c92457e.jpg",
                 "https://a0.muscache.com/pictures/8565b4ea-91f1-403a-86cb-ba3f676968e3.jpg",
                 "https://a0.muscache.com/pictures/ff7a78db-3fcf-4707-86de-8a4eb3096c82.jpg",
                 "https://a0.muscache.com/pictures/8548edf5-3e60-4b72-b597-c05ce24673c7.jpg",
                 "https://a0.muscache.com/pictures/4f1d6994-4898-4b2c-9186-a5f7f59eebf6.jpg",
                 "https://a0.muscache.com/pictures/dfe265d9-06b5-48f5-ad2d-0fa6be296069.jpg",
                 "https://a0.muscache.com/pictures/f30562b6-2382-41a0-bf3e-28bf97fbe68a.jpg",
                 "https://a0.muscache.com/pictures/e7b107e1-f59d-4caa-b77c-2f19579dfd58.jpg",
                 "https://a0.muscache.com/pictures/565d2b91-07d8-43bb-b593-abe9c025e7eb.jpg",
                 "https://a0.muscache.com/pictures/e40acf5d-4fb0-4e22-9fbf-9dbb3426cf53.jpg",
                 "https://a0.muscache.com/pictures/bee64a5a-5246-4bdb-8500-42b0c3e74e87.jpg",
                 "https://a0.muscache.com/pictures/7afe7c96-f4df-4c0f-b6c6-42ae2ceafb33.jpg",
                 "https://a0.muscache.com/pictures/bfc3ca12-f96b-4595-9402-51611f7aa429.jpg",
                 "https://a0.muscache.com/pictures/7e4d48c9-f118-4b90-82e1-cdcc1dfa9688.jpg",
                 "https://a0.muscache.com/pictures/5971ffd9-2897-4bb0-8ad6-a641690ffaba.jpg",
                 "https://a0.muscache.com/pictures/5c82b8cb-6e67-4ea9-9ec7-1ba2c5b3bce6.jpg"]

  const getCardData = async () => {
    try{
      const response = await axios.get("http://localhost:8005/flexible/cards")
      dispatch({type: actionTypes.STORE_CARDS, payload: response.data})
    }catch(err){
      console.log(err);
    }
  }

  return(
    <>
      <Grid className="flexible_header">
        <div className="flexible_content">
          <div className="flexible_left">
            <div>
              <a href="/home" className="flexible_airbnb_logo">
                <div className="flexible_logo_text_container">
                  <svg width="120px" height="32px" fill="currentcolor" style={{display: "block"}}><path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z"></path></svg>
                </div>
                <div className="flexible_logo_container">
                  <svg width="30px" height="32px" fill="currentcolor" style={{display: "block"}}><path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"></path></svg>
                </div>
              </a>
            </div>
          </div>

          <div className="flexible_middle"></div>

          <div className="flexible_right">
            <div>
              <nav className="flexible_navbar">
                <div className="flexible_nav_buttons">
                  <Button onClick={()=>navigate("/hostYourHome")} id="flexible_become_a_host">Become a host</Button>
                  <div className="flexible_globe_container">
                    <Button id="flexible_become_a_host">
                      <div className="flexible_globe_1">
                        <div className="flexible_globe_2">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: 16, width: 16, fill: "currentcolor"}}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flexible_nav_options">
                  <button onClick={()=>setProfileOpen(!isProfileOpen)} className="flexible_profile_button">
                    <div className="flexible_bar">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 3, overflow: "visible"}}><g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
                    </div>
                    <div className="flexible_profile">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "100%", width: "100%", fill: "currentcolor"}}><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
                    </div>
                  </button>
                  {isProfileOpen ? ( 
                    <div className="flexible_option_list">
                      <div>
                        <a href="" className="flexible_list_link">
                          <div className="flexible_list_text">Host your home</div>
                        </a>
                        <a href="" className="flexible_list_link">
                          <div className="flexible_list_text">Host an experience</div>
                        </a>
                        <a href="" className="flexible_list_link">
                          <div className="flexible_list_text">Help</div>
                        </a>
                        <a href="" className="flexible_list_link">
                          <div className="flexible_list_text">Log out</div>
                        </a>
                      </div>
                    </div> ) : (null)
                  }
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Grid>

      <nav className="flexible_navbar_container1">
        <div className="flexible_navbar_container2">
          <div className="flexible_navbar_contents">
            <div className="flexible_navbar_flexbox">
                <div className="flexible_navbar_tabs_section">
                    <div className="flexible_navbar_tabs_section_2">
                        <div className="flexible_navbar_flexbox_content">
  
                          {tabCategories.map((item,index) => {
                            return(
                              <div key={index} style={{position: "relative", borderBottom: tab==item ? "3px solid rgb(34,34,34)" : null}}>
                                <button onClick={()=> setTab(item)} style={{color: tab==item ? "rgb(34,34,34)" : "rgb(113, 113, 113)"}}  className="flexible_navbar_tab_item">
                                  <div className="flexible_navbar_tab_item_content">
                                    {tab==item ? 
                                    (<div className="flexible_navbar_tab_item_iconContainer">
                                      <img className="flexible_navbar_tab_item_icon" alt="" src={icons[index]}></img>
                                    </div>) : null}
                                    <div className="flexible_navbar_tab_item_text">{item}</div>
                                  </div>
                                </button>
                              </div>
                            )
                          })}
                           
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </nav>

      <div style={{display: "contents"}}>
        <main className="flexible_main_container1">
          <div className="flexible_main_container2">
            <div className="flexible_main_container3">
              <div className="flexible_main_container4">
                <div className="flexible_page_container">
                  <div className="flexible_page_section">
                    <div className="flexible_page_content">
                      <div className="flexible_page_grid">
                        
                        {cards.map((val,index) => {
                            {if (val.category==cardCategories[(tabCategories.indexOf(tab))%4])
                              {return(
                              <div className="flexible_card_container1">
                                <div className="flexible_card_container2">
                                  <div>
                                    <div className="flexible_card_container3">

                                      <div className="flexible_card_part1">
                                        <div className="flexible_part1_container">
                                          
                                          <div className="flexible_card_content1">
                                            <div className="flexible_card_content2">
                                              <div className="flexible_card_content3">
                                                <span>
                                                  <div className="flexible_card_imgContainer1">
                                                    <div className="flexible_card_imgContainer2">
                                                      <div className="flexible_card_imgContainer3">
                                                        <div role="img" className="flexible_image_container">
                                                          <picture>
                                                            <source srcSet={val.url} media="(max-width: 743px)" />
                                                            <source srcSet={val.url} media="(min-width: 743.1px) and (max-width: 1127px)" />
                                                            <source srcSet={val.url} media="(min-width: 1127.1px) and (max-width: 1439px)" />
                                                            <img className="flexible_card_image" aria-hidden="true" alt="Image 4" elementtiming="LCP-target" src={val.url} /> 
                                                          </picture>
                                                          <div className="flexible_card_background"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
                                                <div className="flexible_carousel_scroll1">
                                                  <div className="flexible_carousel_scroll2">
                                                    <div className="flexible_carousel_dots">
                                                      <div className="flexible_scroll_dots">
                                                        <span className="flexible_card_activeDot"></span>
                                                        <span className="flexible_card_dot"></span>
                                                        <span className="flexible_card_dot"></span>
                                                        <span className="flexible_card_dot"></span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="flexible_card_grid">
                                            <div className="flexible_card_grid1">
                                              <div></div>
                                              <div className="flexible_favourite_button">
                                                <button className="flexible_card_favourite">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="flexible_card_heart"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
                                                </button>
                                              </div>
                                            </div>

                                            <div className="flexible_card_grid2">
                                              <div className="flexible_card_prev">
                                                <button className="flexible_card_button">
                                                  <span>
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="flexible_card_arrow"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                                                  </span>
                                                </button>
                                              </div>
                                              <div className="flexible_card_next">
                                                <button className="flexible_card_button">
                                                  <span>
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="flexible_card_arrow"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
                                                  </span>
                                                </button>
                                              </div>
                                            </div>

                                            <div className="flexible_card_grid3"></div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flexible_card_part2">
                                        <div>
                                          <div className="flexible_location_container">
                                            <span className="flexible_card_location">
                                              {val.location}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="flexible_price_container1">
                                          <div>
                                            <div className="flexible_price_container2">
                                              <div className="flexible_price_container3">
                                                <div className="flexible_card_price">
                                                  <span>₹{val.price}</span>
                                                  <span> / night</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flexible_card_part3">
                                        <div>
                                          <div className="flexible_card_distance">
                                            {val.distance} kilometers away
                                          </div>
                                        </div>                                  
                                        <div className="flexible_card_date">
                                          {val.date}
                                        </div>                                  
                                      </div>
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                              )}
                            }
                        })}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Flexible;