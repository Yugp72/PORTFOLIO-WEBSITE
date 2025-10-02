import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jan 2025 – Dec 2026"
            iconStyle={{ background: 'black', color: 'currentColor', border: '2px solid currentColor' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. in Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">San Jose State University, CA</h4>
            <p>
            
              Specialized in <b>Cloud Computing</b>, <b>Virtualization</b>, <b>Operating Systems</b>, and 
              <b>Distributed Systems</b>, with hands-on experience in designing scalable cloud-native 
              applications, managing virtualized resources, and applying distributed computing principles 
              such as replication, fault tolerance, and concurrency to build reliable, high-performance systems.
            
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 – Nov 2024"
            iconStyle={{ background: 'black', color: 'currentColor', border: '2px solid currentColor' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Ahmedabad University, India</h4>
            <p>
              Assisted students in the <b>Virtualization and Cloud Computing Lab</b> under 
                <b>Prof. Sanjay Chaudhary</b>, providing guidance on <b>AWS</b>, <b>GCP</b>, 
                and <b>virtualization programming</b>, and assisted in <b>grading assignments</b> 
                and providing <b>feedback</b>.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 – Dec 2024"
            iconStyle={{ background: 'black', color: 'currentColor', border: '2px solid currentColor' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Flutter Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Mobioxy Pvt. Ltd., India</h4>
            
            <ul>
              <li>
                Engineered a full-stack system using a <b>Firebase</b> serverless backend and <b>Flutter</b> frontend, 
                boosting app responsiveness by <b>25%</b> and achieving <b>99.9%</b> uptime through optimized 
                <b>Cloud Functions</b> and a robust architecture.
              </li>
              <li>
                Built an end-to-end <b>CI/CD</b> pipeline with <b>fastlane</b>, <b>Jenkins</b>, and <b>Docker</b> 
                to automate the mobile release process, reducing setup and deployment time by over <b>20%</b> 
                by provisioning cloud infrastructure across <b>GCP</b> using <b>Terraform</b>.
              </li>
              <li>
                Integrated key features like <b>Stripe</b> and <b>Paytm</b> payment gateways, processing millions 
                of daily transactions with secure handoffs and webhook synchronization to ensure reliable order processing.
              </li>
            </ul>
            
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2020 – May 2024"
            iconStyle={{ background: 'black', color: 'currentColor', border: '2px solid currentColor' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Ahmedabad University, India</h4>
            <p>
              Completed core courses in <b>Cloud Computing</b>, <b>Operating Systems</b>, <b>DBMS</b>, 
                <b>Machine Learning</b>, and <b>Blockchain</b>, building a strong academic foundation 
                in both theoretical concepts and practical applications to design scalable, secure, 
                and data-driven systems.
              </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
