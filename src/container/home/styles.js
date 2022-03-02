const styles = {
  section1: {
    container: {
      maxWidth: 1120,
      display: "contents",
      color: "black",
    },
    parent1: {
      background: "black",
      paddingTop: 176,
      paddingBottom: 96,
      width: "100%",
      overflow: "hidden",
    },
    parent2: {
      maxWidth: "calc(min(1760px, 100%) - 160px)",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    parent3: {
      display: "grid",
      gridTemplateRows: "auto",
      gridTemplateColumns: "1fr",
      columnGap: 24,
      rowGap: 24,
      height: 650,
    },
    parent4: {
      position: "relative",
      borderRadius: 12,
    },
    pictureContainer: {
      borderRadius: 12,
      position: "absolute",
      zIndex: 0,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      overflow: "hidden",
    },
    pictureStyle: {
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      display: "inline-block",
      verticalAlign: "bottom",
      minHeight: 1,
      position: "relative",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
    },
    image: {
      position: "absolute",
      left: 0,
      right: 0,
      objectFit: "cover",
      objectPosition: "center",
      verticalAlign: "bottom",
      height: "100%",
      width: "100%",
    },
    textContainer1: {
      display: "block",
      height: "100%",
    },
    textContainer2: {
      display: "flex",
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      background: "none",
      height: "100%",
    },
    textContainer3: {
      position: "relative",
      flex: "1 0 0",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      gridTemplateRows: "minmax(0,1fr)",
    },
    textContainer4: {
      gridArea: "1/1/1/1",
      minWidth: 1,
      overflowWrap: "anywhere",
      display: "flex",
    },
    textContainer5: {
      flex: 1,
      display: "grid",
      gridTemplate: "1fr",
      gridAutoRows: "auto 1fr",
      paddingBottom: 64,
      minWidth: 0,
    },
    textContainer6: {
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    textStyle: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      paddingBottom: 24,
    },
    text: {
      minWidth: 0,
      whiteSpace: "pre-line",
      maxWidth: "100%",
      fontSize: 50,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: "43px",
      color: "white",
    },
    buttonStyle: {
      minWidth: 0,
      display: "flex",
      marginTop: -16,
      flexDirection: "column",
      marginLeft: 0,
    },
    button: {
      textTransform: "none",
      marginTop: 16,
      marginLeft: 0,
      position: "relative",
      backgroundColor: "white",
      color: "#C6017E",
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 34,
      paddingRight: 34,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 45,
    },
  },
  
};

export default styles;