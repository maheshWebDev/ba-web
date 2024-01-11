import React from "react";
import img from "../aniket.jpeg";

const Team = () => {
  return (
    <div className="container bootstrap p-5">
      <section id="team" className="white-bg padding-top-bottom">
        <div className="container bootstrap snippets bootdey">
          <div className="text-center mb-5">
            <h3 className="">Meet Our Team</h3>
            <p className="lead text-muted">
              Welcome to our talented team! We are a close-knit group of
              professionals who are passionate about delivering exceptional
              results. Get to know the dedicated individuals behind our projects
              and discover the expertise that fuels our success.
            </p>
          </div>

          <div className="row member-content">
            <div className="col-sm-3 col-md-3 member-thumb">
              <img
                className="img-responsive img-center img-thumbnail rounded-circle"
                src={img}
                alt=""
              />
              <h4>Vishal Bharam</h4>
              <p className="title">CA &amp; Founder</p>
            </div>
            <div className="col-sm-9 col-md-9">
              <div className="details">
                <p>
                  Vishal Bharam, a Chartered Accountant and the Founder of
                  Bharam Associates, provides expert tax advice and strategic
                  financial solutions. With a wealth of experience in the
                  industry, he leads our team in delivering exceptional results
                  to clients.
                </p>
                <ul className="social-content">
                  <li>
                    <a href="mailto:mail@example.com">
                      <i className="fas fa-envelope fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-twitter fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-facebook fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-linkedin fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row member-content flex-md-row-reverse">
            <div className="col-sm-3 col-md-3 member-thumb">
              <img
                className="img-responsive img-center img-thumbnail rounded-circle"
                src={img}
                alt=""
              />
              <h4>Aniket Shelke</h4>
              <p className="title">Director</p> {/* Updated role */}
            </div>
            <div className="col-sm-9 col-md-9">
              <div className="details">
                <p>
                  Aniket Shelke serves as the Director of our creative team,
                  bringing innovative ideas and strategic vision to our
                  projects. With a wealth of experience in design and a passion
                  for excellence, Aniket plays a crucial role in shaping our
                  creative direction.
                </p>
                <ul className="social-content">
                  <li>
                    <a href="mailto:mail@example.com">
                      <i className="fas fa-envelope fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-twitter fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-facebook fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-linkedin fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row member-content">
            <div className="col-sm-3 col-md-3 member-thumb">
              <img
                className="img-responsive img-center img-thumbnail rounded-circle"
                src={img}
                alt=""
              />
              <h4>Sagar Bharam</h4>
              <p className="title">Director</p>
            </div>
            <div className="col-sm-9 col-md-9">
              <div className="details">
                <p>
                  Sagar Bharam, serving as a Director and Lead Developer, is a
                  seasoned professional specializing in tax and finance
                  advisory. With a wealth of experience, he provides invaluable
                  insights and strategic guidance in navigating complex
                  financial landscapes.
                </p>
                <ul className="social-content">
                  <li>
                    <a href="mailto:mail@example.com">
                      <i className="fas fa-envelope fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-twitter fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-facebook fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fab fa-linkedin fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
