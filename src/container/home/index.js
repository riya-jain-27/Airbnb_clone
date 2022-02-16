import React from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import styles from "./styles";
import {Grid, Typography, Button} from "@mui/material";
import PictureCard from "../../component/pictureCard"

function Home() {
    return(
        <>
        {/* <Header /> */}
        <Grid>
            <Grid style={{maxWidth: 1120, display: "contents", color: "black"}}>
                <Grid style={{background: "black", paddingTop: 176, paddingBottom: 96, width: "100%", overflow: "hidden"}}>
                    <Grid style={{maxWidth: "calc(min(1760px, 100%) - 160px)", width: "100%", marginLeft: "auto", marginRight: "auto"}}>
                        <Grid style={{display: "grid", gridTemplateRows: "auto", gridTemplateColumns: "1fr", columnGap: 24, rowGap: 24, height: 650}}>
                            <Grid style={{position: "relative", borderRadius: 12}}>
                                <Grid style={{borderRadius: 12, position: "absolute", zIndex: 0, left: 0, right: 0, top: 0, bottom: 0, overflow: "hidden"}}>
                                    <Grid style={{height: "100%", width: "100%", backgroundSize: "cover", display: "inline-block", verticalAlign: "bottom", minHeight: 1, position: "relative", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                        <img style={{position: "absolute", left:0, right:0, objectFit: "cover", objectPosition: "center", verticalAlign: "bottom", height: "100%", width: "100%"}} src="https://a0.muscache.com/im/pictures/21c2735e-a734-40f8-9f60-9ac299c4394c.jpg?im_w=960" />
                                    </Grid>
                                </Grid>
                                <Grid style={{display: "block", height: "100%"}}>
                                    <Grid style={{display: "flex", position: "relative", overflow: "hidden", borderRadius: 12, background: "none", height: "100%"}}>
                                        <Grid style={{position: "relative", flex: "1 0 0", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gridTemplateRows: "minmax(0,1fr)"}}>
                                            <Grid style={{gridArea: "1/1/1/1", minWidth: 1, overflowWrap: "anywhere", display: "flex"}}>
                                                <Grid style={{flex: 1, display: "grid", gridTemplate: "1fr", gridAutoRows: "auto 1fr", paddingBottom: 64, minWidth: 0}}>
                                                    <Grid style={{minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end"}}>
                                                        <div style={{display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", paddingBottom: 24, }}>
                                                            <Typography style={{minWidth: 0, whiteSpace: "pre-line", maxWidth: "100%", fontSize: 38, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "43px", color: "white"}}>Not sure where to go? Perfect.</Typography>
                                                        </div>
                                                        <div style={{minWidth: 0, display: "flex", marginTop: -16, flexDirection: "column", marginLeft: 0}}>
                                                            <Button variant="contained" style={{textTransform: "none", marginTop: 16, marginLeft: 0, position: "relative", backgroundColor: "white", color: "black", paddingTop: 14, paddingBottom: 14, paddingLeft: 34, paddingRight: 34, fontSize: 18, fontWeight: 600, borderRadius: 45}}>I'm flexible</Button>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid>
            <Grid style={{paddingTop: 96, color: "black"}}>
                <Grid style={{display: "flex", justifyContent: "space-between", width: "100%", marginLeft: "auto", marginRight: "auto", maxWidth: "calc(min(1760px, 100%) - 160px)"}}>
                    <Typography variant="h4" style={{paddingBottom: 48, fontWeight: "420"}}>Inspiration for your next trip</Typography>
                </Grid>
                <Grid container columnSpacing={3} style={{display: "flex", justifyContent: "space-between", width: "100%", marginLeft: "auto", marginRight: "auto", maxWidth: "calc(min(1760px, 100%) - 160px)"}}>
                    <Grid item md={3} style={{marginLeft: -24}}>
                    <PictureCard url="https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_q=highq&im_w=720" title="Lonavla" description="66 kilometres away" color="#bc1a6e" />
                    </Grid>
                    <Grid item md={3}>
                    <PictureCard url="https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_q=highq&im_w=720" title="Calangute" description="396 kilometres away" color="#cc2d4a" />
                    </Grid>
                    <Grid item md={3}>
                    <PictureCard url="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_q=highq&im_w=720" title="Alibag" description="36 kilometres away" color="rgb(222, 49, 81)" />
                    </Grid>
                    <Grid item md={3}>
                    <PictureCard url="https://a0.muscache.com/im/pictures/3836379f-169d-4259-8c08-a6cb50461903.jpg?im_q=highq&im_w=720" title="Karjat" description="53 kilometres away" color="rgb(217, 59, 48)" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid>
            <Grid style={{paddingTop: 96, paddingBottom: 146, color: "black", width: "100%", overflow: "hidden", height: "120vh"}}>
                <Grid style={{display: "flex", justifyContent: "space-between", width: "100%", marginLeft: "auto", marginRight: "auto", maxWidth: "calc(min(1760px, 100%) - 160px)"}}>
                    <Typography variant="h4" style={{paddingBottom: 24, fontWeight: "420"}}>Discover Airbnb Experiences</Typography>
                </Grid>
                <Grid container style={{width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto", maxWidth: "calc(min(1760px, 100%) - 160px)", display: "grid", columnGap: 24, rowGap: 24, gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gridTemplateRows: "auto"}}>
                    <Grid item style={{position: "relative", borderRadius: 12}}>
                        <Grid style={{top: 0, bottom: 0, left: 0, right: 0, position: "absolute", overflow: "hidden", zIndex: 0}}>
                            <Grid style={{width: "100%", height: "100%", position: "relative", display: "inline-block", verticalAlign: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%"}}>
                                <img style={{verticalAlign: "bottom", borderRadius: 12, height: "100%", width: "100%", position: "absolute", left: 0, right: 0, objectFit: "cover", objectPosition: "center center"}} src="https://a0.muscache.com/im/pictures/0dcae177-2f65-4a15-b9e8-75d8c9b3cbe8.jpg?im_w=960"></img>
                            </Grid>
                        </Grid>
                        <Grid style={{position: "relative", flex: 1, minHeight: "auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gridTemplateRows: "minmax(0,1fr)"}}>
                            <Grid style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gridArea: "1/1/1/1", gridAutoRows: "auto"}}>
                                <Grid style={{zIndex: 1, padding: 60}}>
                                    <Typography variant="h3" style={{paddingBottom: 24, color: "white", fontWeight: 500}}>Things to do<br />on your trip</Typography>
                                    <Button variant="contained" style={{textTransform: "none", marginTop: 16, position: "relative", backgroundColor: "white", color: "black", paddingTop: 13, paddingBottom: 13, paddingLeft: 20, paddingRight: 20, fontSize: 16, borderRadius: 8}}>Experiences</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{position: "relative", borderRadius: 12}}>
                        <Grid style={{top: 0, bottom: 0, left: 0, right: 0, position: "absolute", overflow: "hidden", zIndex: 0}}>
                            <Grid style={{width: "100%", height: "100%", position: "relative", display: "inline-block", verticalAlign: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%"}}>
                                <img style={{verticalAlign: "bottom", borderRadius: 12, height: "100%", width: "100%", position: "absolute", left: 0, right: 0, objectFit: "cover", objectPosition: "center center"}} src="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=960"></img>
                            </Grid>
                        </Grid>
                        <Grid style={{position: "relative", flex: 1, minHeight: "auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gridTemplateRows: "minmax(0,1fr)"}}>
                            <Grid style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gridArea: "1/1/1/1", gridAutoRows: "auto"}}>
                                <Grid style={{zIndex: 1, padding: 60}}>
                                    <Typography variant="h3" style={{paddingBottom: 24, color: "white", fontWeight: 500}}>Things to do<br />from home</Typography>
                                    <Button variant="contained" style={{textTransform: "none", marginTop: 16, position: "relative", backgroundColor: "white", color: "black", paddingTop: 13, paddingBottom: 13, paddingLeft: 20, paddingRight: 20, fontSize: 16, borderRadius: 8}}>Online Experiences</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid>
            <Grid style={{maxWidth: 1120, display: "contents", color: "black"}}>
                <Grid style={{paddingTop: 0, paddingBottom: 48, width: "100%", overflow: "hidden"}}>
                    <Grid style={{maxWidth: "calc(min(1760px, 100%) - 160px)", width: "100%", marginLeft: "auto", marginRight: "auto"}}>
                        <Grid style={{display: "grid", gridTemplateRows: "auto", gridTemplateColumns: "1fr", columnGap: 24, rowGap: 24, height: 650}}>
                            <Grid style={{position: "relative", borderRadius: 12}}>
                                <Grid style={{borderRadius: 12, position: "absolute", zIndex: 0, left: 0, right: 0, top: 0, bottom: 0, overflow: "hidden"}}>
                                    <Grid style={{height: "100%", width: "100%", backgroundSize: "cover", display: "inline-block", verticalAlign: "bottom", minHeight: 1, position: "relative", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat"}}>
                                        <img style={{position: "absolute", left:0, right:0, objectFit: "cover", objectPosition: "center", verticalAlign: "bottom", height: "100%", width: "100%"}} src="https://a0.muscache.com/im/pictures/83f0dc6f-9290-46f6-9db5-339d525b44d1.jpg?im_w=960" />
                                    </Grid>
                                </Grid>
                                <Grid style={{display: "block", height: "100%"}}>
                                    <Grid style={{display: "flex", position: "relative", overflow: "hidden", borderRadius: 12, background: "none", height: "100%"}}>
                                        <Grid style={{position: "relative", flex: "1 0 0", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gridTemplateRows: "minmax(0,1fr)"}}>
                                            <Grid style={{gridArea: "1/1/1/1", minWidth: 1, overflowWrap: "anywhere", display: "flex"}}>
                                                <Grid style={{flex: 1, display: "grid", gridTemplate: "1fr", gridAutoRows: "auto 1fr", padding: 80, minWidth: 0}}>
                                                    <Grid style={{minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                                        <div style={{display: "flex", justifyContent: "flex-start", textAlign: "start", alignItems: "center"}}>
                                                            <Typography style={{minWidth: 0, whiteSpace: "pre-line", maxWidth: "100%", fontSize: 100, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "103px", color: "white"}}>Questions<br />about<br />hosting?</Typography>
                                                        </div>
                                                    </Grid>
                                                    <Grid style={{minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end"}}>
                                                        <div style={{minWidth: 0, display: "flex", flexWrap: "wrap", marginTop: -16, flexDirection: "column", marginLeft: 0}}>
                                                            <Button variant="contained" style={{textTransform: "none", marginTop: 16, marginLeft: 0, position: "relative", backgroundColor: "white", color: "black", paddingTop: 10, paddingBottom: 10, paddingLeft: 24, paddingRight: 24, fontSize: 16, borderRadius: 8}}>Ask a Superhost</Button>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        {/* <Grid container style={{paddingTop: 64, paddingBottom: 64}}>
            <Grid style={{marginLeft: 80, marginRight: 80}}>
                <Typography variant="h4" style={{fontWeight: "420", paddingBottom: 24}}>Discover Airbnb Experiences</Typography>
                <Grid container spacing={3} md={12} style={{paddingBottom: 100}}>
                    <Grid item md={6}>
                        <PictureCard style={{zIndex: 0}} url="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=1920" />
                    </Grid>
                    <Grid item md={6}>
                        <PictureCard url="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=1920" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={12}>
                        <PictureCard url="https://a0.muscache.com/im/pictures/cca24f3f-8f66-4e9d-98d8-dd5cda8911eb.jpg?im_w=2560 " />
                    </Grid>
                    <Grid item md={12}>
                        <Grid item style={{left: "50%", transform: "translateX(-50%)", filter: "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.28))", position: "absolute", zIndex: 0, verticalAlign: "bottom", height: "auto", width: "100%", borderRadius: 12}}>
                            <img style={{verticalAlign: "bottom", borderRadius: 12, height: "100%", width: "100%", position: "static"}} src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&im_q=highq"></img>
                        </Grid>
                        <Grid item style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white", zIndex: 1, textAlign: "center", fontWeight: 600, height: 480, fontSize: 64}}>
                            Questions about hosting?<br></br>Ask a Superhost.
                            <Button variant="contained" style={{textTransform: "none", marginTop: 48, position: "static", width: 180, bottom: 60, backgroundColor: "white", color: "black", paddingTop: 13, paddingBottom: 13, fontSize: 16, borderRadius: 10}}>Learn more</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid> */}
        <Footer />
        </>
    )
}

export default Home;