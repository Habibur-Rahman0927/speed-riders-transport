import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import LogIn from './Component/LogIn/LogIn';
import React, { createContext, useState } from 'react';
import Private from './Component/Private/Private';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Private path='/destination/:id'>
            <Destination></Destination>
          </Private>
          <Private path='/destination'>
            <Destination></Destination>
          </Private>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
