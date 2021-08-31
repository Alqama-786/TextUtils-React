import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Mode, SetMode] = useState("light");
  const [alert, SetAlert] = useState(null);

  const ShowAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  };

  const ToggleMode = () => {
    let currentmodetext = document.getElementById("currentmodetext");
    if (Mode === "light") {
      SetMode("dark");
      document.body.style.background = "rgb(29 29 30)";
      currentmodetext.innerHTML = "Enable LightMode";
      ShowAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtills - Home Dark Mode";
    } else {
      SetMode("light");
      document.body.style.background = "#fff";
      currentmodetext.innerHTML = "Enable DarkMode";
      ShowAlert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtills - Home Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar Mode={Mode} ToggleMode={ToggleMode} />
      <Alert Alert={alert} />
      {/* <Switch> */}
      {/* <Route path="/About"> */}
      {/* <About /> */}
      {/* </Route> */}
      {/* <Route path="/"> */}
      <TextForm
        heading="Enter The Text To Analyze Below"
        Mode={Mode}
        ShowAlert={ShowAlert}
      />
      {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
