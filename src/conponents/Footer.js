import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 my-4 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-center text-md-start mb-3 mb-md-0">
            <a href="/" className="text-white text-decoration-none">
              <svg
                className="bi"
                width="30"
                height="24"
                role="img"
                aria-label="Bootstrap"
                alt=""
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
              <span className="ms-2">© {currentYear} Bharam Associates</span>
            </a>
          </div>

          <ul className="list-unstyled d-flex mb-0">
            <li className="ms-3">
              <a
                className="text-white"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-white"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-white"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
