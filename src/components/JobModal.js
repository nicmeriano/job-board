import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Typography } from "@material-ui/core";

import style from "./JobModal.module.scss"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ job, open, handleClose }) {
  const {
    title,
    company,
    company_logo,
    created_at,
    description,
    location,
    url
  } = job;

  const logo = company_logo ? <img
  src={company_logo}
  alt="company logo"
  className={style.logo}
/> : <div></div>

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <div className={style.header}>
            <div>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">{company}</Typography>
            <Typography variant="subtitle1">{location}</Typography>
            <Typography variant="caption">{created_at}</Typography>

            </div>
            {logo}
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"dangerouslySetInnerHTML={{__html: description}} />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <a href={url} target="_blank" rel="noopener noreferrer" >

            <Button  color="primary">
              Apply
            </Button>

          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
