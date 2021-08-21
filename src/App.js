import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// css
import "./App.css";

// component
import Landing from "./component/Landing";
import Pages from "./component/Pages";
import Account from "./component/Account";
import Documentation from "./component/Documentation";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pages" component={Pages} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/documentation" component={Documentation} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
