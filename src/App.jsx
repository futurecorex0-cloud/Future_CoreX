import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Custom/Footer";
import Home from "./Screens/Home";
import Services from "./Screens/Services";
import Projects from "./Screens/Projects";
import Team from "./Screens/Team";
import WhyChooseUs from "./Screens/WhyChooseUs";
import Contact from "./Screens/Contact";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("Home");

  const renderScreen = () => {
    const screens = {
      Home: <Home setActiveScreen={setActiveScreen} />,
      Services: <Services />,
      Projects: <Projects />,
      Team: <Team />,
      WhyChooseUs: <WhyChooseUs />,
      Contact: <Contact />,
    };
    return screens[activeScreen] || <Home />;
  };
   const handleNavClick = (page) => {
    setActiveScreen(page);

    const toggle = document.querySelector(".navbar-toggler");
    if (toggle && window.getComputedStyle(toggle).display !== "none") {
      toggle.click();
    }
  };
//new comment
  return (
    <div
      className="d-flex flex-column min-vh-100 text-light"
      style={{
        background:
          "linear-gradient(120deg, #4882a8ff, #3f6999ff, #273958ff, #4e4376)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 12s ease infinite",
      }}
    >
      {/* 🧭 Navbar */}
      <Navbar
        bg="transparent"
        variant="dark"
        expand="lg"
        fixed="top"
        className="backdrop-blur-md border-bottom border-white border-opacity-10 shadow-sm py-3"
      >
        <Container>
          <Navbar.Brand
            onClick={() => handleNavClick("Home")}
            className="fw-bold d-flex align-items-center gap-2"
            style={{
              cursor: "pointer",
            }}
          >
            <img
              src="/2.png"
              alt="Future CoreX Logo"
              style={{ height: "40px", objectFit: "contain" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              {[
                "Home",
                "Services",
                "Projects",
                "Team",
                "WhyChooseUs",
                "Contact",
              ].map((page) => (
                <Nav.Link
                  key={page}
                  active={activeScreen === page}
                  onClick={() => handleNavClick(page)}
                  className="mx-2 fw-semibold position-relative"
                  style={{
                    color: activeScreen === page ? "#FFD700" : "#E0E0E0",
                    transition: "all 0.3s ease",
                    fontSize: "1rem",
                  }}
                >
                  {page}
                  {activeScreen === page && (
                    <motion.div
                      layoutId="underline"
                      className="position-absolute start-0 bottom-0 w-100"
                      style={{
                        height: "2px",
                        background:
                          "linear-gradient(90deg, #ffcc70, #ff8177, #cf556c)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 🌈 Main Animated Content */}
            <main
              className="flex-grow-1 d-flex align-items-start justify-content-center"
              style={{
                paddingTop: "120px", // space below navbar
                paddingBottom: "100px", // extra space above footer
              }}
            >
              <Container>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -40, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="bg-dark bg-opacity-50 rounded-4 p-4 shadow-lg border border-white border-opacity-10"
                    style={{ minHeight: "70vh" }}
                  >
                    {renderScreen()}
                  </motion.div>
                </AnimatePresence>
              </Container>
            </main>


      {/* ⚡ Footer */}
      <Footer />

      {/* 🔁 Background Gradient Animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
