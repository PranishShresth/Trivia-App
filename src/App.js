import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./pages/Form/Form";
import Quiz from "./pages/Quiz/Quiz";
import Fade from "@material-ui/core/Fade";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [questions, setQuestions] = useState([]);

  const getQuestions = (data) => {
    setQuestions(data);
  };

  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Route
            exact
            path="/"
            render={(props) => <Form {...props} getQuestions={getQuestions} />}
          ></Route>
          <Route
            path="/trivia"
            render={(props) => <Quiz {...props} question={questions} />}
          ></Route>
        </div>
      </Router>
    </>
  );
}

export default App;
