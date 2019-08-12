import React from "react";
import { Typography, AppBar, Toolbar, Slide } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import style from "./Header.module.scss";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  link: {
    color: "black"
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(props) {
  const classes = useStyles();
  return (
    <>
      <div className={style.header}>
        <HideOnScroll {...props}>
          <AppBar className={style.appBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Job Finder
              </Typography>
              <a
                href="https://github.com/nicmeriano/job-board"
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
              >
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </IconButton>
              </a>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </div>
      <div className={style.wrapper}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom={true}
          className={style.title}
        >
          Entry level software jobs
        </Typography>
        <Typography
          variant="h4"
          component="p"
          gutterBottom={true}
          className={style.paragraph}
        >
          All in one place
        </Typography>
      </div>
    </>
  );
}
