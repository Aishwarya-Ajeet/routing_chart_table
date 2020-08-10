import React from "react";
import { Route, Switch } from "react-router";
import Chart from "./Chart";
import Table from "./Table";

export default function Body() {
  return (
    <Switch>
      <Route path="/chart" component={Chart} />
      <Route path="/table" component={Table} />
    </Switch>
  );
}
