// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       desc: "A powerful and scalable online shopping platform built with React and Node.js.",
//     },
//     {
//       title: "Mobile Banking App",
//       desc: "A secure and user-friendly mobile app for seamless digital transactions.",
//     },
//     {
//       title: "AI Chat Assistant",
//       desc: "An intelligent chatbot built with Flutter and integrated AI technologies.",
//     },
//   ];

//   return (
//     <section id="projects" className="py-5 text-center text-light">
//       <h2 className="fw-bold mb-5 display-6 text-warning">Our Projects</h2>

//       <div className="row justify-content-center g-4 px-3">
//         {projects.map((project, i) => (
//           <div key={i} className="col-md-4">
//             <div
//               className="p-4 rounded-4 h-100 shadow-lg border border-white border-opacity-10 bg-dark bg-opacity-50"
//               style={{
//                 transition: "all 0.3s ease",
//                 backdropFilter: "blur(10px)",
//               }}
//             >
//               <h3
//                 className="fw-semibold mb-3"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {project.title}
//               </h3>
//               <p className="opacity-75">{project.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;




















import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A powerful and scalable online shopping platform built with React and Node.js.",
      fullDesc:
        "This platform includes advanced product filters, real-time inventory tracking, and a custom admin dashboard for complete control.",
      img: "https://i.ibb.co/4M5mP4M/ecommerce.jpg",
    },
    {
      title: "Mobile Banking App",
      desc: "A secure and user-friendly mobile app for seamless digital transactions.",
      fullDesc:
        "The app includes biometric authentication, instant transfers, and a modern dashboard for financial analytics.",
      img: "https://i.ibb.co/VQ1gGYn/banking.jpg",
    },
    {
      title: "AI Chat Assistant",
      desc: "An intelligent chatbot built with Flutter and integrated AI technologies.",
      fullDesc:
        "This chatbot uses NLP and smart intent detection to automate customer support and enhance engagement across platforms.",
      img: "https://i.ibb.co/6bsNnTQ/chatbot.jpg",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section id="projects" className="py-5 text-center text-light">
      <h2
        className="fw-bold mb-5 display-6 text-warning"
        style={{
          background: "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Projects
      </h2>

      {/* 🔹 Project Cards */}
      <div className="row justify-content-center g-4 px-3">
        {projects.map((project, i) => (
          <div key={i} className="col-md-4">
            <div
              className="p-4 rounded-4 h-100 shadow-lg border border-white border-opacity-10 bg-dark bg-opacity-50"
              style={{
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                onClick={() => handleSelect(i)}
                className="fw-semibold mb-3"
                style={{
                  cursor: "pointer",
                  background:
                    "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {project.title}
              </h3>
              <p className="opacity-75">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Expanded Details Below All Cards */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 container"
          >
            <div
              className="p-4 rounded-4 shadow-lg border border-white border-opacity-10 bg-dark bg-opacity-50"
              style={{
                backdropFilter: "blur(10px)",
              }}
            >
              <img
                src={projects[selected].img}
                alt={projects[selected].title}
                className="rounded-4 shadow mb-3"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <h4
                style={{
                  background:
                    "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {projects[selected].title}
              </h4>
              <p className="opacity-75">{projects[selected].fullDesc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
