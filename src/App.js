import React, { Component } from 'react';
import './App.css';
import Header from './pagedraw/header';
import GuitarLink from './pagedraw/maincontent_deptcat_guitar';
import BassLink from './pagedraw/maincontent_deptcat_bass';
import DrumLink from './pagedraw/maincontent_deptcat_drums';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import AmpLink from './pagedraw/maincontent_deptcat_amp';
import LiveLink from './pagedraw/maincontent_deptcat_livesound';
import RecordLink from './pagedraw/maincontent_deptcat_recording';
import KeyLink from './pagedraw/maincontent_deptcat_keys';
import AccessoryLink from './pagedraw/maincontent_deptcat_accessories';
import MicLink from './pagedraw/maincontent_deptcat_mic';
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
