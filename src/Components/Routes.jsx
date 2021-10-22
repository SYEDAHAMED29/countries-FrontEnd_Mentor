import React from "react";
import {Switch, Route} from "react-router";
import Countries from "../List/Countries";
import Country from "../Country/Country";
import Notfound from "../404/Notfound";

function Routes() {
   return (
      <Switch>
         <Route exact path="/">
            <Countries />
         </Route>
         <Route path="/404">
            <Notfound />
         </Route>
         <Route path="/:country">
            <Country />
         </Route>
      </Switch>
   );
}

export default Routes;
