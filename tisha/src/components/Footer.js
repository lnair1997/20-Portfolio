import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumePDF from "../lathisha-novoresume.pdf";

function Footer() {
    return (
        <footer className="page-footer">
            <h4 className="footer-copyright text-center py-3">
                <a href={'https://github.com/lnair1997'} target="_blank" rel="noopener noreferrer" className="footer-link"><FaGithub /></a>
                <a href={'https://www.linkedin.com/in/lathishanair/'} target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin /></a>
                <a href={resumePDF} download={true} className="footer-link"><button className="btn btn-outline-secondary footer-link">RESUME</button></a>
            </h4>
        </footer>
    );
}

export default Footer;