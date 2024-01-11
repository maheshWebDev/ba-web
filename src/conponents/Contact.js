import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-area section-padding p-3 mt-3 border">
      <div className="container">
        <div className=" text-center my-10">
          <h1>Connect with Us</h1>
          <p className="lead">
            Whether you have tax-related inquiries or financial planning needs,
            we're here to assist you. Reach out to us for expert advice and
            personalized solutions. Your financial success is our priority.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="contact">
              <form
                className="form"
                name="enq"
                method="post"
                action="contact.php"
                onSubmit={() => {}}
              >
                <div className="row">
                  <div className="form-group col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-md-12 my-3">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <textarea
                      rows="6"
                      name="message"
                      className="form-control"
                      placeholder="Your Message"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center mb-3">
                    <button
                      type="submit"
                      value="Send message"
                      name="submit"
                      id="submitButton"
                      className="btn btn-contact-bg"
                      title="Submit Your Message!"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="single_address">
              <i className="fa fa-map-marker"></i>
              <h4>Visit Us</h4>
              <p>123 Main St, Pune</p>
            </div>
            <div className="single_address">
              <i className="fa fa-envelope"></i>
              <h4>Email Us</h4>
              <p>info@gmail.com</p>
            </div>
            <div className="single_address">
              <i className="fa fa-phone"></i>
              <h4>Call Us</h4>
              <p>+919850524322</p>
            </div>
            <div className="single_address">
              <i className="fas fa-clock"></i>
              <h4>Business Hours</h4>
              <p>
                Mon - Fri: 10.00 AM - 06.00 PM <br />
                Sat: 10.00 AM - 04.00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
