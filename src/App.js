import React from 'react';
import WebcamCapture from "./WebcamCapture";

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats'

function App() {
  return (
    <div className="app">
     
      <Router>
      <div className="app__body">
        
      <Route exact path="/chats">
          <Chats/>
          </Route>
        <Switch>


        <Route exact path="/preview">
          <Preview/>
          </Route>
          
          <Route exact path="/">
          <WebcamCapture/>
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
