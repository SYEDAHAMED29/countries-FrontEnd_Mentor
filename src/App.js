import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Countries from "./List/Countries";
import Country from "./Country/Country";
import Notfound from "./404/Notfound";

function App() {
   return (
      <Router>
         <Header />
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
         <Footer />
      </Router>
   );
}

export default App;
