import React from 'react'
import { Route, Switch, Link , Redirect} from "react-router-dom";
import Auth from './components/login/Auth'
import './styles/App.css';
import NavBar from './components/navbar/nav'
import Landing from "./components/pages/landing/landing"
import Connections from "./components/pages/connections/connections"
import UserProfile from "./components/pages/userprofile/userProfile"
import Topbar from './components/topbar/Topbar'
import {getToken} from './authentication/AuthToken'
import AddContactInfoForm from './components/pages/userprofile/AddContactInfoForm'


function App() {
  // const [token, setToken] = React.useState(null)
  const [loggedIn, setLoggedIn]= React.useState(false)
  const token = getToken()
  const handleLoginStatus = (status)=>{
   
    if (token){
      setLoggedIn(true)
      return <Redirect to='/landing'/>
    }
    else{
      setLoggedIn(false)
      return <Redirect to='/login'/>
    }
    
  }
  React.useEffect(()=>{handleLoginStatus()}, [token])
    return (
    
    <div className="App">
      <header className="App-header-container">
      
      </header>
      <div className="App-Body-Container">
      <Switch>
          <Route  exact path="/">
           <Auth handleLoginStatus={handleLoginStatus}/>
          </Route>
          <Route  path="/landing">
            <Landing/>
          </Route>
          <Route  path="/connections">
            <Connections/>
          </Route>
          <Route  path="/userprofile">
            <UserProfile handleLoginStatus={handleLoginStatus} loggedIn={loggedIn}/>
          </Route>
          <Route  path="/updateinfo">
            <AddContactInfoForm/>
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
