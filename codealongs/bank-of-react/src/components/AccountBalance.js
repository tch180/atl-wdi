import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'


///////////////
//Account Balance
///////////////

class AccountBalance extends Component {
  state = {
    redirectToHome: false,
    debits: [],
    credits: [],
  }

  saveSomething = () => {
    console.log('Clicked')
    setTimeout(() => {
      this.setState({redirectToHome: true})
    }, 1500)
  }
///////////////
//  Debits 
///////////////
    _getDebits =() => {
    axios.get('http://localhost:4000/debits',{
    }).then((res)=>{
        const debits = res.data;
        console.log(res.data)
        this.setState({debits})
    })
}
//////////////
// Credits
///////////////
_getCredits =() => {
    axios.get('http://localhost:4000/credits',{
    }).then((res)=>{
        const credits = res.data;
        console.log(res.data)
        this.setState({credits})
    
    
    })

console.log('error')
}

componentWillMount() {
    this._getDebits();
    this._getCredits();
  }

  render () {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Your balance is {this.props.accountBalance}</h1>
        <button onClick={this.saveSomething}>Redirect Button</button>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default AccountBalance