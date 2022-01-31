import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header({ isMenuOpen, setIsMenuOpen }) {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/" >
                    <img 
                    className="header-logoImg"
                    src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
                    alt="" 
                    />
                </Link>
            </div>
            <div className="header-links">
                <Link to='/'>Model S</Link>
                <Link to='/'>Model 3</Link>
                <Link to='/'>Model X</Link>
                <Link to='/'>Model Y</Link>
                <Link to='/'>Solar Roof</Link>
                <Link to='/'>Solor Panels</Link>
            </div>
            <div className="header-right">
                <Link to='/' className={isMenuOpen && 'header-link--hidden'}>
                    Shop
                </Link>
                <Link to='/Login' className={isMenuOpen && 'header-link--hidden'}>
                    Tesla Account
                </Link>
                <div className="header-menu" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}  
                </div> 
            </div>
        </div>
    )
}

export default Header
