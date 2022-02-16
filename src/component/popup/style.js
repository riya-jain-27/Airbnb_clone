const styles = {
  banner: {
    background: "rgb(34,34,34)",
    zIndex: 2000,
    position: "fixed",
    inset: 0,
    opacity: 0.5,
    overflowY: "auto"
  },
  div: {
    border: 0,
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    height: 1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
    marginTop: -1,
  },
  box: {
    zIndex: 2000,
    position: "fixed",
    inset: 0,
    maxHeight: "calc(var(7.14px,1vh)*100)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    width: "100%",
    maxWidth: 780,
    borderRadius: 12,
    background: "rgb(255,255,255)",
    position: "relative",
    maxHeight: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
  },
  close: {
    position: "absolute",
    left: 24,
    top: 24,
    zIndex: 1,
  },
  closeIcon: {
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
  },
  learnMore: {
    textDecoration: "underline",
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
  },
  list: {
    display: "block",
    listStyleType: "disc",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 40,
  },
  para: {
    fontSize: 16,
    whiteSpace: "pre-wrap",
    fontWeight: 400,
  },
  heading: {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 15,
    marginTop: -26,
  },
  text: {
    padding: "24px 16px",
  },
  content: {
    padding: 24,
    flex: "1 1 auto",
    overflowY: "auto",
    outline: "none",
  },
  textSection: { 
    marginTop: 54, 
    overflow: "scroll" 
  },
};

export default styles