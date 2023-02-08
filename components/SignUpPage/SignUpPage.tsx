import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CheckoutPage } from "../CheckoutPage/CheckoutPage";
import { MealPage } from "../MealPage/MealPage";
import { PlanPage } from "../PlanPage/PlanPage";
import { NavBar } from "./NavBar/NavBar";
import "./SignUpPage.scss";

export const SignUpPage = () => {
  const match = useRouteMatch();

  return (
    <div className="signup">
      <NavBar />
      <Switch>
        <Route path={`${match.path}/plan`}>
          <PlanPage />
        </Route>
        <Route path={`${match.path}/meal/:mpw`}>
          <MealPage />
        </Route>
        <Route path={`${match.path}/checkout`}>
          <CheckoutPage />
        </Route>
      </Switch>
    </div>
  );
};
