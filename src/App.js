
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }

  }
  return (
    <>
      {/* {<Navbar/>} */}
      {/* <Router> */}
        <Navbar title="Utility" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>} /> */}
            {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} /> */}
            <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
            {/* <About/> */}
          {/* </Routes> */}
        {/* </div>
      </Router> */}
    </div>
    </>
  );
}

export default App;
