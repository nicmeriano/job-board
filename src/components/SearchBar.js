import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  Paper,
  InputBase,
  IconButton,
  TextField
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";

import style from "./SearchBar.module.scss";

const useStyles = makeStyles({
  root: {
    background: "#70D5AF",
    border: "2px solid #70D5AF",
    boxShadow: "none",
    color: "white",
    flex: 1,
    "&:hover": {
      background: "transparent",
      color: "#70D5AF"
    }
  },
  textField: {
    flex: 2,

    "&:hover fieldset": {
      borderColor: "#70D5AF !important"
    },
    "& label.Mui-focused": {
      color: "#70D5AF"
    }
  },
  cssLabel: {},

  cssOutlinedInput: {
    height: "100%",

    "&$cssFocused $notchedOutline": {
      borderColor: `#70D5AF !important`
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, .2)"
  },

  toolbar: {
    background: "white"
  },

  appBar: {
    boxShadow: "1px 2px 5px 2px rgba(0,0,0,0.1)"
  }
});

function SearchBar({ updateSearchTerm }) {
  const [search, update] = useState("");
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={style.formWrapper}>
            <form className={style.form}>
              <div className={style.search}>
                <Paper className={style.inputWrapper}>
                  <IconButton className={style.iconButton} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    className={style.input}
                    placeholder="Search"
                    onChange={e => {
                      update(e.target.value);
                    }}
                  />
                </Paper>
              </div>
              <div className={style.spacer} />
              <div className={style.filters}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  label="Location"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
                <div className={style.spacer} />
                <Button
                  className={classes.root}
                  color="primary"
                  size="large"
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    updateSearchTerm(search);
                  }}
                >
                  search
                </Button>
              </div>
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default SearchBar;
