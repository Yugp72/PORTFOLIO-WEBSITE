import React from "react";
import stanfordLogo from '../assets/images/llmlogo.png';
import chainlinkLogo from '../assets/images/chainlink.jpeg';
import awsLogo from '../assets/images/aws.png';
import '../assets/styles/Project.scss';

const Hackathon: React.FC = () => {
  return (
    <div className="projects-container" id="hackathon">
      <h1>Hackathon Achievements</h1>
      <div className="projects-grid">

        <div className="project">
          <div className="hackathon-header">
            <img src={awsLogo} alt="AWS Logo" className="hackathon-logo" />
            <div>
              <h2>Cloudathon by AWS</h2>
              <h4>San Jose State University, San Jose, CA — April 26, 2025</h4>
            </div>
          </div>
          <p>
            Designed a cloud-native platform to optimize AWS cost using lifecycle rules, autoscaling groups, and S3 tiering strategies.
          </p>
        </div>


        <div className="project">
          <div className="hackathon-header">
            <img src={stanfordLogo} alt="Stanford Logo" className="hackathon-logo" />
            <div>
              <h2>LLM x Law Hackathon #5</h2>
              <h4>Stanford University, Palo Alto, CA — April 6, 2025</h4>
            </div>
          </div>
          <p>
            Developed a mobile application which delivered bedtime stories to children using augmented reality.
          </p>
        </div>

        <div className="project">
          <div className="hackathon-header">
            <img src={chainlinkLogo} alt="Chainlink Logo" className="hackathon-logo" />
            <div>
              <h2>Top 20 – Chainlink Hackathon</h2>
              <h4>Online — May 2023</h4>
            </div>
          </div>
          <p>
            Built a blockchain casino game using Chainlink VRF and Solidity to ensure provable fairness on Polygon Testnet.
          </p>
        </div>

        
      </div>

      <style>{`
        .hackathon-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .hackathon-logo {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          object-fit: cover;
        }

        .project h2 {
          font-size: 1.15rem;
          margin: 0;
        }

        .project h4 {
          font-weight: 500;
          color: gray;
          font-size: 0.9rem;
          margin: 4px 0 0;
        }
      `}</style>
    </div>
  );
};

export default Hackathon;
