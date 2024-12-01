import React, { Component } from 'react'


import c2 from '../static/c2.png';
import c3 from '../static/c3.png';

import './addCard.css';


export default class addCard extends Component {
    render() {
        return (
            <div className='addCard bg3'>
                <div className='he100'></div>
                <img className='logo' src={c2} />

                <div className='txt1'>
                    Add Your Electric Vehicle
                </div>


                <div className='txt2'>
                    Your  vehicle is used to assess the compatibility of  charging stations.
                </div>


                <div className='inpBox'>

                    <div className='inp'>
                        <input placeholder='Email' value="Add your Vehicle" />
                    </div>

                    <div className='inp'>
                        <input placeholder='password' value="Vehicle type?" />
                    </div>


                    <div className='txt3'>
                        Select charging port type
                    </div>


                    <div className='select'>
                        <select id="cars">
                            <option value="Options">Options</option>
                            <option value="audi">奥迪</option>
                            <option value="byd">比亚迪</option>
                            <option value="geely">吉利</option>
                            <option value="volvo">沃尔沃</option>
                        </select>
                    </div>



                </div>

                <i className='txt4'>Vehicles year of manufacture:</i>


                <div className='txt5'>
                    Jun 10, 2024
                </div>


                <div className='txt6'>
                    skip for now <span></span>
                </div>

                <div className='txt7'>
                 Proceed
                </div>

                <img className='c3' src={c3} />




            </div>
        )
    }
}
