import React, { Component } from 'react';
import './Layout.css';
import Menu from '../styles/components/Menu.js';
import Banner from '../styles/components/Banner.js';
import BottomNav from '../styles/components/BottomNav';

import Home from '../styles/pages/Home.js';
import GridPage from '../styles/pages/GridPage.js';

import { BrowserRouter, Route } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
     <BrowserRouter>
      <div className="App">
        <header>
            <Banner />
            <Menu />
        </header>
        <main>
       <Route exact path="/" component={Home}/>
       <Route path="/grid" component={GridPage}/>
        </main>
        <footer>
         <BottomNav />
        </footer>
       </div>
      </BrowserRouter>

    );
  }
}

export default Layout;
