// import React from "react";

// const Team = () => {
//   const teamMembers = [
//     { name: "Shahzaib Ahmed", role: "CEO" },
//     { name: "Sara Ahmed", role: "UI/UX Designer" },
//     { name: "Ahmed Raza", role: "Project Manager" },
//     { name: "Ayesha Noor", role: "Mobile App Developer" },
//   ];

//   return (
//     <section id="team" className="py-5 text-center text-light">
//       <h2 className="fw-bold mb-5 display-6 text-warning">Our Team</h2>

//       <div className="row justify-content-center g-4 px-3">
//         {teamMembers.map((member, i) => (
//           <div key={i} className="col-md-3 col-sm-6">
//             <div
//               className="p-4 rounded-4 h-100 shadow-lg border border-white border-opacity-10 bg-dark bg-opacity-50"
//               style={{
//                 transition: "all 0.3s ease",
//                 backdropFilter: "blur(10px)",
//               }}
//             >
//               <div
//                 className="mx-auto mb-4"
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   borderRadius: "50%",
//                   background:
//                     "linear-gradient(135deg, #FFD700, #FF8C00, #FF69B4)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   fontSize: "1.5rem",
//                 }}
//               >
//                 {member.name.charAt(0)}
//               </div>

//               <h3
//                 className="fw-semibold mb-2"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {member.name}
//               </h3>
//               <p className="opacity-75">{member.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Team;
























import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const teamMembers = [
    {
      name: "Ruby Foster",
      role: "CEO & Founder",
      image: "https://i.ibb.co/6B6kLQb/team1.jpg",
      bio: "Ruby Foster leads the team with strategic vision and creativity. She inspires innovation and ensures seamless project delivery across all departments.",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Shahzaib Ahmed",
      role: "CEO & Software Engineer",
      image: "s1.jpg", 
      bio: "Shahzaib brings his expertise as a software engineer and visionary leader to guide FutureCoreX. He ensures the company delivers high-quality, innovative, and forward-thinking solutions that meet the evolving needs of clients.",
      socials: {
        facebook: "https://www.facebook.com/shahzaib.ahemd/about/",
        twitter: "https://x.com/shahzaibddd82",
        linkedin: "https://www.linkedin.com/in/shahzaib-ahmed-9363a4179/",
      },
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section
      id="team"
      className="text-center py-5"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #1f2937, #0f172a 80%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient lights */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(236,72,153,0.25), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      ></div>

      {/* Section Heading */}
      <div className="position-relative z-10">
        <small className="text-gray-400 d-block mb-1">OUR TEAM</small>
        <h2
          className="fw-bold mb-5"
          style={{
            background: "linear-gradient(90deg, #a855f7, #ec4899, #f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.5rem",
          }}
        >
          Meet Our <span>Leaders</span>
        </h2>

        {/* Team Avatars */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(member)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="p-3 rounded-4"
              style={{
                width: "140px",
                cursor: "pointer",
                background:
                  selected?.name === member.name
                    ? "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.2))"
                    : "rgba(255,255,255,0.05)",
                border: selected?.name === member.name
                  ? "2px solid #a855f7"
                  : "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  selected?.name === member.name
                    ? "0 0 20px rgba(168,85,247,0.6)"
                    : "0 0 10px rgba(255,255,255,0.05)",
                transition: "all 0.3s ease",
              }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="rounded-circle mb-2"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "3px solid #a855f7",
                  boxShadow:
                    selected?.name === member.name
                      ? "0 0 20px rgba(168,85,247,0.7)"
                      : "none",
                  transition: "0.3s",
                }}
              />
              <h6 className="fw-bold mb-0 text-white">{member.name}</h6>
              <small
                style={{
                  color:
                    selected?.name === member.name
                      ? "#ec4899"
                      : "rgba(255,255,255,0.6)",
                }}
              >
                {member.role}
              </small>
            </motion.div>
          ))}
        </div>

        {/* Selected Member Detail */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="container text-start p-4 rounded-4 shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30,41,59,0.7), rgba(51,31,60,0.6))",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(15px)",
                color: "#fff",
                maxWidth: "950px",
              }}
            >
              <div className="row align-items-center">
                {/* Text */}
                <div className="col-md-6">
                  <h4
                    className="fw-bold"
                    style={{
                      background:
                        "linear-gradient(90deg, #a855f7, #ec4899, #f97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {selected.name}
                  </h4>
                  <p className="text-secondary small mb-2">
                    {selected.role}
                  </p>
                  <p style={{ color: "#e5e7eb" }}>{selected.bio}</p>

                  <div className="d-flex gap-3 mt-3">
                    {selected.socials.facebook && (
                      <a
                        href={selected.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white fs-5"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    )}
                    {selected.socials.twitter && (
                      <a
                        href={selected.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white fs-5"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    )}
                    {selected.socials.linkedin && (
                      <a
                        href={selected.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white fs-5"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="col-md-6 text-center mt-3 mt-md-0">
                  <motion.img
                    src={selected.image}
                    alt={selected.name}
                    className="rounded-4 shadow-lg"
                    style={{
                      width: "100%",
                      maxHeight: "320px",
                      objectFit: "cover",
                      border: "3px solid #a855f7",
                      boxShadow: "0 0 30px rgba(168,85,247,0.5)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Team;
