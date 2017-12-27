import React, { Component } from "react";
import { AppContainer } from "./components/Containers";
import SplashPage from "./containers/pages/SplashPage";
import PlayerPage from "./containers/pages/PlayerPage";

import "./style/variables.css";
import "./App.css";

class App extends Component {
  state = {
    signedIn: false,
    token: "",
    error: "",
  };

  componentDidMount() {
    const url = new URL(window.location.href);
    const success = url.searchParams.get("success");
    if (success === "true") {
      const token = url.searchParams.get("token");
      if (token) {
        this.state.signedIn = true;
        this.state.token = token;
        this.forceUpdate();
      }
    }
  }

  onAuthFail(error) {
    this.setState({
      signedIn: false,
      error,
    });
  }

  render() {
    const { signedIn, token, error } = this.state;
    return (
      <AppContainer>
        {signedIn ? (
          <PlayerPage token={token} onAuthError={e => this.onAuthFail(e)} />
        ) : (
          <SplashPage error={error} />
        )}
      </AppContainer>
    );
  }
}

export default App;
