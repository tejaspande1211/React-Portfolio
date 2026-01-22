import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_0gflzpi",        // ✅ Gmail service ID
        "template_8m8r8aj",       // ✅ Contact Us template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "u_znqwvmUCZLpv6HP"    // ❗ paste your EmailJS public key
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-content">
        {/* Left info */}
        <div className="contact-info-block">
          <h3>Get in touch</h3>
          <p>
            Fill out the form below and I'll get back to you as soon as possible.
            I'm always interested in new opportunities and interesting projects.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <span>tejaspande1211@gmail.com</span>
            </div>
            <div className="contact-method">
              <span>+91 801085XXXX</span>
            </div>
            <div className="contact-method">
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-success">
              Message sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              Failed to send message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
