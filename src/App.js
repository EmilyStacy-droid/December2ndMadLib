import {madlibForm} from './madlibForm';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




export const App = () => 
   <>
<Router>
<div className="mt-3">
  <h1 className = "text-center">Emily's Madlib</h1>
  <Route path = "/" component = {madlibForm} />
  </div>
  </Router>
   </>