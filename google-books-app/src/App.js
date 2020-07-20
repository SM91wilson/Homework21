import React from 'react';
import Navbar from './components/navbar/navbar';
import Title from './components/Title/title';
import Saved from './pages/savedpage/saved';
import SearchPage from './pages/searchpage/search';
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
        <Route path='/search' component={SearchPage}/>
      </Switch>
    </Router>
  );
}

export default App;
