import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setmode] = useState("light");
  const [alert,setAlert] = useState(null);


  const togglemode = () =>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("DarkMode enabled","success");
      document.title = "Text-Utils DarkMode";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "White";
      showAlert("LightMode enabled","success");
      document.title = "Text-Utils LightMode";
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }

  return (
    
    <>

    {/* <Router> */}
    <Navbar title = "Gopal" mode = {mode} togglemode = {togglemode} abouttext="About Us"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>
        {/* <Routes>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/' element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>} />
        </Routes> */}
        
    </div>
    {/* </Router> */}

    </>
    
  );
}

export default App;
