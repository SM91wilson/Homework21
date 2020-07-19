import React from 'react';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route>
        <Navbar>
        </Navbar>
      </Route>
    </Router>
  );
}

export default App;
