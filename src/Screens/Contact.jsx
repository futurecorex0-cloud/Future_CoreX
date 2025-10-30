// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-5 text-center text-light">
//       <h2 className="fw-bold mb-5 display-6 text-warning">Contact Us</h2>

//       <div className="d-flex justify-content-center px-3">
//         <form
//           className="w-100"
//           style={{
//             maxWidth: "600px",
//             background: "rgba(99, 179, 182, 0.49)",
//             borderRadius: "20px",
//             padding: "2rem",
//             boxShadow: "0 0 40px hsla(193, 39%, 36%, 0.45)",
//             border: "1px solid rgba(100, 192, 192, 0.49)",
//             backdropFilter: "blur(10px)",
//           }}
//         >
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="form-control mb-3 bg-transparent text-light border border-white border-opacity-25 rounded-3 py-2"
//             style={{ backdropFilter: "blur(4px)" }}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="form-control mb-3 bg-transparent text-light border border-white border-opacity-25 rounded-3 py-2"
//             style={{ backdropFilter: "blur(4px)" }}
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="4"
//             className="form-control mb-4 bg-transparent text-light border border-white border-opacity-25 rounded-3 py-2"
//             style={{ backdropFilter: "blur(4px)" }}
//           ></textarea>

//           <button
//             type="submit"
//             className="btn w-100 py-2 fw-semibold text-dark"
//             style={{
//               background:
//                 "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4, #00C6FF)",
//               border: "none",
//               borderRadius: "50px",
//               boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = "scale(1.05)";
//               e.target.style.boxShadow =
//                 "0 0 30px rgba(255, 215, 0, 0.6)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = "scale(1)";
//               e.target.style.boxShadow =
//                 "0 0 20px rgba(255, 215, 0, 0.4)";
//             }}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


















import React, { useState } from "react";
import emailjs from "emailjs-com"; // or '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill in all fields before sending.");
      return;
    }

    setIsSending(true);
    setStatus(null);

    const serviceId = "service_n6i6ynm";
    const templateId = "template_6detuwl"; 
    const publicKey = "DnvqrKZlnjCfvnZf6";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: "Website Contact",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-5 text-center text-light">
      <h2 className="fw-bold mb-5 display-6 text-warning">Contact Us</h2>

      <div className="d-flex justify-content-center px-3">
        <form
          onSubmit={handleSubmit}
          className="w-100"
          style={{
            maxWidth: "600px",
            background: "rgba(99, 179, 182, 0.49)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 0 40px hsla(193, 39%, 36%, 0.45)",
            border: "1px solid rgba(100, 192, 192, 0.49)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* 🧍 Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="form-control mb-3 bg-transparent text-light border border-white border-opacity-25 rounded-3 py-2"
            style={{ backdropFilter: "blur(4px)" }}
          />

          {/* ✉️ Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="form-control mb-3 bg-transparent text-light border border-white border-opacity-25 rounded-3 py-2"
            style={{ backdropFilter: "blur(4px)" }}
          />

          {/* 💬 Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="form-control mb-4 bg-transparent text-light border border-white border-opacity-25 rounded-3 py-2"
            style={{ backdropFilter: "blur(4px)" }}
          ></textarea>

          {/* 🚀 Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className="btn w-100 py-2 fw-semibold text-dark"
            style={{
              background:
                "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4, #00C6FF)",
              border: "none",
              borderRadius: "50px",
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 30px rgba(255, 215, 0, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.4)";
            }}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {/* 🟢 Success / 🔴 Error */}
          {status === "success" && (
            <p className="mt-3 text-success fw-semibold">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-danger fw-semibold">
              ❌ Failed to send. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
