import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    textAlign: 'left',
    margin: "auto",
    marginTop: "40px",
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '10px'
  },
  typography: {
    //color: "brown"
    fontFamily: 'open sans'
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <Typography className={classes.typography} variant="body2" gutterBottom>
        fb.com/JoelHelanderMusic | Copyright © 2019 Joel Helander
      </Typography>


        
      
    </div>
  );
}
