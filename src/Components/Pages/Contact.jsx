import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.subject ||
      !form.message
    ) {
      toast.warn("Please fill in all fields!");
      return;
    }
    toast.success("Message sent successfully!");
  };

  return (
    <div className="contact-section main-wrapper">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="contact-card">
              <h4 className="contact-heading">Feel Free to Write Us Anytime</h4>
              <form
                method="post"
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="row g-4">
                  <div className="col-sm-6">
                    <input
                      className="form-control custom-input"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      className="form-control custom-input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      className="form-control custom-input"
                      type="text"
                      name="phone"
                      placeholder="Your phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      className="form-control custom-input"
                      type="text"
                      name="subject"
                      placeholder="Select subject"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-12">
                    <textarea
                      className="form-control custom-textarea"
                      rows="5"
                      name="message"
                      placeholder="Enter your message..."
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className=" mt-4">
                  <button
                    type="button"
                    className="btn send-btn"
                    onClick={handleSend}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.6502407010676!2d-79.64505348814602!3d43.593001070984656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47149e001f97%3A0xf50b13c4cabe7fbc!2sSquare%20One%20Shopping%20Centre!5e0!3m2!1sen!2sca!4v1750396708518!5m2!1sen!2sca"
          className="map-frame"
          allowfullscreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactSection;
