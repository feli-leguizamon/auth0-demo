import logo from "./logo.svg";
import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";

import { Login, Logout, Profile } from "./Components";
import { useEffect } from "react/cjs/react.development";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />
            <Logout />
          </>
        ) : (
          <Login />
        )}
      </header>
    </div>
  );
}

export default App;
