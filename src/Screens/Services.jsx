// import React from "react";

// const Services = () => {
//   const services = [
//     {
//       title: "Web Development",
//       desc: "Custom websites and web apps built for performance and scalability.",
//     },
//     {
//       title: "Mobile App Development",
//       desc: "Cross-platform mobile apps using Flutter and modern frameworks.",
//     },
//     {
//       title: "UI/UX Design",
//       desc: "Beautiful, intuitive designs that deliver excellent user experiences.",
//     },
//   ];

//   return (
//     <section id="services" className="py-5 text-center text-light">
//       <h2 className="fw-bold mb-5 display-6 text-warning">Our Services</h2>

//       <div className="row justify-content-center g-4 px-3">
//         {services.map((service, i) => (
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
//                 {service.title}
//               </h3>
//               <p className="opacity-75">{service.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

















import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and web apps built for performance and scalability.",
      projects: [
        { name: "Portfolio Website", img: "https://i.ibb.co/kcK9Xgz/web1.jpg" },
        { name: "Company Dashboard", img: "https://i.ibb.co/QMypx9b/web2.jpg" },
      ],
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform mobile apps using Flutter and modern frameworks.",
      projects: [
        { name: "E-commerce App", img: "https://i.ibb.co/PGv8ZzG/app1.jpg" },
        { name: "Delivery App", img: "https://i.ibb.co/ygW3WvW/app2.jpg" },
      ],
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, intuitive designs that deliver excellent user experiences.",
      projects: [
        { name: "App Redesign", img: "https://i.ibb.co/3fL1RDN/ui1.jpg" },
        { name: "Web Prototype", img: "https://i.ibb.co/sb4L3td/ui2.jpg" },
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-5 text-center text-light">
      <h2
        className="fw-bold mb-5 display-6"
        style={{
          background: "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Services
      </h2>

      {/* Services Cards */}
      <div className="row justify-content-center g-4 px-3">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="col-md-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div
              onClick={() =>
                setSelectedService(
                  selectedService?.title === service.title ? null : service
                )
              }
              className={`p-4 rounded-4 h-100 shadow-lg border border-white border-opacity-10 bg-dark bg-opacity-50 ${
                selectedService?.title === service.title ? "border-warning" : ""
              }`}
              style={{
                transition: "all 0.3s ease",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                className="fw-semibold mb-3"
                style={{
                  background:
                    "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {service.title}
              </h3>
              <p className="opacity-75">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Project Display */}
      <AnimatePresence mode="wait">
        {selectedService && (
          <motion.div
            key={selectedService.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="container mt-5"
          >
            <h4
              className="fw-bold mb-4"
              style={{
                background: "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {selectedService.title} Projects
            </h4>

            <div className="row g-4 justify-content-center">
              {selectedService.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="col-md-4 col-sm-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="card bg-dark text-light border-0 shadow-lg rounded-4 overflow-hidden"
                    style={{ background: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <img
                      src={project.img}
                      alt={project.name}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        opacity: 0.9,
                      }}
                    />
                    <div className="card-body">
                      <h6 className="fw-bold">{project.name}</h6>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
