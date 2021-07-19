import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notfoud from "./pages/Notfoud";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Notfoud} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
