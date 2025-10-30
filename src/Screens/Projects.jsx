import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A powerful and scalable online shopping platform built with React and Node.js.",
    },
    {
      title: "Mobile Banking App",
      desc: "A secure and user-friendly mobile app for seamless digital transactions.",
    },
    {
      title: "AI Chat Assistant",
      desc: "An intelligent chatbot built with Flutter and integrated AI technologies.",
    },
  ];

  return (
    <section id="projects" className="py-5 text-center text-light">
      <h2 className="fw-bold mb-5 display-6 text-warning">Our Projects</h2>

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
                className="fw-semibold mb-3"
                style={{
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
    </section>
  );
};

export default Projects;
