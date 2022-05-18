import "./App.css";

import Navbar from "./Components/Navbar";
import Textbox from "./Components/Textbox";

import Alert from "./Components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  // document.body.style.backgroundColor = "  #d6d6f5";
  // setMode("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "  #131339";
      showAlert("Dark mode enabled!", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d6d6f5";
      showAlert("Light mode enabled!", "info");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  //Rendering components

  return (
    <>
      <Navbar title="Texteditor" mode={mode} toggleMode={toggleMode} />
     
      <Alert alert={alert} />

      <div className="container my-5">
        {" "}
        <Textbox mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
