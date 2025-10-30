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
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const teamMembers = [
    {
      name: "Ruby Foster",
      role: "CEO-FOUNDER",
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
      image: "s1.jpg", // ✅ Use your local image path here (public/s1.jpg)
      bio: "Shahzaib brings his expertise as a software engineer and visionary leader to guide FutureCoreX. He ensures the company delivers high-quality, innovative, and forward-thinking solutions that meet the evolving needs of clients.",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  // 🧠 Start with nothing selected
  const [selected, setSelected] = useState(null);

  return (
    <section id="team" className="text-center py-5">
      {/* Section Heading */}
      <small className="text-muted d-block mb-1">OUR TEAM</small>
      <h2
        className="fw-bold mb-5"
        style={{
          background: "linear-gradient(90deg, #8b5cf6, #ec4899, #f97316)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Team <span>Members</span>
      </h2>

      {/* Team Avatars */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            onClick={() => setSelected(member)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`team-avatar text-center p-2 ${
              selected?.name === member.name ? "active" : ""
            }`}
            style={{
              width: "130px",
              cursor: "pointer",
              borderRadius: "15px",
              background:
                selected?.name === member.name
                  ? "linear-gradient(135deg, #ffffffaa, #f3e8ff)"
                  : "transparent",
              boxShadow:
                selected?.name === member.name
                  ? "0 0 25px rgba(139,92,246,0.6)"
                  : "none",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle mb-2"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                border: `3px solid ${
                  selected?.name === member.name ? "#a855f7" : "#ddd"
                }`,
                transition: "border 0.3s ease",
              }}
            />
            <h6 className="fw-bold mb-0">{member.name}</h6>
            <small
              style={{
                color:
                  selected?.name === member.name
                    ? "#ec4899"
                    : "rgba(0,0,0,0.6)",
              }}
            >
              {member.role}
            </small>
          </motion.div>
        ))}
      </div>

      {/* Selected Member Details with animation */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="container text-start p-4 rounded-4 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ffffffdd, #faf5ff)",
              maxWidth: "950px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="row align-items-center">
              {/* Left - Text */}
              <div className="col-md-6">
                <h5 className="fw-bold">{selected.name}</h5>
                <p className="text-secondary small mb-2">{selected.role}</p>
                <p className="text-dark">{selected.bio}</p>

                {/* Social Links */}
                <div className="d-flex gap-3 mt-3">
                  {selected.socials.facebook && (
                    <a
                      href={selected.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark fs-5"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  )}
                  {selected.socials.twitter && (
                    <a
                      href={selected.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark fs-5"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  )}
                  {selected.socials.linkedin && (
                    <a
                      href={selected.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark fs-5"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right - Image */}
              <div className="col-md-6 text-center mt-3 mt-md-0">
                <motion.img
                  src={selected.image}
                  alt={selected.name}
                  className="rounded-4 shadow"
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    border: "3px solid #a855f7",
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
    </section>
  );
};

export default Team;
