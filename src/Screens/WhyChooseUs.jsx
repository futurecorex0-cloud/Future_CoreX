import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Innovative Solutions",
      desc: "We use cutting-edge technologies to create powerful, scalable solutions tailored to your business needs.",
    },
    {
      title: "Dedicated Team",
      desc: "Our experienced professionals are passionate, skilled, and dedicated to delivering excellence in every project.",
    },
    {
      title: "Timely Delivery",
      desc: "We value your time and ensure that every project is completed within deadlines — with no compromise on quality.",
    },
  ];

  return (
    <section id="why" className="py-5 text-center text-light">
      <h2 className="fw-bold mb-5 display-6 text-warning">Why Choose Us</h2>

      <div className="row justify-content-center g-4 px-3">
        {reasons.map((reason, i) => (
          <div key={i} className="col-md-4 col-sm-6">
            <div
              className="p-4 rounded-4 h-100 shadow-lg border border-white border-opacity-10 bg-dark bg-opacity-50"
              style={{
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="mx-auto mb-3"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FFD700, #FF8C00, #FF69B4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "1.5rem",
                  boxShadow: "0 0 15px rgba(255,215,0,0.5)",
                }}
              >
                {i + 1}
              </div>

              <h3
                className="fw-semibold mb-3"
                style={{
                  background:
                    "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {reason.title}
              </h3>
              <p className="opacity-75">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
