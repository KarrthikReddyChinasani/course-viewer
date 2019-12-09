import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Courses from "./courses";
import About from "./about";

const comps = {
  Home: Home,
  Courses: Courses,
  About: About
};

export default function Routes() {
  return (
    <Switch>
      {["", "Home", "Courses", "About"].map((item, index) => {
        console.log(item);
        //   let Comp = comps[item]
        let Comp = comps[item] || Home;
        return (
          <Route
            key={`${index}`}
            path={`/${item.toLowerCase()}`}
            component={Comp}
          ></Route>
        );
      })}
    </Switch>
  );
}
