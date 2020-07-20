import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: { backgroundColor: "#735DD0" },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6" color="inherit">
          Trivia App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
