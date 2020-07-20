import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
function GameOver({ score }) {
  return (
    <Grid item xs={12}>
      <Card></Card>
      <Paper elevation={3}>Score:{score}</Paper>
    </Grid>
  );
}

export default GameOver;
