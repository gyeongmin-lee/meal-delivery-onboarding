import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { PlanPage } from "../PlanPage/PlanPage";
import { NavBar } from "./NavBar/NavBar";
import "./SignUpPage.scss";

export const SignUpPage = () => {
  let match = useRouteMatch();

  return (
    <div className="signup">
      <NavBar />
      <Switch>
        <Route path={`${match.path}/`}>
          <PlanPage />
        </Route>
      </Switch>
    </div>
  );
};
