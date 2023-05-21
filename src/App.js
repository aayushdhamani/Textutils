import { useState } from "react";
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState("");
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setalert(null)
  }, 3000);


  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  // }
  const toggleMode = () => {
    // console.log(cls);
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
  
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#b4b4d8";
      showAlert("Dark mode is Enabled","success")
// document.title='textutils-dark mode is enabled';

} else {
  setmode("light");
  document.body.style.backgroundColor = "white";
  showAlert("Light mode is Enabled","success")
  // document.title='textutils-Light mode is enabled';
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="Textutils"
        AboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Textform heading="Try TextUtils-Word Counter, character Counter, Remove extra spaces" mode={mode} />}/>
        
        </Routes>
        
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
