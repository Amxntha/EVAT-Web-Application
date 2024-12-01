import React, { Component } from 'react'

import './home.css';
import logo1 from '../static/a1.png';
import logo2 from '../static/a2.png';
import logo3 from '../static/a3.png';

import logo4 from '../static/a4.png';
import logo5 from '../static/a5.png';
import logo6 from '../static/a6.png';
import { useNavigate } from 'react-router-dom';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// function handleButtonClick() {
//   const navigate = useNavigate();
//   navigate('/createAccount');
// }

export default class home extends Component {
  render() {
    return (
      <div className='home bg'>

        <div className="logo">
          <div className="logoImg logo1">
            <img src={logo1} />
          </div>
          <div className="logoImg logo2">
            <img src={logo2} />
          </div>
          <div className="logoImg logo3">
            <img src={logo3} />
          </div>
        </div>

        <div className="title">
          Unlock access to all charging stations with just a free account!
        </div>


        <div className="btns">

          <div className='btn'>
            <img src={logo4} />
            Sign In  With Apple ID 
          </div>

          <div className='btn'>
            <img src={logo5} />
            Sign In With Microsoft Account
          </div>

          <div className='btn'>
            <img src={logo6} />
            Sign In With Google
          </div>
        </div>


        <div className="newHere">
          New here? Sign up now
        </div>


        
          <Link to="/createAccount"  className='Signup'>  Sign up! </Link>
        

      </div>
    )
  }
}
