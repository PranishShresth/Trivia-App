import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import QuizCard from "./../../components/QuizCard/QuizCard";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import GameOver from "./../../components/GameOver/GameOver";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "30px auto",
  },
  container: {
    height: "100%",
  },
  paper: {
    margin: "0 auto",
    maxWidth: "800px",
  },
}));

function Quiz({ question }) {
  const classes = useStyles();

  //index of the array
  const [index, setIndex] = useState(0);

  //score
  const [score, setScore] = useState(0);

  //diasble property toggling of radio button
  const [disableRadio, setDisableRadio] = useState(false);

  //asnwer
  const [answer, setAnswer] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(0);

  //increases the index of the array to get new question until length of array
  const handleNext = () => {
    if (index !== question.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setGameOver(true);
    }
    setDisableRadio(false);
  };

  const handleAnswerChange = (ans) => {
    //get the answer from onchange from form
    setAnswer(ans);
  };
  const handleAnswer = () => {
    //if no answer is selected dont let the player choose
    if (answer !== "") {
      if (answer === question[index].correct_answer) {
        setScore(score + 1);
      }
      //set the answer to empty string for next question
      setAnswer("");

      setDisableRadio(true);
    }
  };

  const createTimer = () => {
    setTimer((timer) => timer + 1);
  };

  //render quiz card only if array has length more than 0
  if (question.length > 0) {
    return (
      <>
        {/* render GameOver if gameOver bool is true */}
        {gameOver ? (
          <GameOver score={score} />
        ) : (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.container}
          >
            <Grid item xs={10} md={12}>
              {timer}
              <Paper className={classes.paper} elevation={3}>
                <LinearProgress
                  variant="determinate"
                  value={Math.ceil((index / (question.length - 1)) * 100)}
                />
              </Paper>
            </Grid>
            <Grid item xs={10} md={12}>
              <QuizCard
                onAnswerChange={handleAnswerChange}
                gameOver={gameOver}
                disabled={disableRadio}
                handleNext={handleNext}
                handleAnswer={handleAnswer}
                question={question[index]}
                timer={createTimer}
              />
            </Grid>
          </Grid>
        )}
      </>
    );
  } else {
    return <CircularProgress color="secondary" />;
  }
}
export default Quiz;
