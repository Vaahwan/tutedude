import React from 'react';
import logo from '../assets/logo.png'
import vector from '../assets/avatar.png'
import icon from '../assets/downarrow.png'
import './Navbar.css'

function Navbar(props) {
    return (
        <>
        <div id="container">

            <div id='logo'>
                <img  src={logo} alt="logo-img" />
            </div>


        
                <ul>

                    <li className='tohide' >
                        <a href='#'>My Assignment</a>
                    </li>

                    <li className='tohide' >
                    <a href='#'>Chat with Mentor</a>
                    </li>

                    <li id="last-div" style={{color:"#800080"}}>  
                            <img style={{width:"20px", height:"20px", fontFamily: 'Poppins', margin:"auto 6px"}} src={vector} alt="Profile-picture-icon" />
                            ProfileName
                            <img style={{width:"12px", height:"7.41px", margin:"10px 10px 10px 10px"}} src={icon} alt="Drop-down-icon" />
                    </li>

                </ul>
            
        </div>
        <div id="nav-bottom">
            <p  id="nav-bottom-text">UI/UX {'>'} Refer & Earn {'>'} Friends Referred </p>
        </div>
        </>
    );
}

export default Navbar;