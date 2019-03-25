import React, { useState } from "react";
import "./app.css";
import ReactImage from "./react.png";

const App = props => {
  const [state, setState] = useState({ username: null });

  componentDidMount = () => {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => setState({ username: user.username }));
  };

  const { username } = state;
  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <img src={ReactImage} alt="react" />
    </div>
  );
};

export default App;
