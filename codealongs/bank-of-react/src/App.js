import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import AccountBalance from './components/AccountBalance';
import axios from 'axios';



class App extends Component {
  state = {
    user: {
      userName: "bob",
      memberSince: 1950
    },
    accountBalance: 87345.34
  }  
  
  
  
  render(){
  const AccountBalanceWrapper = () =>{
    return(<AccountBalance accountBalance={this.state.accountBalance} />)
  }
  const UserProfileWrapper =() =>{
    return(<UserProfile userName={this.state.user.userName} memberSince={this.state.user.memberSince} />)
  }
  
  
    return (
      <Router>
      <Switch>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/account" render={AccountBalanceWrapper}/>
        <Route exact path="/:user" render={UserProfileWrapper}/>
        </Switch>
      </Router>
    )
  }
}
export default App;