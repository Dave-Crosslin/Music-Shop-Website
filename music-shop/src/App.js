import React, { Component } from 'react';
import './App.css';
import Menu from './styles/components/Menu.js';
import Banner from './styles/components/Banner.js';
import Home from './Home.js';
import BottomNav from './styles/components/BottomNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <Banner />
            <Menu />
        </header>
        <main>
         <Home />
        </main>
        <footer>
         <BottomNav />
        </footer>
      </div>


    );
  }
}

export default App;
