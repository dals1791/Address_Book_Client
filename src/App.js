import React from 'react'
import { Route, Switch, Link } from "react-router-dom";
import Auth from './components/login/Auth'
import './styles/App.css';
import NavBar from './components/navbar/nav'
import Landing from "./components/pages/landing/landing"
import Connections from "./components/pages/connections"
import UserProfile from "./components/pages/userProfile"
import Topbar from './components/topbar/Topbar'


function App() {
  const [users, setUsers] = React.useState(null)
  
   
  
    return (
    
    <div className="App">
      <header className="App-header-container">

      </header>
      <div className="App-Body-Container">
      <Switch>
          <Route  exact path="/">
            <Auth/>
          </Route>
          <Route  path="/landing">
            <Landing/>
          </Route>
          <Route  path="/connections">
            <Connections/>
          </Route>
          <Route  path="/userprofile">
            <UserProfile/>
          </Route>
        
        </Switch>
        </div>
        
        <div className="App-footer-container">
        <NavBar/>
        </div>
    </div>
    
  );
}

export default App;
