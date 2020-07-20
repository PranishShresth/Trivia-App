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
  root: {
    maxWidth: "800px",
    margin: "0 auto",
    minHeight: "250px",
  },
  item: {
    width: "80%",
    margin: "10px",
  },
  question: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px",
    },
  },
}));

const QuizCard = ({
  question: { question, incorrect_answers, correct_answer },
  handleNext,
  handleAnswer,
  disabled,
  onAnswerChange,
  timer,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    onAnswerChange(event.target.value);
  };

  useEffect(() => {
    var mytimer = setInterval(timer, 1000);
    return () => {
      clearTimeout(mytimer);
    };
  }, []);

  const decode = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.question}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {decode(question)}
        </Typography>

        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <Grid container>
            {incorrect_answers.map((inc) => {
              return (
                <Grid key={inc} item xs={6}>
                  <FormControlLabel
                    value={decode(inc)}
                    control={<Radio disabled={disabled} />}
                    label={decode(inc)}
                  />
                </Grid>
              );
            })}
            <Grid item xs={6}>
              <FormControlLabel
                value={decode(correct_answer)}
                control={<Radio disabled={disabled} />}
                label={decode(correct_answer)}
              />
            </Grid>
          </Grid>
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
  );
};

export default QuizCard;
