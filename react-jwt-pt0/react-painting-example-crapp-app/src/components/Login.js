import React from 'react';
import Api from '../services/api'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      isInvalid: false
    }
  }
  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit(e){
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/api/v1/auth', reqObj)
      .then( resp => resp.json())
      .then( data => {
        if(data.error) {
          this.setState({
            isInvalid: true
          })
        } else {
          this.props.handleLogin(data)
          this.props.history.push('/')
        }
      })
  }

  render(){
    console.log('login', this.props)
    return (
      <div>
        <h3>Sign in</h3>
        { this.state.isInvalid ? <h6>Username or Password doesn't match</h6> : null}
        <form onSubmit={(e) => this.handleFormSubmit(e) }>
          <input name={'username'} onChange={(e) => this.handleInputChange(e)} value={this.state.username} />
          <input name={'password'} onChange={(e) => this.handleInputChange(e)} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
      </div>
    );
  }
}

export default Login;
