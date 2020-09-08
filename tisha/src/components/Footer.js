import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer class="page-footer">
            <h3 class="footer-copyright text-center py-3">
                <a href={'https://github.com/lnair1997'} target="_blank" rel="noopener noreferrer" class="footer-link"><FaGithub /></a>
                <a href={'https://www.linkedin.com/in/lathishanair/'} target="_blank" rel="noopener noreferrer" class="footer-link"><FaLinkedin /></a>
            </h3>
            <FaLinkedin />
            
        </footer>
    );
}

export default Footer;