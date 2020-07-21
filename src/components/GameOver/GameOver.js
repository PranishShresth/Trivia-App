import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  alertSuccess: {
    border: "1px solid rgb(214,233,198)",
    backgroundColor: "rgb(223, 240, 216)",
    color: "rgb(70, 136, 71)",
  },
  alertDanger: {
    border: "1px solid rgb(238,211,215)",
    backgroundColor: " rgb(242,222,222)",
    color: "rgb(185,74,72)",
  },

  container: {
    width: "80%",
    margin: "auto",

    height: "100%",
    textAlign: "center",
    background: "#ffffff",
  },
}));
function GameOver({ score, timer, question }) {
  const classes = useStyles();
  const history = useHistory();

  let percentageScore = ((score / question) * 100).toFixed(2);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={12} md={12}>
        <Typography component="h4" variant="h4">
          YOUR RESULTS
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Your Score: {score}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Time Spent: {timer}s
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Your score percentage is {percentageScore}
        </Typography>
        <Typography>
          {percentageScore <= 30 ? (
            <span className={classes.alertDanger}>
              Your score is deemed: Poor
            </span>
          ) : percentageScore >= 30 && percentageScore <= 50 ? (
            <span className={classes.alertDanger}>
              Your score is deemed: Average
            </span>
          ) : percentageScore >= 50 && percentageScore <= 80 ? (
            <span className={classes.alertSuccess}>
              Your score is deemed: Good
            </span>
          ) : (
            <span className={classes.alertSuccess}>
              Your score is deemed: Excellent
            </span>
          )}
        </Typography>
        <br />
        <Button
          variant="contained"
          style={{ backgroundColor: "#735DD0" }}
          color="secondary"
          onClick={() => {
            history.push("/");
          }}
        >
          Play again!
        </Button>
      </Grid>
    </Grid>
  );
}

export default GameOver;
