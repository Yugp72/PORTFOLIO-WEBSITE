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
              Focus on Cloud Computing, Virtualization, Operating Systems, and Distributed Systems.
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
              Facilitated Cloud Computing coursework, helped students with projects, assisted grading, and managed course logistics for 80+ students.
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
            <p>
              Improved app performance by 25%, developed mobile versions with Stripe/Paytm integration, and implemented Firebase backend with 99.9% uptime.
            </p>
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
              Core courses in Cloud, OS, DBMS, ML, and Blockchain with a strong academic foundation.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
