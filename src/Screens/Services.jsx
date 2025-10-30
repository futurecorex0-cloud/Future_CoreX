import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and web apps built for performance and scalability.",
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform mobile apps using Flutter and modern frameworks.",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, intuitive designs that deliver excellent user experiences.",
    },
  ];

  return (
    <section id="services" className="py-5 text-center text-light">
      <h2 className="fw-bold mb-5 display-6 text-warning">Our Services</h2>

      <div className="row justify-content-center g-4 px-3">
        {services.map((service, i) => (
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
                {service.title}
              </h3>
              <p className="opacity-75">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
