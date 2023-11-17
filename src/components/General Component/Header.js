import React, { useState } from 'react'
import logo from "../../images/Group.png"
import message from "../../images/message-square.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const Navigate = useNavigate();
    const scrollToElement = () => {
        const element = document.getElementById('contact');
    
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [listClicked , setListClicked] = useState(false);
    function listClick(){
        setListClicked(!listClicked)
    }
  return (
    <div className='header col-12 d-flex  component'>
        <div className='logo col-3 col-md-2'>
            <img src={logo} className='img-fluid' />
        </div>
        <div className={`nav-bar col-7 col-md-8 ${listClicked?`mobile-list`:`none`}`}>
            <div className='links m-auto'>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/ourproject">Our Project</NavLink>
                <NavLink to="/ourproess">Our Process</NavLink>
                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/about">About US</NavLink>
            </div>
        </div>
        <div className='hire' onClick={()=>Navigate("/join")}>
            <img src={message} className='img-fluid'/>
            <p>Hire US</p>
        </div>
        <div className='list-button d-md-none' >
            <FontAwesomeIcon icon={faHamburger} onClick={()=>listClick()}/>
        </div>
    </div>
  )
}

export default Header