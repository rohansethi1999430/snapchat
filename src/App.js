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
import ChatView from './ChatView';

function App() {
  return (
    <div className="app">
     
      <Router>
      <div className="app__body">
        
      


        <Switch>
        <Route exact path="/chats/view">
          <ChatView/>
        </Route>
        <Route exact path="/chats">
          <Chats/>
        </Route>

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
