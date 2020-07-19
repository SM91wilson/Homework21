import React from 'react';
import Navbar from './components/navbar/navbar';
import Title from './components/Title/title';
import Saved from './pages/savedpage';
import Search from './pages/searchpage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route>
        <Navbar />
        <Title />
      </Route>
      <Switch>
        <Route path='/' component={Saved}/>
        <Route path='/search' component={Search}/>
      </Switch>
    </Router>
  );
}

export default App;
