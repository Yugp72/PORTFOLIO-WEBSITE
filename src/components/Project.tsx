import React from "react";
import mock11 from '../assets/images/chatbot.png'; // Security Robot
import mock12 from '../assets/images/dashboard.png'; // Multi-cloud
import mock13 from '../assets/images/live.png'; // Live streaming
import mock14 from '../assets/images/Frame 203.jpg'; // Hostel platform
import mock15 from '../assets/images/casino-1.png'; // Web3 games
import mock16 from '../assets/images/cloud.png'; // Security Robot

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://github.com/Yugp72/CAAS---Chatbot-As-A-Service" target="_blank" rel="noreferrer">
                        <img src={mock11} className="zoom" alt="Chatbot-as-a-Service (CaaS) Platform" width="100%" />
                    </a>
                    <a href="https://github.com/Yugp72/CAAS---Chatbot-As-A-Service" target="_blank" rel="noreferrer">
                        <h2>Chatbot-as-a-Service (CaaS) Platform</h2>
                    </a>
                    <p>Architected an RAG-based enterprise chatbot enabling document ingestion, vector search, and LLM-driven answers (90%+ accuracy); enhanced scalability with backend alignment, CI/CD integration, and robust testing.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/AvinashSaxena777/SSRCP-CMPE281" target="_blank" rel="noreferrer">
                        <img src={mock16} className="zoom" alt="Security Robot Project" width="100%" />
                    </a>
                    <a href="https://github.com/AvinashSaxena777/SSRCP-CMPE281" target="_blank" rel="noreferrer">
                        <h2>Security Patrol Robot Cloud Platform</h2>
                    </a>
                    <p>Cloud-based platform integrating CARLA simulator, YOLOv8, and AWS (EC2, S3, Cognito) for real-time autonomous robot patrol, anomaly detection, and mission planning using Flask, Node.js, and microservices.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/Yugp72/Multi-Cloud-Platform" target="_blank" rel="noreferrer">
                        <img src={mock12} className="zoom" alt="Multi-Cloud Platform" width="100%" />
                    </a>
                    <a href="https://github.com/Yugp72/Multi-Cloud-Platform" target="_blank" rel="noreferrer">
                        <h2>Multi-Cloud Resource Manager</h2>
                    </a>
                    <p>Developed a unified platform using Golang, Terraform, and Next.js to manage AWS, GCP & Azure resources. Enabled cost-effective multi-cloud operations with a clean UI and secure API integration.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/Yugp72/live-streaming-platform-golang" target="_blank" rel="noreferrer">
                        <img src={mock13} className="zoom" alt="Live Streaming Platform" width="100%" />
                    </a>
                    <a href="https://github.com/Yugp72/live-streaming-platform-golang" target="_blank" rel="noreferrer">
                        <h2>Live Streaming Platform</h2>
                    </a>
                    <p>Built a scalable PaaS for live/recorded video streaming with RTMP and HLS protocols. Reduced buffering and improved cross-region performance by 50% using distributed architecture.</p>
                </div>

               <div className="project">
                <a href="https://github.com/Yugp72/Hostel-Management-System" target="_blank" rel="noreferrer">
                    <div className="image-wrapper-white">
                    <img src={mock14} className="zoom" alt="Hostel Management Platform" width="100%" />
                    </div>
                </a>
                <a href="https://github.com/Yugp72/Hostel-Management-System" target="_blank" rel="noreferrer">
                    <h2>Feels Like Home</h2>
                </a>
                <p>
                    Next.js + Node.js system for hostel housekeeping, meal slot scheduling, and student management. GraphQL backend with MySQL and JWT authentication enabled 30% efficiency boost.
                </p>
                </div>


                <div className="project">
                    <a href="https://github.com/jevinjivani2507/casino-web3" target="_blank" rel="noreferrer">
                        <img src={mock15} className="zoom" alt="Web3 Blockchain Casino" width="100%" />
                    </a>
                    <a href="https://github.com/jevinjivani2507/casino-web3" target="_blank" rel="noreferrer">
                        <h2>Web3 Blockchain Casino</h2>
                    </a>
                    <p>Developed a decentralized casino with Next.js, Tailwind, and Solidity smart contracts on Polygon Testnet. Used ChainLink VRF for provably fair gameplay for craps and baccarat games.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;
