import React from "react";
import team from '../../Images/team.jpeg';
import plag from '../../Images/plag.png';

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us">
          <h1>Empowering Minds, Building Trust</h1>
          <p>
            Welcome to a space where education thrives, relationships are built on trust, and learning knows no bounds. We take pride in offering exceptional services tailored to meet your needs, ensuring a seamless experience that fosters growth and success. With a commitment to originality and a promise of trust, we aim to build lasting relationships with our users, making every interaction meaningful and reliable.
          </p>
        </div>
      </div>

      <div className="team-section">
        <div className="team-img-container">
          <img
            src={team}
            alt="Team working together"
            className="team-img"
          />
        </div>
        <div className="team-content">
          <h2>Our Dedicated Team</h2>
          <p>
          Our team is a dynamic and passionate group of individuals, each bringing unique skills and perspectives to the table. We are committed to achieving excellence in everything we do, and our dedication to growth and improvement drives us forward. Over time, we have worked on a variety of projects, both individually and as a team, which has allowed us to hone our skills and collaborate effectively.,<br></br>

While we thrive in team-based efforts, we also understand the importance of individual contributions. Each member of our team has successfully worked on their own projects, showcasing their ability to innovate and lead. Together, we seamlessly combine our diverse talents to overcome challenges, create innovative solutions, and deliver results that exceed expectations. <br></br>

Our team includes Prithvi, a backend specialist whose expertise ensures robust and efficient server-side solutions; Shayan, an API specialist who excels at building seamless and scalable integrations; and Mahnoor and Anum, talented UI/UX designers and frontend developers who create intuitive and visually stunning user interfaces. This combination of skills allows us to approach projects holistically, ensuring both functionality and design excellence.<br></br>
Our commitment to continuous learning, creativity, and hard work has allowed us to build a strong foundation of trust and success, making a lasting impact on every project we take on. </p>   </div>
      </div>

      <div className="plag-section">
        <div className="plag-content">
          <h2>Research on Plagiarism</h2>
          <p>
            <h3>Promotion of Academic Integrity</h3>
          Plagiarism detection tools help maintain academic integrity by ensuring that students and researchers submit original work. These tools detect copied material and highlight areas that need citation or rewording, encouraging users to follow proper referencing practices. According to a 2024 study, these tools contribute to better academic writing and ensure the ethical use of sources.<br/>
         <i>Reference: Teaching Commons, Stanford University. "Guidance on Technology Tools for Academic Integrity." 2024.</i></p>
          <p>
            <h3>Protection of Original Content</h3>
          Plagiarism detection tools help protect the originality of content, which is crucial for creators and researchers. These tools identify instances of copied content, helping authors safeguard their work and ensure its legal standing. A 2024 article emphasizes that such tools play a vital role in content protection and intellectual property rights.<br/>
          <i>Reference: DGAPS, "Advantages and Disadvantages of Plagiarism Checkers for Content Writers," 2024.</i>
          </p>
        </div>
        <div className="plag-img-container">
          <img
            src={plag}
            alt="Research on Plagiarism"
            className="plag-img"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
