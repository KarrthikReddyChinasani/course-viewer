import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
// import Routes from "./components/routes";
import About from "./components/about";
import Home from "./components/home";
import Courses from "./components/courses";
import Notfound from "./components/not-found";
import NewCourse from "./components/NewCourse";

function App() {
  return (
    <Router>
      <div className="App">
        <Header selected="home" />
        {/* <Routes /> */}
        <Switch>
          <Route path={`/about`}>
            <About />
          </Route>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={`/courses`}>
            <Courses />
          </Route>
          <Route path={`/home`}>
            <Home />
          </Route>
          <Route exact path={'/course'}>
            <NewCourse />
          </Route>
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
