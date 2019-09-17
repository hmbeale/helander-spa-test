import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    //border: "2px solid #000",
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4)
  },
  button: {
    backgroundColor: "brown",
    color: "white",
    fontFamily: "open sans",
    marginBottom: "20px"
  },
  emailForm: {
    alignText: 'center',
    backgroundColor: 'red'
  },
  form: {
    width: "100%"
  },
  textArea: {
    width: "100%"
  },
  label: {
    width: "100%"
  },
  input: {
    width: "100%"
  },
  fieldset: {
    border: 'none'
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        onClick={handleOpen}
      >
        Contact
      </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Send me a message!</h2>
          
        <div>
        <form
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/holden.beale@gmail.com"
          method="post"
        >
          <fieldset id="fs-frm-inputs" className={classes.fieldset}>
            
            <label for="email-address">Your Email </label>
            <input className={classes.input}
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.tld"
              required=""
            />
            <label  className={classes.label} for="message">Message</label>
            <textarea className={classes.textArea}
              rows="5"
              name="message"
              id="message"
              placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
              required=""
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            ></input>
          </fieldset>
          <input type="submit" value="Submit"/>
        </form>
      </div>

        </div>
      </Modal>
    </div>
  );
}
