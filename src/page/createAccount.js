import React, { Component } from 'react'

import './createAccount.css';

import logo1 from '../static/b1.png';
import logo2 from '../static/b2.png';
import logo3 from '../static/b3.png';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default class createAccount extends Component {
  render() {
    return (
      <div className="createAccount bg2">

        <div className='he100'></div>
        <img src={logo1} className='logo1' />


        <div className='title'>Create Account </div>

        <div className='inpBox'>

          <div className='inp'>
            <img src={logo2} />
            <input placeholder='Email' />
          </div>

          <div className='inp'>
            <img src={logo3} />
            <input placeholder='password' />
          </div>

        </div>



        <Link to="/addCard" className='next'>  Next </Link>


        <div className='text'>Privacy policy  </div>

        <div  className='text'>Terms & Conditions </div>






      </div>
    )
  }
}
