import Radium, { StyleRoot} from "radium";

const styles = {
    root:{
        backgroundColor: "#F7F7F7",
        paddingLeft: 80,
        paddingRight: 80,
        display: "flex",
        justifyContent: "space-between",
        // bottom: 0,
        // position: "absolute",
        
        // "@media (min-width: 744px)": {
        //     paddingLeft: 45,
        //     paddingRight: 45,
        // }
    },
    content:{
        paddingTop: 48, 
        paddingBottom: 48,
        display: "flex",
        justifyContent:"space-evenly",
    },
    column:{
        paddingLeft: 12,
        paddingRight: 12,
    },
    title:{
        fontWeight: 600,
        fontSize: 14,
    },
    element:{
        fontSize: 14,
        marginTop: 16,
        fontWeight: 350,
        cursor: "pointer",
    },
    banner:{
        paddingTop:24,
        paddingBottom: 24,
        borderTop: "1px solid lightgrey",
        width: "100%",
    },
    info:{
        display: "flex",
        justifyContent: "space-between",
    },
    right:{
        display: "flex",
    },
    left:{
        display: "flex",
        left: 0,
        textAlign: "left",
        overflow: "hidden",
    },
    leftText:{
        fontSize: 14,
        fontWeight: 350,
        cursor: "pointer",
    },
    break:{
        width: 19,
        textAlign: "center",
    },
    options:{
        display: "flex",
    },
    english:{
        marginRight: 24,
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "underline",
        cursor: "pointer"
    },
    inr:{
        marginRight: 24,
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "underline",
        cursor: "pointer"
    },
    icons:{
        marginLeft: 32,
    },
    media:{
        padding: 0,
        margin: 0,
        display: "flex",
        listStyle: "none",
    },
    facebook:{
        marginRight: 24,
    },
    twitter:{
        marginRight: 24,
    },

    '@media (min-width: 1128px)':{
        root:{
            paddingLeft: 80,
            paddingRight: 80,
        } 
    },

    '@media (min-width: 744px)' :{
        root:{
            paddingLeft: 45,
            paddingRight: 45,
        } 
    }
}

export default styles