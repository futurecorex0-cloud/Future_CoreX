// import React from "react";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="d-flex flex-column align-items-center justify-content-center text-center px-3"
//       style={{
//         minHeight: "90vh",
//         color: "white",
//       }}
//     >
//       {/* Title with gradient animation */}
//       <motion.h1
//         className="fw-bold mb-3 display-4"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{
//           background: "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4, #00C6FF)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           textShadow: "0 0 20px rgba(255,255,255,0.2)",
//         }}
//       >
//         Welcome to <span style={{ color: "#adadadff" }}>Future Core X</span>
//       </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             className="lead mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             style={{
//               maxWidth: "800px",
//               color: "rgba(255,255,255,0.9)",
//               lineHeight: "1.8",
//               fontSize: "1.35rem", // ⬅️ bigger text size
//               fontWeight: 400,
//             }}
//           >
//                   At <strong style={{ color: "#00BFFF" }}>Future CoreX</strong>, we don’t just
//               build software — we build the <strong>future</strong>. We are a
//             next-generation software development company dedicated to crafting innovative,
//               scalable, and high-performance digital solutions that empower businesses to
//             grow and succeed in a fast-changing world.
//               <br />
//                 <br />
//             Our team of passionate developers, designers, and thinkers transforms ideas
//             into powerful digital experiences — from modern web platforms built with{" "}
//               <strong>React</strong>, <strong>ASP.NET</strong>, and <strong>SQL</strong>, to
//               intuitive mobile apps developed in <strong>Flutter</strong>.
//                   </motion.p>

//                   {/* Expertise Section */}
//                 <motion.div
//                   className="mt-5"
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6, duration: 0.8 }}
//                   style={{ textAlign: "left", maxWidth: "800px" }}
//                 >
//                   <h3
//                     style={{
//                       color: "#00BFFF",
//                       fontSize: "2rem",
//                       fontWeight: "700",
//                       marginBottom: "1.2rem",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                     }}
//                   >
//                     ⚙️ Our Expertise
//                   </h3>

//                   <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
//                     {[
//                       "Web Development (React, ASP.NET, SQL, Node.js)",
//                       "Mobile App Development (Flutter, Android, iOS)",
//                       "UI/UX Design & Branding",
//                       "E-Commerce & Custom Business Solutions",
//                       "Cloud Integration & Database Management",
//                     ].map((item, index) => (
//                       <motion.li
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
//                         style={{
//                           fontSize: "1.3rem", // 🔹 Bigger text
//                           color: "rgba(255,255,255,0.9)",
//                           marginBottom: "0.4rem",
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "8px",
//                         }}
//                       >
//                         <span style={{ color: "#00FFB3" }}>•</span> {item}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//                  <br />


//       {/* Glowing button */}
//       <motion.button
//         className="fw-semibold px-5 py-2 rounded-pill border-0"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         style={{
//           background: "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4, #00C6FF)",
//           color: "#141E30",
//           boxShadow: "0 0 25px rgba(255,215,0,0.4)",
//           fontSize: "1.1rem",
//           transition: "transform 0.3s, box-shadow 0.3s",
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.transform = "scale(1.05)";
//           e.target.style.boxShadow = "0 0 35px rgba(255,215,0,0.7)";
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.transform = "scale(1)";
//           e.target.style.boxShadow = "0 0 25px rgba(255,215,0,0.4)";
//         }}
//       >
//         Get Started
//       </motion.button>
//     </section>
//   );
// };

// export default Home;



















import React from "react";
import { motion } from "framer-motion";

const Home = ({ setActiveScreen }) => {
  return (
    <section
      id="home"
      className="d-flex flex-column align-items-center justify-content-center text-center px-3"
      style={{
        minHeight: "calc(100vh - 100px)", // adjusted for navbar
        color: "white",
        overflow: "hidden", // stop scroll glitch
      }}
    >
      {/* Title */}
      <motion.h1
        className="fw-bold mb-3 display-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background:
            "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4, #00C6FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 20px rgba(255,255,255,0.2)",
        }}
      >
        Welcome to <span style={{ color: "#adadadff" }}>Future Core X</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="lead mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: "800px",
          color: "rgba(255,255,255,0.9)",
          lineHeight: "1.8",
          fontSize: "1.35rem",
          fontWeight: 400,
        }}
      >
        At <strong style={{ color: "#00BFFF" }}>Future CoreX</strong>, we don’t
        just build software — we build the <strong>future</strong>. We are a
        next-generation software development company dedicated to crafting
        innovative, scalable, and high-performance digital solutions that
        empower businesses to grow and succeed in a fast-changing world.
        <br />
        <br />
        Our team of passionate developers, designers, and thinkers transforms
        ideas into powerful digital experiences — from modern web platforms
        built with <strong>React</strong>, <strong>ASP.NET</strong>, and{" "}
        <strong>SQL</strong>, to intuitive mobile apps developed in{" "}
        <strong>Flutter</strong>.
      </motion.p>

      {/* Expertise */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ textAlign: "left", maxWidth: "800px" }}
      >
        <h3
          style={{
            color: "#00BFFF",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1.2rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          ⚙️ Our Expertise
        </h3>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
          {[
            "Web Development (React, ASP.NET, SQL, Node.js)",
            "Mobile App Development (Flutter, Android, iOS)",
            "UI/UX Design & Branding",
            "E-Commerce & Custom Business Solutions",
            "Cloud Integration & Database Management",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              style={{
                fontSize: "1.3rem",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "0.4rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#00FFB3" }}>•</span> {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Button */}
      <motion.button
        className="fw-semibold px-5 py-2 rounded-pill border-0 mt-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          background:
            "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4, #00C6FF)",
          color: "#141E30",
          boxShadow: "0 0 25px rgba(255,215,0,0.4)",
          fontSize: "1.1rem",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 0 35px rgba(255,215,0,0.7)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 0 25px rgba(255,215,0,0.4)";
        }}
        onClick={() => setActiveScreen("Contact")} // ✅ Navigate to Contact
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default Home;
