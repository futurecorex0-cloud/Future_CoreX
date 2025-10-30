// import React from "react";

// const Footer = () => {
//   const year = new Date().getFullYear();

//   const socialLinks = [
//     {
//       href: "https://twitter.com",
//       icon: "fab fa-twitter",
//       color: "#1DA1F2",
//     },
//     {
//       href: "https://linkedin.com",
//       icon: "fab fa-linkedin",
//       color: "#0A66C2",
//     },
//     {
//       href: "https://github.com",
//       icon: "fab fa-github",
//       color: "#E0E0E0",
//     },
//   ];

//   return (
//     <footer
//       className="text-center text-light position-relative overflow-hidden"
//       style={{
//         background: "rgba(0, 0, 0, 0.7)",
//         backdropFilter: "blur(12px)",
//         borderTop: "1px solid rgba(255,255,255,0.1)",
//         paddingTop: "80px",
//         paddingBottom: "40px",
//       }}
//     >
//       {/* Animated Gradient Lights */}
//       <div
//         className="position-absolute rounded-circle"
//         style={{
//           top: "-100px",
//           left: "-100px",
//           width: "300px",
//           height: "300px",
//           background: "radial-gradient(circle, rgba(255,0,255,0.25), transparent)",
//           filter: "blur(100px)",
//           animation: "pulse 6s ease-in-out infinite",
//         }}
//       ></div>

//       <div
//         className="position-absolute rounded-circle"
//         style={{
//           bottom: "-120px",
//           right: "-120px",
//           width: "320px",
//           height: "320px",
//           background: "radial-gradient(circle, rgba(0,255,255,0.25), transparent)",
//           filter: "blur(100px)",
//           animation: "pulse 8s ease-in-out infinite",
//         }}
//       ></div>

//       {/* Content */}
//       <div className="position-relative z-1 container">
//         {/* Logo */}
//         <h2
//           className="fw-bold mb-4 display-5"
//           style={{
//             background: "linear-gradient(90deg, #ff758c, #ff7eb3, #00c6ff, #0072ff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             textShadow: "0 0 25px rgba(255,255,255,0.3)",
//           }}
//         >
//           Future <span style={{ color: "#FFD700" }}>CoreX</span>
//         </h2>

//         {/* Social Icons */}
//         <div className="d-flex justify-content-center gap-4 mb-4">
//           {socialLinks.map(({ href, icon, color }, i) => (
//             <a
//               key={i}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color,
//                 fontSize: "1.6rem",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
//               onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//             >
//               <i className={icon}></i>
//             </a>
//           ))}
//         </div>

//         {/* Divider */}
//         <div
//           style={{
//             height: "2px",
//             background:
//               "linear-gradient(90deg, rgba(255,215,0,0.3), rgba(255,105,180,0.3), rgba(0,255,255,0.3))",
//             margin: "20px auto",
//             width: "70%",
//           }}
//         ></div>

//         {/* Copyright */}
//         <p className="mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
//           © {year} <span style={{ color: "#FFD700" }}>Future CoreX</span>. All rights reserved.
//         </p>
//         <p
//           style={{
//             fontSize: "0.9rem",
//             color: "rgba(255,255,255,0.5)",
//           }}
//         >
//           Designed & Developed by{" "}
//           <span
//             style={{
//               background: "linear-gradient(90deg, #ff7eb3, #00c6ff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               fontWeight: "600",
//             }}
//           >
//             Future CoreX Team
//           </span>
//         </p>
//       </div>

//       {/* Animation */}
//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.4; transform: scale(1); }
//           50% { opacity: 0.8; transform: scale(1.1); }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.facebook.com/share/1GLXXnBGMr/", icon: faFacebookF },
    { href: "https://x.com/FutureCoreX0", icon: faTwitter },
    { href: "https://www.linkedin.com/company/108158124/admin/dashboard/", icon: faLinkedinIn },
    { href: "https://rss.com", icon: faRss },
    { href: "https://dribbble.com", icon: faDribbble },
  ];

  return (
    <footer
      className="text-center text-dark relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #4882a8ff, #3f6999ff, #273958ff, #4e4376)",
        paddingTop: "70px",
        paddingBottom: "40px",
      }}
    >
      {/* 🔮 Animated soft background circles */}
      <div
        className="position-absolute"
        style={{
          top: "-150px",
          left: "-100px",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "float 8s ease-in-out infinite",
        }}
      ></div>
      <div
        className="position-absolute"
        style={{
          bottom: "-150px",
          right: "-100px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      ></div>

      {/* 🪶 Social Icons */}
      <div className="d-flex justify-content-center gap-4 mb-4 z-1 position-relative">
        {socialLinks.map(({ href, icon }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center justify-content-center rounded-circle shadow"
            style={{
              background: "#fff",
              width: "55px",
              height: "55px",
              color: "#3d75b4ff",
              fontSize: "1.2rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.color = "#6966ffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "#7537bbff";
            }}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>

      {/* ✨ Divider */}
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
          margin: "20px auto",
          width: "60%",
        }}
      ></div>

      {/* ⚙️ Footer Text */}
      <h2
        className="fw-bold mt-3"
        style={{
          color: "#fff",
          textShadow: "0 0 8px rgba(255,255,255,0.3)",
        }}
      >
        Future <span style={{ color: "#ffe082" }}>CoreX</span>
      </h2>

      <p className="mt-3 mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>
        © {year} Future CoreX. All rights reserved.
      </p>

      <p
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.9rem",
        }}
      >
        Designed & Developed by{" "}
        <span
          style={{
            fontWeight: 600,
            background: "linear-gradient(90deg, #fff, #ffe082)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Future CoreX Shahzaib Ahmed
        </span>
      </p>

      {/* 🔁 Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(20px); opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
