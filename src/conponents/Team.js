import React from "react";
import img from "../vishal.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "vishal bharam",
      position: "CA",
      info: "Vishal Bharam, a Chartered Accountant and the Founder of Bharam Associates, provides expert tax advice and strategic financial solutions. With a wealth of experience in the industry, he leads our team in delivering exceptional results to clients.",
      // image: teamMember2Img,
    },
    {
      name: "vishal bharam",
      position: "CA",
      info: "Vishal Bharam, a Chartered Accountant and the Founder of Bharam Associates, provides expert tax advice and strategic financial solutions. With a wealth of experience in the industry, he leads our team in delivering exceptional results to clients.",
      // image: teamMember2Img,
    },
    {
      name: "vishal bharam",
      position: "CA",
      info: "Vishal Bharam, a Chartered Accountant and the Founder of Bharam Associates, provides expert tax advice and strategic financial solutions. With a wealth of experience in the industry, he leads our team in delivering exceptional results to clients.",
      // image: teamMember2Img,
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Our Team</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col">
            <div className="card h-100 border-0 shadow-sm">
              <img src={img} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title fw-bold mb-0">{member.name}</h5>
                <p className="card-text text-muted mb-1">{member.position}</p>
                <p className="card-text">{member.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// export default Team;

export default Team;
