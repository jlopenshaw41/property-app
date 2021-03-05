import React, { useState } from "react";
import "../styles/App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    setUserId(response.userID);
  };

  const handleLogout = () => {
    window.FB.logout(() => {});
    setUserId("");
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userId={userId} onLogout={handleLogout} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userId={userId} />}
        />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
      <h2>Property App</h2>
    </div>
  );
};

export default App;
