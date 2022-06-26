import React, {useState} from "react";
import Footer from "../../component/footer";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AirCover = () => {
    const [ans1,setAns1] = useState(false);
    const [ans2,setAns2] = useState(false);
    const [ans3,setAns3] = useState(false);
    const [ans4,setAns4] = useState(false);
    const [ans5,setAns5] = useState(false);
    const [ans6,setAns6] = useState(false);
    const [ans7,setAns7] = useState(false);

    const navigate = useNavigate();
    
    return(
        <>
        <div className="aircover_header_container">
            <nav className="aircover_header_navbar">
                <div className="aircover_header_padding">
                    <div className="aircover_header_content">
                        <div onClick={()=>navigate("/home")} className="aircover_header_logo_container">
                            <svg viewBox="0 0 1000 1000" role="img" className="aircover_header_logo"><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
                        </div>
                        <Button onClick={()=>navigate("/hostYourHome")} id="aircover_header_button">Try hosting</Button>
                    </div>
                </div>
            </nav>
        </div>

        <Grid>
            <div className="aircover_section1_container">
                <div className="aircover_section1_bg">
                    <picture>
                        <source media="(min-width: 744px)" srcSet="https://a0.muscache.com/pictures/9453c80d-cbae-487e-9837-e4e3069a9224.jpg" />
                        <source media="(max-width: 743px)" srcSet="https://a0.muscache.com/im/pictures/d172d5be-2f2d-4ab7-b101-fa6c71552b82.jpg?im_w=1440&amp;im_q=highq" />
                        <img className="aircover_section1_img" src="https://a0.muscache.com/pictures/9453c80d-cbae-487e-9837-e4e3069a9224.jpg" />
                    </picture>
                </div>
                <div className="aircover_section1_content">
                    <h1 className="aircover_section1_logoPic">
                        <div className="aircover_section1_logo_container1">
                            <img className="aircover_section1_logo1" src="https://a0.muscache.com/pictures/9781fce6-a68d-4917-b5ce-f8b0294c96b7.jpg" />
                        </div>
                        <div className="aircover_section1_logo_container2">
                            <img className="aircover_section1_logo2" src="https://a0.muscache.com/pictures/001c0cf5-d83a-4346-a2fb-006cd0520eda.jpg" />
                        </div>
                    </h1>
                    <h2 className="aircover_section1_text">Top-to-bottom protection. <br />Free for every Host. Only on Airbnb.</h2>
                </div>
            </div>

            <div className="aircover_section2_container">
                <div className="aircover_section2_content">
                    <div className="aircover_section2_items">
                        <div className="aircover_section2_text">
                            <h2 className="aircover_section2_heading">$1m USD liability insurance</h2>
                            <p className="aircover_section2_body">You’re protected – even in the rare event that a guest is hurt.</p>
                        </div>
                        <div className="aircover_section2_text">
                            <h2 className="aircover_section2_heading">$1m damage protection</h2>
                            <p className="aircover_section2_body">We cover damage by guests to your space and belongings, including valuables.</p>
                        </div>
                        <div className="aircover_section2_text">
                            <h2 className="aircover_section2_heading">Pet-damage protection</h2>
                            <p className="aircover_section2_body">Not to worry: unexpected damage caused by four-legged guests is covered.</p>
                        </div>
                        <div className="aircover_section2_text">
                            <h2 className="aircover_section2_heading">Deep-cleaning protection</h2>
                            <p className="aircover_section2_body">We compensate you for unexpected cleaning costs.</p>
                        </div>
                        <div className="aircover_section2_text">
                            <h2 className="aircover_section2_heading">Income-loss protection</h2>
                            <p className="aircover_section2_body">Airbnb reimburses lost income if you cancel confirmed bookings due to damage.</p>
                        </div>
                        <div className="aircover_section2_text">
                            <h2 className="aircover_section2_heading">14-day filing window</h2>
                            <p className="aircover_section2_body">You have 14 days to report damage – even if you’re booked back-to-back.</p>
                        </div>
                        <div className="aircover_section2_text2">
                            <h2 className="aircover_section2_heading">Quicker reimbursements</h2>
                            <p className="aircover_section2_body">Hosts get faster reimbursements for guest damages (9 days on average).</p>
                        </div>
                        <div className="aircover_section2_text2">
                            <h2 className="aircover_section2_heading">Faster track for Superhosts</h2>
                            <p className="aircover_section2_body">Superhosts get access to a dedicated support line with priority routing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Grid> 
                <div className="aircover_section3_container">
                    <div className="aircover_section3_content">
                        <div className="aircover_section3_text">
                            <h2 className="aircover_section3_heading">Only Airbnb gives you AirCover</h2>
                        </div>
                        <table className="aircover_section3_table">
                            <thead>
                                <tr className="aircover_section3_headRow">
                                    <th className="aircover_section3_head"></th>
                                    <th className="aircover_section3_head">Airbnb</th>
                                    <th className="aircover_section3_head">Competitors</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="aircover_section3_row">
                                    <th className="aircover_section3_item">$1m USD liability insurance</th>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="aircover_section3_row">
                                    <th className="aircover_section3_item">$1m damage protection</th>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_cross"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="aircover_section3_row">
                                    <th className="aircover_section3_item">Pet-damage protection</th>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_cross"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="aircover_section3_row">
                                    <th className="aircover_section3_item">Deep-cleaning protection</th>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_cross"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="aircover_section3_row">
                                    <th className="aircover_section3_item">Income-loss protection</th>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_cross"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="aircover_section3_row">
                                    <th className="aircover_section3_item">14-day filing window</th>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="aircover_section3_row">
                                    <th className="aircover_section3_item">Quicker reimbursements</th>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_cross"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="aircover_section3_row">
                                    <th className="aircover_section3_item">Faster track for Superhosts</th>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_tick"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                        </div>
                                    </td>
                                    <td className="aircover_section3_column">
                                        <div className="aircover_section3_sign">
                                            <svg viewBox="0 0 32 32" className="aircover_section3_cross"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="aircover_section3_bottom">AirCover benefits compared to those offered for free by our top competitors.</div>
                    </div>
                </div>
            </Grid>

            <Grid>
                <div className="aircover_section4_container">
                    <div className="aircover_section4_text">Always included and always free whenever you host.</div>
                    <div className="aircover_section4_bg1">
                        <img className="aircover_section4_img1" src="https://a0.muscache.com/im/pictures/3cdb2598-6ab7-498e-9368-8c5c88869d16.jpg?im_w=960&im_q=highq" />
                    </div>
                    <div className="aircover_section4_bg2">
                        <img className="aircover_section4_img2" src="https://a0.muscache.com/im/pictures/be366e4c-bcce-4c8a-8f0f-03a36eb42a60.jpg?im_w=1920&im_q=highq" />
                    </div>
                </div>
            </Grid>

            <Grid>
                <div className="aircover_section5_container1">
                    <div className="aircover_section5_container2">
                        <div className="aircover_section5_content">
                            <div className="aircover_section5_top">
                                <h2 className="aircover_section5_heading">Your questions, answered</h2>
                                <div className="aircover_section5_text">Can’t find what you’re looking for? <br />Visit our <a href="/help" className="aircover_section5_help">Help Centre</a></div>
                            </div>
                            <div className="aircover_section5_tabs">
                                <div>
                                    <div className="aircover_section5_tab">
                                        <div onClick={()=>setAns1(!ans1)} className="aircover_section5_tabContent">
                                            <div className="aircover_section5_tabText">
                                                <div className="aircover_section5_quesContainer">
                                                    <div className="aircover_section5_ques">What is AirCover?</div>
                                                </div>
                                                <div className="aircover_section5_arrows">
                                                    {ans1 ? <svg viewBox="0 0 32 32" className="aircover_section5_arrowUp"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" className="aircover_section5_arrowDown"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans1 ? <div className="aircover_section5_ans">AirCover is top-to-bottom protection for Hosts. It includes $1m Host liability insurance, $1m Experiences liability insurance, and $1m Host damage protection, with new coverage for pet damage, deep cleaning, and more.</div> : null }
                                    </div>
                                    <hr className="aircover_section5_line" />
                                </div>
                                <div>
                                    <div className="aircover_section5_tab">
                                        <div onClick={()=>setAns2(!ans2)} className="aircover_section5_tabContent">
                                            <div className="aircover_section5_tabText">
                                                <div className="aircover_section5_quesContainer">
                                                    <div className="aircover_section5_ques">What’s the difference between damage protection and liability insurance?</div>
                                                </div>
                                                <div className="aircover_section5_arrows">
                                                    {ans2 ? <svg viewBox="0 0 32 32" className="aircover_section5_arrowUp"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" className="aircover_section5_arrowDown"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans2 ? <div className="aircover_section5_ans">Host damage protection covers you if your place or belongings ever get damaged by a guest during an Airbnb stay. Host liability insurance applies in the rare event that a guest gets hurt during an Airbnb stay or Experience.</div> : null }
                                    </div>
                                    <hr className="aircover_section5_line" />
                                </div>
                                <div>
                                    <div className="aircover_section5_tab">
                                        <div onClick={()=>setAns3(!ans3)} className="aircover_section5_tabContent">
                                            <div className="aircover_section5_tabText">
                                                <div className="aircover_section5_quesContainer">
                                                    <div className="aircover_section5_ques">How does AirCover work with my personal insurance?</div>
                                                </div>
                                                <div className="aircover_section5_arrows">
                                                    {ans3 ? <svg viewBox="0 0 32 32" className="aircover_section5_arrowUp"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" className="aircover_section5_arrowDown"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans3 ? <div className="aircover_section5_ans">While AirCover protects you while you’re hosting an Airbnb stay or Experience, it is not a substitute for personal insurance. Since everyone’s situation is different, you should talk to your insurer to see how or if your policy overlaps with AirCover.</div> : null }
                                    </div>
                                    <hr className="aircover_section5_line" />
                                </div>
                                <div>
                                    <div className="aircover_section5_tab">
                                        <div onClick={()=>setAns4(!ans4)} className="aircover_section5_tabContent">
                                            <div className="aircover_section5_tabText">
                                                <div className="aircover_section5_quesContainer">
                                                    <div className="aircover_section5_ques">Are there damages that AirCover doesn’t cover?</div>
                                                </div>
                                                <div className="aircover_section5_arrows">
                                                    {ans4 ? <svg viewBox="0 0 32 32" className="aircover_section5_arrowUp"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" className="aircover_section5_arrowDown"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans4 ? <div className="aircover_section5_ans">AirCover doesn’t cover normal wear and tear or losses incurred due to acts of nature (like earthquakes and hurricanes). You can find a complete list <span style={{textDecoration: "underline", cursor: "pointer", color: "black", fontWeight: 600}}>here</span>.</div> : null }
                                    </div>
                                    <hr className="aircover_section5_line" />
                                </div>
                                <div>
                                    <div className="aircover_section5_tab">
                                        <div onClick={()=>setAns5(!ans5)} className="aircover_section5_tabContent">
                                            <div className="aircover_section5_tabText">
                                                <div className="aircover_section5_quesContainer">
                                                    <div className="aircover_section5_ques">I host an Experience. Am I protected by AirCover?</div>
                                                </div>
                                                <div className="aircover_section5_arrows">
                                                    {ans5 ? <svg viewBox="0 0 32 32" className="aircover_section5_arrowUp"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" className="aircover_section5_arrowDown"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans5 ? <div className="aircover_section5_ans">Yes. AirCover’s Experiences liability insurance applies to you in the rare event that a guest gets hurt or their belongings are damaged during your Experience.</div> : null }
                                    </div>
                                    <hr className="aircover_section5_line" />
                                </div>
                                <div>
                                    <div className="aircover_section5_tab">
                                        <div onClick={()=>setAns6(!ans6)} className="aircover_section5_tabContent">
                                            <div className="aircover_section5_tabText">
                                                <div className="aircover_section5_quesContainer">
                                                    <div className="aircover_section5_ques">I need to make a claim. How do I do it?</div>
                                                </div>
                                                <div className="aircover_section5_arrows">
                                                    {ans6 ? <svg viewBox="0 0 32 32" className="aircover_section5_arrowUp"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" className="aircover_section5_arrowDown"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans6 ? <div className="aircover_section5_ans">If a guest has damaged your place or belongings, visit our <span style={{textDecoration: "underline", cursor: "pointer", color: "black", fontWeight: 600}}>Resolution Centre</span> to submit an AirCover request. <br /><br />If a guest has been injured, complete the <span style={{textDecoration: "underline", cursor: "pointer", color: "black", fontWeight: 600}}>liability insurance intake form</span>.</div> : null }
                                    </div>
                                    <hr className="aircover_section5_line" />
                                </div>
                                <div>
                                    <div className="aircover_section5_tab">
                                        <div onClick={()=>setAns7(!ans7)} className="aircover_section5_tabContent">
                                            <div className="aircover_section5_tabText">
                                                <div className="aircover_section5_quesContainer">
                                                    <div className="aircover_section5_ques">How long does it take to get reimbursed through AirCover for damage?</div>
                                                </div>
                                                <div className="aircover_section5_arrows">
                                                    {ans7 ? <svg viewBox="0 0 32 32" className="aircover_section5_arrowUp"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                                     : <svg viewBox="0 0 32 32" className="aircover_section5_arrowDown"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg> }
                                                </div>
                                            </div>
                                        </div>
                                        {ans7 ? <div className="aircover_section5_ans">We always try to resolve damage reimbursement requests as quickly as possible – within 9 days on average.</div> : null }
                                    </div>
                                    <hr className="aircover_section5_line" />
                                </div>
                                <div className="aircover_section5_bottom">
                                    Learn even more about AirCover and all it has to offer, along with the terms and conditions, <span className="aircover_section5_here">here</span>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid>
                <div className="aircover_section6_container">
                    <div className="aircover_section6_content">
                        <div className="aircover_section6_leftSection">
                            <h2 className="aircover_section6_heading">Hosting on Airbnb</h2>
                            <div className="aircover_section6_text">Join us. We’ll help you every <br />step of the way.</div>
                            <Button onClick={()=>navigate("/hostYourHome")} variant="contained" id="aircover_section6_button">Let's go</Button>
                        </div>
                        <div className="aircover_section6_rightSection">
                            <div className="aircover_section6_bg1">
                                <img className="aircover_section6_img" src="https://a0.muscache.com/im/pictures/f87c060d-1140-4ed8-8156-6f83a65dc646.jpg?im_w=960" />
                            </div>
                            <div className="aircover_section6_bg2">
                                <img className="aircover_section6_img" src="https://a0.muscache.com/im/pictures/31863cc5-ec40-42ad-8c40-6ce213e772b8.jpg?im_w=2560" />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

        </Grid>
        
        <Footer />
        </>
    )
}

export default AirCover