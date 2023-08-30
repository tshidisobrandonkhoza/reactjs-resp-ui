import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';
import '../assets/css/Navbar.css';
import Button from './Button';

function Navbar() {
    //declare state
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //handle a state click Menu
    const handleClickMenu = () => setClick(!click);
    //handle a state close Menu
    const closeMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton()
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMenu}>
                        KHOZA <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClickMenu}>
                        <i className={click ? ' fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-items'>
                            <Link to='/' className='nav-Links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/about' className='nav-Links' onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/services' className='nav-Links' onClick={closeMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/products' className='nav-Links' onClick={closeMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/contact' className='nav-Links' onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/sign-up' className='nav-Links-mobile' onClick={closeMenu}>
                                Sign-Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up </Button>}
                </div>
            </nav >
        </>
    )
}

export default Navbar
