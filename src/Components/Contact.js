import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaTag,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const FORMSPARK_URL = "https://submit-form.com/CARCkqSD";

const contactInfo = [
  { icon: <FaEnvelope />, label: "jasser.cherif@ensi-uma.tn", href: "mailto:jasser.cherif@ensi-uma.tn" },
  { icon: <FaPhoneAlt />, label: "+216 50 033 630", href: "tel:+21650033630" },
  { icon: <FaMapMarkerAlt />, label: "Kelibia, Nabeul, Tunisia" },
];

const socials = [
  // { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE" },
  // { icon: <FaGithub />, href: "https://github.com/jassercherif" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "That email doesn't look valid.";
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) next.message = "Please write a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <style>{`
        .contact-wrap {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 40px;
          align-items: start;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .contact-info h3 {
          font-size: 1.3em;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 4px;
        }
        .contact-info p {
          color: #a9b2b9;
          font-size: 0.95em;
          line-height: 1.6em;
          margin: 0;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 6px;
        }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d5dade;
          text-decoration: none;
          font-size: 0.92em;
        }
        .contact-info-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #343a40;
          color: #2196f3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.95em;
        }
        a.contact-info-item:hover {
          color: #2196f3;
        }
        .contact-socials {
          display: flex;
          gap: 10px;
          margin-top: 4px;
        }
        .contact-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #343a40;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #d5dade;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .contact-social-btn:hover {
          border-color: #2196f3;
          color: #2196f3;
          transform: translateY(-2px);
        }
        .contact-form-card {
          background: #343a40;
          border-radius: 14px;
          padding: 32px;
        }
        .contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .contact-field {
          margin-bottom: 18px;
        }
        .contact-field label {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78em;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #8b95a1;
          margin-bottom: 8px;
        }
        .contact-field input,
        .contact-field textarea {
          width: 100%;
          background: #2a2e33;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 11px 14px;
          color: #fff;
          font-size: 0.95em;
          font-family: inherit;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          box-sizing: border-box;
        }
        .contact-field input:focus,
        .contact-field textarea:focus {
          outline: none;
          border-color: #2196f3;
          box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.15);
        }
        .contact-field textarea {
          min-height: 130px;
          resize: vertical;
        }
        .contact-error {
          color: #ef5350;
          font-size: 0.78em;
          margin-top: 6px;
        }
        .contact-field.has-error input,
        .contact-field.has-error textarea {
          border-color: #ef5350;
        }
        .contact-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #2196f3, #1769aa);
          color: #fff;
          font-weight: 700;
          font-size: 0.95em;
          border: none;
          border-radius: 24px;
          padding: 12px 28px;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
        }
        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(33, 150, 243, 0.35);
        }
        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .contact-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: contact-spin 0.7s linear infinite;
        }
        @keyframes contact-spin {
          to { transform: rotate(360deg); }
        }
        .contact-toast {
          position: fixed;
          left: 24px;
          bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: 10px;
          font-size: 0.92em;
          font-weight: 600;
          color: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          z-index: 1000;
          animation: contact-toast-in 0.25s ease;
        }
        .contact-toast.success { background: #1f8a4c; }
        .contact-toast.error { background: #c0392b; }
        @keyframes contact-toast-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .contact-wrap {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 560px) {
          .contact-row {
            grid-template-columns: 1fr;
          }
          .contact-form-card {
            padding: 22px;
          }
        }
      `}</style>

      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 style={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)" }}>
            Get in Touch
          </h2>
        </div>

        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Let's talk</h3>
            <p>
              Have a project in mind, an opportunity, or just want to chat about
              multi-agent systems and RAG? My inbox is open.
            </p>
            <div className="contact-info-list">
              {contactInfo.map((item, i) =>
                item.href ? (
                  <a className="contact-info-item" href={item.href} key={i}>
                    <span className="contact-info-icon">{item.icon}</span>
                    {item.label}
                  </a>
                ) : (
                  <div className="contact-info-item" key={i}>
                    <span className="contact-info-icon">{item.icon}</span>
                    {item.label}
                  </div>
                )
              )}
            </div>
            <div className="contact-socials">
              {socials.map((s, i) => (
                <a
                  className="contact-social-btn"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={onSubmit} noValidate>
              <div className="contact-row">
                <div className={`contact-field${errors.name ? " has-error" : ""}`}>
                  <label htmlFor="name">
                    <FaUser /> Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                  />
                  {errors.name && <p className="contact-error">{errors.name}</p>}
                </div>

                <div className={`contact-field${errors.email ? " has-error" : ""}`}>
                  <label htmlFor="email">
                    <FaEnvelope /> Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update("email")}
                  />
                  {errors.email && <p className="contact-error">{errors.email}</p>}
                </div>
              </div>

              <div className={`contact-field${errors.subject ? " has-error" : ""}`}>
                <label htmlFor="subject">
                  <FaTag /> Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={update("subject")}
                />
                {errors.subject && <p className="contact-error">{errors.subject}</p>}
              </div>

              <div className={`contact-field${errors.message ? " has-error" : ""}`}>
                <label htmlFor="message">
                  <FaEnvelope /> Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me a bit about it..."
                  value={form.message}
                  onChange={update("message")}
                ></textarea>
                {errors.message && <p className="contact-error">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="contact-spinner" /> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {status === "success" && (
        <div className="contact-toast success">
          <FaCheckCircle /> Your message was sent — I'll get back to you soon!
        </div>
      )}
      {status === "error" && (
        <div className="contact-toast error">
          <FaExclamationCircle /> Something went wrong. Please try again or email me directly.
        </div>
      )}
    </section>
  );
}

export default Contact;