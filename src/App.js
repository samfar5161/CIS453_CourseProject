import React, { Component } from 'react';
import './App.css';
import Header from './Header';

import GuitarLink from './pagedraw/maincontent_deptcat_guitar';
import BassLink from './pagedraw/maincontent_deptcat_bass';
import DrumLink from './pagedraw/maincontent_deptcat_drums';
import {Route, NavLink, HashRouter} from 'react-router-dom';

import Guitarcontent from './pagedraw/guitarcontent_maincontainer';
import Basscontent from './pagedraw/basscontent_maincontainer';

class App extends Component {
  constructor(props){
    super()


  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <div className="Header">
              <Header/>
            </div>
            <div className="Navigation">
              <ul className="navList1">
                <li><NavLink to="/pagedraw/guitarcontent_maincontainer"><GuitarLink/></NavLink></li>
                <li><NavLink to="/pagedraw/basscontent_maincontainer"><BassLink/></NavLink></li>
                <li><DrumLink/></li>
              </ul>
              </div>
              <div className="content1">
                <Route path="/pagedraw/guitarcontent_maincontainer" component={Guitarcontent}/>
                <Route path="/pagedraw/basscontent_maincontainer" component={Basscontent}/>
              </div>
            </div>
          </HashRouter>
        </div>
    );
  }
}

export default App;
