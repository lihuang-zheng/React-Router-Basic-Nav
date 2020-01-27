import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route paht="/about" component={About} />
    <Navigation />
  </div>
);

export default App;
