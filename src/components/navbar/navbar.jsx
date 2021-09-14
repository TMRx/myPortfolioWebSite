import React from 'react'
import './navbar.scss'
import {Person,Mail} from '@material-ui/icons'

export default function navbar( {menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#hero" className='logo'>Dmytro Melnyk </a> 
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+38 097 53 53 072</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>blacklotus61540  @gmail.com</span>
                    </div>
                </div>
               
                <div className='right'>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div> 

                </div>

            </div>
            
        </div>
    )
}
