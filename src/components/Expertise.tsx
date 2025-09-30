import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Golang",
    
    "Node.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "GraphQL",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "React.js"

];

const labelsSecond = [
    "AWS",
    "GCP",
    "Azure",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Ansible",
    "GitHub Actions",
    "Linux"
];

const labelsThird = [
    "Flutter",
    "Dart",
    "Firebase",
    "Stripe SDK",
    "Paytm SDK",
    "Xcode",
    "Android Studio",
    "Firestore",
    "Firebase Auth",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack & Web Development</h3>
                        <p>Built responsive platforms using Next.js, Node.js, and GraphQL. Experienced in developing secure, scalable systems like hostel and video streaming platforms with strong frontend and backend integration.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faAws} size="3x" />
                        <h3>Cloud & DevOps</h3>
                        <p>Skilled in deploying infrastructure on AWS, GCP, and Azure. Designed automation with Terraform, Ansible, and Docker, and implemented CI/CD pipelines to enable robust DevOps practices.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMobileAlt} size="3x" />
                        <h3>Flutter & Mobile Development</h3>
                        <p>Built and optimized cross-platform mobile applications using Flutter and Dart. Integrated secure payments with Stripe and Paytm, and deployed backend services using Firebase for real-time data and authentication.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
