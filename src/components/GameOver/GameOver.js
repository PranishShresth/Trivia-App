import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    width: "80%",
    height: "400px",
    textAlign: "center",
    background: "#ffffff",
  },
}));
function GameOver({ score, timer, question }) {
  const classes = useStyles();
  const history = useHistory();

  let percentageScore = ((score / question) * 100).toFixed(2);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={12}>
        <Typography component="h4" variant="h4">
          YOUR RESULTS
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
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
          Your score is deemed:
          {percentageScore <= 30 ? (
            <span style={{ backgroundColor: "#BF0E08", color: "white" }}>
              Below Average
            </span>
          ) : percentageScore >= 30 && percentageScore <= 50 ? (
            <span style={{ backgroundColor: "#BF0E08", color: "white" }}>
              Average
            </span>
          ) : percentageScore >= 50 && percentageScore <= 80 ? (
            <span style={{ backgroundColor: "#00783E", color: "white" }}>
              Below Average
            </span>
          ) : (
            <span style={{ backgroundColor: "#00783E", color: "white" }}>
              Excellent
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
