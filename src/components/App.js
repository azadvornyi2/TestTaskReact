import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
// import Header from "./Header/Header";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import AccountsPage from "./Pages/AccountsPage";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/recover" component={ForgotPasswordPage} />
        <Route path="/accounts" component={AccountsPage} />
        <Route path="/">
          if (auth) {<Redirect to={"/accounts"} />}
          else {<Redirect to={"/login"} />}
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
