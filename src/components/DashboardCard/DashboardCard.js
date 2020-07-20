import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "auto",
    margin: "0 60px",
  },
  paper: {
    width: 400,
    height: 100,
    [theme.breakpoints.up("xs")]: {
      margin: "5px 0",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "5px 0",
    },
  },
}));

function DashboardCard({ score, timer, index, totalquestion }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Card className={classes.paper}>
          <CardContent>
            <Typography component="h5" variant="h5">
              Timer
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {timer}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.paper}>
          <CardContent>
            <Typography component="h5" variant="h5">
              Score
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {score}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card className={classes.paper}>
          <CardContent>
            <Typography component="h5" variant="h5">
              Questions
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {index} / {totalquestion}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DashboardCard;
