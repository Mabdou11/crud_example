import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddBox} from './components/AddBox';
import {EditBox} from './components/EditBox';
import {GlobalProvider} from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return(
    <div className="App">
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path= "/" component={Home}/>
            <Route path= "/add" component={AddBox}/>
            <Route path= "/edit/:id" component={EditBox}/>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
    )
  }

export default App;