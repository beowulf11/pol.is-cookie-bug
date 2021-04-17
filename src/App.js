import React from "react";
import "./App.css";
import ScriptTag from "react-script-tag";

function App() {
  return (
    <div>
      <div
        className="polis"
        data-conversation_id="6dy7mz2wzv"
        data-ui_lang="sk"
      ></div>
      <ScriptTag async type="text/javascript" src="https://pol.is/embed.js" />
    </div>
  );
}

export default App;
