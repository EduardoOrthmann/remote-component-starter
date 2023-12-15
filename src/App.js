import React from "react";

function App({ name = "World" }) {
  return <h1>Hello {name}!</h1>;
}

export default App;
