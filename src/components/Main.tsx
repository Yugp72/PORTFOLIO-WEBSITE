import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="" alt="Avatar" /> */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Yugp72" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yugp7202/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>

          </div>
          <h1>Yug Patel</h1>
          <p>Software Development Engineer</p>
          {/* <p className="tagline">
  Passionate about building scalable cloud platforms and intelligent systems. Specializing in multi-cloud DevOps, backend APIs, and real-time applications.
</p> */}

          <div className="mobile_social_icons">
            <a href="https://github.com/Yugp72" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yugp7202/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;