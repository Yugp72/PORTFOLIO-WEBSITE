import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import resumeIcon from '../assets/images/cv.png';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Yugp72" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/yugp7202/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
    
        {/* image of resume */}
        {/* <a 
    href="https://drive.google.com/file/d/1gk1bX6Hk2rYk3iQm8F7cX9KXl5bX9Zt5/view?usp=sharing" 
    target="_blank" 
    rel="noreferrer"
  >
    <img src={resumeIcon} alt="Credential Link" className="credential-icon" />
      </a> */}


      </div>
      <p>A portfolio designed & built by <a href="" target="_blank" rel="noreferrer">Yug Patel</a></p>
    </footer>
  );
}

export default Footer;