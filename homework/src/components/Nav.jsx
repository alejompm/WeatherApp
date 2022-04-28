import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link, Route} from 'react-router-dom';
function Nav({onSearch}) {
  return (
  
  <nav class="navbar navbar-light bg-light">
  <Link to="/">
  <img src={Logo}/>
  </Link>
  <Link to="/">
  <a class="navbar-brand">Weather App</a>
  </Link>

  <form class="form-inline">
   <Route path='/' exact render={()=> <SearchBar onSearch={onSearch}/> } />
    {/* </form>/<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
  </nav>
  );
};

export default Nav;
