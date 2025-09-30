import React from "react";
import '../assets/styles/Project.scss';
import awsLogo from '../assets/images/aws.png';

const Certification: React.FC = () => {
  return (
    <div className="projects-container" id="certifications">
      <h1>Certifications</h1>
      <div className="projects-grid">

       <div className="project">
          <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/d2c6fba7619c4a1fbaed8c324116e3cd" target="_blank" rel="noopener noreferrer">

  <div className="hackathon-header">
    <img src={awsLogo} alt="AWS Logo" className="hackathon-logo" />
    <div>
      <h2>AWS Certified Solutions Architect - Associate</h2>
      <h4>Issued August 2026</h4>
    </div>
  </div>
  <p>
    Built and deployed secure, highly available AWS solutions using EC2, S3, RDS, and VPC.
    Applied cost optimization strategies including lifecycle rules, auto scaling, and storage tiering.
  </p>
  </a>
</div>


 <div className="project">
          <a href="https://www.credly.com/badges/dfd8d77e-3797-4540-8314-3e86f90f122a/public_url" target="_blank" rel="noopener noreferrer">

        <div className="hackathon-header">
    <img src={awsLogo} alt="AWS Logo" className="hackathon-logo" />
    <div>
      <h2>AWS Academy Graduate - Cloud Foundations</h2>
      <h4>Issued October 2023</h4>
    </div>
  </div>
  <p>
    Gained foundational knowledge of AWS Cloud concepts, services, and best practices.
      </p>
  </a>
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

export default Certification;


// import React from "react";
// import stanfordLogo from '../assets/images/llmlogo.png';
// import chainlinkLogo from '../assets/images/chainlink.jpeg';
// import awsLogo from '../assets/images/aws.png';
// import '../assets/styles/Project.scss';

// const Certification: React.FC = () => {
//   return (
//     <div className="projects-container" id="hackathons">
//       <h1>Certifications</h1>
//       <div className="projects-grid">

//        <div className="project">
//           <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/d2c6fba7619c4a1fbaed8c324116e3cd" target="_blank" rel="noopener noreferrer">

//   <div className="hackathon-header">
//     <img src={awsLogo} alt="AWS Logo" className="hackathon-logo" />
//     <div>
//       <h2>AWS Certified Solutions Architect - Associate</h2>
//       <h4>Issued August 2026</h4>
//     </div>
//   </div>
//   <p>
//     Built and deployed secure, highly available AWS solutions using EC2, S3, RDS, and VPC.
//     Applied cost optimization strategies including lifecycle rules, auto scaling, and storage tiering.
//   </p>
//   </a>
// </div>


//  <div className="project">
//           <a href="https://www.credly.com/badges/dfd8d77e-3797-4540-8314-3e86f90f122a/public_url" target="_blank" rel="noopener noreferrer">

//         <div className="hackathon-header">
//     <img src={awsLogo} alt="AWS Logo" className="hackathon-logo" />
//     <div>
//       <h2>AWS Academy Graduate - Cloud Foundations</h2>
//       <h4>Issued October 2023</h4>
//     </div>
//   </div>
//   <p>
//     Gained foundational knowledge of AWS Cloud concepts, services, and best practices.
//       </p>
//   </a>
// </div>

        

        
//       </div>

//       <style>{`
//         .hackathon-header {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 12px;
//         }

//         .hackathon-logo {
//           width: 40px;
//           height: 40px;
//           border-radius: 6px;
//           object-fit: cover;
//         }

//         .project h2 {
//           font-size: 1.15rem;
//           margin: 0;
//         }

//         .project h4 {
//           font-weight: 500;
//           color: gray;
//           font-size: 0.9rem;
//           margin: 4px 0 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Certification;
