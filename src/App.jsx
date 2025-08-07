import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
//react router (code from chat gpt)

// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); //weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = `rgb(0 45 77)`;
      showAlert("Dark mode has been enabled", "success");
      document.title = "TectUtils - Dark Mode";
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = `#FFFF`;
      showAlert("light mode has been enabled", "success");
      document.title = "TectUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Navbar /> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4">
        {/* <Routes> */}
        {/* <Route
            path="/"
            element={ */}
        <TextForm
          heading="Enter Your Text Below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* }
           /> */}
        {/* <Route path="/about" element={<About mode={mode}/>} /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
