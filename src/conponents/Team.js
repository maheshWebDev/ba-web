import React from "react";
import img from "../vishal.jpeg";

// const Team = () => {
//   return (
//     <div className="container bootstrap p-5">
//       <section id="team" className="white-bg padding-top-bottom">
//         <div className="container bootstrap snippets bootdey">
//           <div className="text-center mb-5">
//             <h3 className="">Meet Our Team</h3>
//             <p className="lead text-muted">
//               Welcome to our talented team! We are a close-knit group of
//               professionals who are passionate about delivering exceptional
//               results. Get to know the dedicated individuals behind our projects
//               and discover the expertise that fuels our success.
//             </p>
//           </div>

//           <div className="row member-content">
//             <div className="col-sm-3 col-md-3 member-thumb">
//               <img
//                 className="img-responsive img-center img-thumbnail rounded-circle"
//                 src={img}
//                 alt=""
//               />
//               <h4>Vishal Bharam</h4>
//               <p className="title">CA &amp; Founder</p>
//             </div>
//             <div className="col-sm-9 col-md-9">
//               <div className="details">
//                 <p>
//                   Vishal Bharam, a Chartered Accountant and the Founder of
//                   Bharam Associates, provides expert tax advice and strategic
//                   financial solutions. With a wealth of experience in the
//                   industry, he leads our team in delivering exceptional results
//                   to clients.
//                 </p>
//                 <ul className="social-content">
//                   <li>
//                     <a href="mailto:mail@example.com">
//                       <i className="fas fa-envelope fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-twitter fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-facebook fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-linkedin fa-fw"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="row member-content flex-md-row-reverse">
//             <div className="col-sm-3 col-md-3 member-thumb">
//               <img
//                 className="img-responsive img-center img-thumbnail rounded-circle"
//                 src={img}
//                 alt=""
//               />
//               <h4>Aniket Shelke</h4>
//               <p className="title">Director</p> {/* Updated role */}
//             </div>
//             <div className="col-sm-9 col-md-9">
//               <div className="details">
//                 <p>
//                   Aniket Shelke serves as the Director of our creative team,
//                   bringing innovative ideas and strategic vision to our
//                   projects. With a wealth of experience in design and a passion
//                   for excellence, Aniket plays a crucial role in shaping our
//                   creative direction.
//                 </p>
//                 <ul className="social-content">
//                   <li>
//                     <a href="mailto:mail@example.com">
//                       <i className="fas fa-envelope fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-twitter fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-facebook fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-linkedin fa-fw"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="row member-content">
//             <div className="col-sm-3 col-md-3 member-thumb">
//               <img
//                 className="img-responsive img-center img-thumbnail rounded-circle"
//                 src={img}
//                 alt=""
//               />
//               <h4>Sagar Bharam</h4>
//               <p className="title">Director</p>
//             </div>
//             <div className="col-sm-9 col-md-9">
//               <div className="details">
//                 <p>
//                   Sagar Bharam, serving as a Director and Lead Developer, is a
//                   seasoned professional specializing in tax and finance
//                   advisory. With a wealth of experience, he provides invaluable
//                   insights and strategic guidance in navigating complex
//                   financial landscapes.
//                 </p>
//                 <ul className="social-content">
//                   <li>
//                     <a href="mailto:mail@example.com">
//                       <i className="fas fa-envelope fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-twitter fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-facebook fa-fw"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#link">
//                       <i className="fab fa-linkedin fa-fw"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida magna vel nulla lobortis.",
      // image: teamMember1Img,
    },
    {
      name: "Jane Smith",
      position: "CTO",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida magna vel nulla lobortis.",
      // image: teamMember2Img,
    },
    {
      name: "Alice Johnson",
      position: "Lead Developer",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida magna vel nulla lobortis.",
      // image: teamMember3Img,
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
