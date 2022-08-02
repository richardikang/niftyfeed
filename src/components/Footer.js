import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="site-footer">
            <ul className="list-unstyled">
                 <li><Link to='/'>Home</Link></li>
                 <li><Link to='/about'>About</Link></li>
                 <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;