import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from "./button";
import './navbar.css';

function NavBar() {
    // Default setting for burger menu
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    //  Menu onClick function
    const handleClick = () => setClick (!click);

    const closeMobileMenu = () =>  setClick(false);

    // Display button on mobile
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    // Prevent button from showing up everytime page is refreshed
    useEffect(() => {
        showButton ()
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        CARBON LOOP <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/technology" className="nav-links" onClick={closeMobileMenu}>
                                Technology
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faqs" className="nav-links" onClick={closeMobileMenu}>
                                FAQs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="button--outline"> LEARN MORE</Button>}
                </div>
            </nav>
        </>
    )
}



export default NavBar