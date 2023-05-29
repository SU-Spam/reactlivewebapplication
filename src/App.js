import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import Time from './components/Time';
import Errorpage from './components/Errorpage';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#adab9e"
      document.title="TextUtils Enable DarkMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      document.title=" TextUtils Enable LightMode"
    }
  }
  return (
    <>
      <Router>
          <Navbar title="TEXTUTILS" about="About" mode={mode} toggleMode={toggleMode} />
          <div className='container my-3'>
              <Alert alert="Hi Mr.Umair Sheikh ! Your TextUtils App is ready to use."/>
          </div>
      <Switch>
      <Route exact path="/">
      <Textform heading="Enter The Text To Analyze"/>
      </Route>
      <Route exact path="/about">
       <About/>
      </Route>
      <Route exact path="/errorpage">
       <Errorpage/>
      </Route>

        <Route exact path="/" component={Textform} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    <div className='container my-3'>
      <Time/>
    </div>
    
    </>
  );
}

export default App;

