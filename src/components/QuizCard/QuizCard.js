import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "100%",
  // },
  gridItem: {
    [theme.breakpoints.up("xs")]: {
      margin: 20,
    },
    [theme.breakpoints.up("sm")]: {
      margin: 40,
    },
  },
  root: {
    width: "80%",
    height: "250px",
  },
  question: {
    fontWeight: "1000",
    fontSize: "20px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
  },
}));

const QuizCard = ({
  question: { question, incorrect_answers, correct_answer },
  index,
  handleNext,
  handleAnswer,
  disabled,
  onAnswerChange,
  timer,
}) => {
  const classes = useStyles();
  const answers = [...incorrect_answers, correct_answer];
  const [value, setValue] = useState("");
  const [shuffledAnswer, setShuffledAnswer] = useState([]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    onAnswerChange(event.target.value);
  };

  useEffect(() => {
    //Fisher Yates shuffle algorithm

    const shuffleAnswers = (arr) => {
      var currInd = arr.length;
      var tmp, randInd;
      while (0 != currInd) {
        randInd = Math.floor(Math.random() * arr.length);
        currInd--;

        tmp = arr[currInd];
        arr[currInd] = arr[randInd];
        arr[randInd] = tmp;
      }
      return arr;
    };

    setShuffledAnswer(shuffleAnswers(answers));

    var mytimer = setInterval(timer, 1000);
    return () => {
      clearInterval(mytimer); //after component unmounts
    };
  }, [question]);

  const decode = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ height: "100%" }}
    >
      <Grid item className={classes.gridItem}>
        <Typography
          className={classes.question}
          gutterBottom
          variant="h2"
          component="h2"
        >
          Question {index + 1}: {decode(question)}
        </Typography>
      </Grid>
      <Card className={classes.root}>
        <CardContent>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            {shuffledAnswer &&
              shuffledAnswer.map((ans) => {
                return (
                  <FormControlLabel
                    key={ans}
                    value={decode(ans)}
                    control={<Radio disabled={disabled} />}
                    label={decode(ans)}
                  />
                );
              })}
          </RadioGroup>
          {!disabled ? (
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={() => {
                handleAnswer();
              }}
            >
              Choose
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleNext();
              }}
              variant="outlined"
              color="primary"
            >
              Next
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default QuizCard;
