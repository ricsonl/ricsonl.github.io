import React, { useState } from 'react';
import './styles.css';

const Navbar = () => {

    const [nav, setNav] = useState(false); 

    const toggleNav = () => {
        const navlinks = document.querySelector('.nav-links');
        setNav(!nav);
        if(navlinks){
            navlinks.classList.toggle('nav-active');
        }
    };

    return (
        <nav>
            <div className="logo">
                <h4>Ric</h4>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">
                        <i className="fas fa-home"></i>
                        Home
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-id-card-alt"></i>
                        Resume
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-th"></i>
                        Projects
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-comment-alt"></i>
                        Contact
                </a>
                </li>
            </ul>
            <div className="more" onClick={() => toggleNav()} >
                <i className="fas fa-arrow-left"></i>
            </div>
            <div className="cover" onClick={() => toggleNav()}></div>
        </nav>
    )
}

export default Navbar;