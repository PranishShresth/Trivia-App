import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  formControl: {
    width: 350,
    margin: 20,
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));

function Form({ getQuestions }) {
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState({
    questions: "",
    category: "",
    difficulty: "",
    type: "",
  });

  const handleChange = (e) => {
    e.persist();
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //handling submitting the form in controlled way
  const handleSubmit = async (e) => {
    //prevent reload
    e.preventDefault();
    if (formValues.questions === "") {
      setError(true);
      //fetch data from the api using built in fetch api
      return null;
    }
    const url = `https://opentdb.com/api.php?amount=${formValues.questions}&category=${formValues.category}&difficulty=${formValues.difficulty}&type=${formValues.type}`;
    const questions = await fetch(url);
    const resp = await questions.json();
    getQuestions(resp.results);
    history.push("/trivia");
  };
  return (
    <div className={classes.formContainer}>
      <Paper elevation={6}>
        <form onSubmit={handleSubmit}>
          <Grid container className={classes.container} direction="column">
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{
                textAlign: "center",
                backgroundColor: "#735DD0",
                color: "#ffffff",
                padding: "10px",
              }}
            >
              Make your quiz!
            </Typography>
            <FormControl className={classes.formControl}>
              <TextField
                id="questions"
                name="questions"
                label="Questions*"
                onChange={handleChange}
                value={formValues.questions || ""}
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="categoryLabel">Category</InputLabel>
              <Select
                value={formValues.category || ""}
                onChange={handleChange}
                labelId="categoryLabel"
                id="category"
                name="category"
              >
                <MenuItem value={"any"}>Any Category</MenuItem>
                <MenuItem value={9}>General Knowledge</MenuItem>
                <MenuItem value={10}>Entertainment: Books</MenuItem>
                <MenuItem value={11}>Entertainment: Film</MenuItem>
                <MenuItem value={12}>Entertainment: Music</MenuItem>
                <MenuItem value={13}>
                  Entertainment: Musicals &amp; Theatres
                </MenuItem>
                <MenuItem value={14}>Entertainment: Television</MenuItem>
                <MenuItem value={17}>Science &amp; Nature</MenuItem>
                <MenuItem value={18}>Science: Computers</MenuItem>
                <MenuItem value={19}>Science: Mathematics</MenuItem>
                <MenuItem value={20}>Mythology</MenuItem>
                <MenuItem value={21}>Sports</MenuItem>
                <MenuItem value={22}>Geography</MenuItem>
                <MenuItem value={23}>History</MenuItem>
                <MenuItem value={24}>Politics</MenuItem>
                <MenuItem value={25}>Art</MenuItem>
                <MenuItem value={29}>Entertainment: Comics</MenuItem>
                <MenuItem value={30}>Science: Gadgets</MenuItem>
                <MenuItem value={31}>
                  Entertainment: Japanese Anime &amp; Manga
                </MenuItem>
                <MenuItem value={32}>
                  Entertainment: Cartoon &amp; Animations
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="difficultyLabel">Difficulty</InputLabel>
              <Select
                value={formValues.difficulty || ""}
                onChange={handleChange}
                labelId="difficultyLabel"
                id="difficulty"
                name="difficulty"
              >
                <MenuItem value="any">Any Difficulty</MenuItem>
                <MenuItem value={"easy"}>Easy</MenuItem>
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"hard"}>Hard</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="typeLabel">Type</InputLabel>
              <Select
                value={formValues.type || ""}
                onChange={handleChange}
                labelId="typeLabel"
                name="type"
              >
                <MenuItem value="any">Any Type</MenuItem>
                <MenuItem value="multiple">Multiple Choice</MenuItem>
                <MenuItem value="boolean">True / False</MenuItem>
              </Select>
            </FormControl>
            <br />
            <FormHelperText style={{ textAlign: "center", color: "red" }}>
              {error
                ? "Before proceeding, please enter no of question you would like to challenge"
                : ""}
            </FormHelperText>
            <FormControl className={classes.formControl}>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#735DD0" }}
                color="primary"
              >
                Create your Quiz
              </Button>
            </FormControl>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default Form;
