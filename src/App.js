import React from 'react'
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';
import logo from './logo.svg';
// import './App.css';
import About from './Component/About';
import { useState } from 'react';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#4986cb'
      showAlert('Dark Mode Enable', 'success')
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enable', 'success')
    }
   
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (massage, type)=>{
   setAlert({
    msg: massage,
    type: type
   })
   setTimeout(()=>{
    setAlert(null)
   }, 2000)
  }
  
  return (
    <>
    <Router>
    <NavBar name = 'Harun Malik' about = 'About Me' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <NavBar /> */}
   <div className='container my-2'>
   <Switch>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
          </Route>
      </Switch>
   </div>
   </Router>
   
    </>
  );
}

export default App;
