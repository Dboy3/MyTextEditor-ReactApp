import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import About from './Components/About'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TextForm from '../../../tut5/Components/TextForm';

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
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // issey barabr dekhna bhai 
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Darkmode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Darkmode disabled", "success");
    }
  }

  return (
    <BrowserRouter>
      <Navbar title="TextUtils"
        aboutText="About TextUtils"
        mode={`${mode}`}
        togglemode={toggleMode}>
      </Navbar>
      {/* <About></About> */}
      <Alert alert={alert} />


      <Routes>
        <Route path='/' element={<TextForm />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
