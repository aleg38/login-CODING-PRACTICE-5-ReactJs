// Write your code here

import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onClickBtn = () => {
    this.setState(prevValue => ({isLogin: !prevValue.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="home-page-container">
        <div className="card-container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout logout={this.onClickBtn} />
          ) : (
            <Login login={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
