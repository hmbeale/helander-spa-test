import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import SimpleModal from "./simpleModal.js";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 700,

    margin: "auto",
    marginTop: "40px",
    textAlign: "center"
  },
  typographyTop: {
    //color: '#2d1309'
    fontFamily: "open sans",
    textAlign: "center"
  },
  typographyOther: {
    color: "black",
    fontFamily: "open sans",
    textAlign: "center",
    marginBottom: "80px"
  },
  button: {
    backgroundColor: "brown",
    color: "white",
    fontFamily: "open sans",
    alignText: "left"
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typographyTop} variant="h1" gutterBottom>
        Hello
      </Typography>

      <Typography className={classes.typographyOther} variant="h2" gutterBottom>
        I am good at ping pong and can teach you piano
      </Typography>
     
      <SimpleModal className={classes.modal} />
    </div>
  );
}
