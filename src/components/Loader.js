import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    color: "#70D5AF"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem"
  }
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
