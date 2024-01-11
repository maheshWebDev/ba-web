import React from "react";

const ServiceCard = ({ iconClass, title, description }) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-4 pb-5 service-card">
      <a href="#" className="card text-center text-decoration-none">
        <div
          className="box-shadow bg-white rounded-circle mx-auto text-center"
          style={{ width: "90px", height: "90px", marginTop: "-45px" }}
        >
          <i className={`fa ${iconClass} fa-3x head-icon`}></i>
        </div>
        <div className="card-body text-center">
          <h3 className="card-title pt-1 ">{title} </h3>
          <p className="card-text text-sm">{description}</p>
          <span className="text-sm text-uppercase font-weight-bold text-primary">
            Learn More&nbsp;<i className="fe-icon-arrow-right"></i>
          </span>
        </div>
      </a>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section className="container pt-3 mb-4 p-3">
      <div className="text-center mb-5 p-4">
        <h3 className="">Our Specialized Services</h3>
        <p className="lead text-muted">
          Elevate your business with our specialized services designed to
          optimize financial strategies, ensure regulatory compliance, and drive
          growth. Discover tailored solutions that meet the unique needs of your
          organization.
        </p>
      </div>

      <div className="row pt-4 mt-4">
        <ServiceCard
          iconClass="fa-calculator"
          title="Indirect Tax and Direct Tax"
          description="Our experts handle Direct Taxes, Indirect Taxes, Transfer Pricing, FEMA, Corporate Affairs, Customs Act & Regulations."
        />
        <ServiceCard
          iconClass="fas fa-lightbulb"
          title="Strategic Consulting and Advisory"
          description="Strategic guidance including Feasibility studies, Exploration of Alternatives, profit optimization, Setting up Systems, Joint Venture, and Collaboration."
        />
        <ServiceCard
          iconClass="fa-check-square"
          title="Audit and Assurance"
          description="Comprehensive audit services covering Management Audit, Proprietary Audit, Internal Audit, Statutory Audits, Compliance Audit, Due Diligence."
        />
        <ServiceCard
          iconClass="fa-handshake"
          title="Outsourcing"
          description="Outsource your financial tasks, including Accounting Services, Fixed Assets & Inventory Count, Support Functions, and Compilation."
        />
        <ServiceCard
          iconClass="fa-graduation-cap"
          title="Training & Other Services"
          description="Training in FEMA, Corporate Affairs, Labour Law, Customs, and Corporate Training on Goods and Service Tax (GST)."
        />
        <ServiceCard
          iconClass="fa-industry"
          title="Ease of Doing Business in India"
          description="Full support for the formation of Company / LLP/ Firms, Various Registrations, Operational guidance, and 100% Regulatory Compliances."
        />
      </div>
    </section>
  );
};

export default ServiceSection;
