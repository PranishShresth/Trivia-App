import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "800px",
  },
  paper: {
    margin: "0 auto",
    maxWidth: "600px",
    [theme.breakpoints.up("xs")]: {
      margin: "0 0 10px 0",
    },
  },
}));

function DashboardCard({ score, timer, index, totalquestion }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={4} sm={12} md={4}>
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
      <Grid item xs={4} sm={12} md={4}>
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

      <Grid item xs={4} sm={12} md={4}>
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
