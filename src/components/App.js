import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";
import PermissionDenied from "./PermissionDenied";
import GlobalStyle from "../theme/globalStyle";

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
    <>
      <GlobalStyle />
      <div className="App">
        <NavBar onLogin={handleLogin} userId={userId} onLogout={handleLogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Properties {...props} userId={userId} />}
          />
          <Route exact path="/add-property" component={AddProperty} />
          <Route
            exact
            path="/saved-properties"
            render={(props) =>
              userId ? (
                <SavedProperties {...props} userId={userId} />
              ) : (
                <PermissionDenied />
              )
            }
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
