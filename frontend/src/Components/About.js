import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-box">
      <h2 className="about-title">About the Library</h2>
      <div className="about-data">
        <div className="about-img">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
              alt="Library Interior"
              className="about-image"
            />
            <div className="image-overlay"></div>
            <div className="floating-elements">
              <div className="floating-book"></div>
              <div className="floating-book"></div>
              <div className="floating-book"></div>
            </div>
          </div>
        </div>
        <div className="text-content">
          <p className="about-text">
            <span className="text-highlight">
              Welcome to our digital sanctuary of knowledge!
            </span>{" "}
            Our library stands as a beacon of learning and discovery, where
            countless stories, research materials, and educational resources
            converge to create an unparalleled intellectual experience. Since
            our establishment, we have been committed to fostering a love for
            reading and providing our community with access to both timeless
            classics and cutting-edge publications.
            <br />
            <br />
            Our extensive collection spans across multiple disciplines - from
            literature and history to science and technology. Whether you're a
            student conducting research, a professional seeking industry
            insights, or simply someone who loves to get lost in a good book,
            our carefully curated selection ensures there's something for every
            curious mind. We pride ourselves on maintaining both physical and
            digital collections that reflect the diverse interests and needs of
            our vibrant community.
            <br />
            <br />
            Beyond our impressive collection, we offer a range of services
            designed to enhance your learning journey. Our knowledgeable
            librarians are always ready to assist with research guidance, our
            quiet study spaces provide the perfect environment for focused work,
            and our regular events and workshops create opportunities for
            intellectual engagement and community building.
            <br />
            <br />
            <span className="call-to-action">
              Your suggestions for improvement are always welcome!
            </span>{" "}
            We believe in growing together with our community and continuously
            evolving to better serve your educational and recreational reading
            needs.
          </p>
        </div>
      </div>

      <style jsx>{`
        .about-box {
          position: relative;
          padding: 60px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          animation: fadeInUp 1s ease-out;
        }

        .about-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
              circle at 20% 80%,
              rgba(120, 180, 255, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(255, 120, 180, 0.1) 0%,
              transparent 50%
            );
          pointer-events: none;
        }

        .about-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 50px;
          position: relative;
          animation: titleSlideDown 1s ease-out;
        }

        .about-title::after {
          content: "";
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #3498db, #e74c3c, #f39c12);
          border-radius: 2px;
          animation: underlineGrow 1.5s ease-out 0.5s both;
        }

        .about-data {
          display: flex;
          gap: 50px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .about-img {
          flex: 0 0 400px;
          animation: slideInLeft 1s ease-out 0.3s both;
        }

        .image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .about-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          transition: transform 0.5s ease;
          animation: imageZoom 6s ease-in-out infinite;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(52, 152, 219, 0.2) 0%,
            rgba(155, 89, 182, 0.2) 50%,
            rgba(231, 76, 60, 0.2) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-book {
          position: absolute;
          width: 20px;
          height: 15px;
          background: linear-gradient(45deg, #3498db, #2980b9);
          border-radius: 2px;
          animation: float 4s ease-in-out infinite;
        }

        .floating-book:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-book:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: 1.5s;
          background: linear-gradient(45deg, #e74c3c, #c0392b);
        }

        .floating-book:nth-child(3) {
          bottom: 30%;
          left: 80%;
          animation-delay: 3s;
          background: linear-gradient(45deg, #f39c12, #e67e22);
        }

        .text-content {
          flex: 1;
          animation: slideInRight 1s ease-out 0.6s both;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #2c3e50;
          text-align: justify;
          position: relative;
          animation: textReveal 2s ease-out 1s both;
        }

        .text-highlight {
          background: linear-gradient(120deg, #a8e6cf 0%, #88d8c0 100%);
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 600;
          color: #2c3e50;
          animation: highlightPulse 3s ease-in-out infinite;
        }

        .call-to-action {
          background: linear-gradient(120deg, #ffd3a5 0%, #fd9853 100%);
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 600;
          color: #2c3e50;
          animation: callToActionGlow 2s ease-in-out infinite alternate;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes underlineGrow {
          0% {
            width: 0;
          }
          100% {
            width: 100px;
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes imageZoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) rotate(-5deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
            opacity: 1;
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes highlightPulse {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(168, 230, 207, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(168, 230, 207, 0.6);
          }
        }

        @keyframes callToActionGlow {
          0% {
            box-shadow: 0 0 5px rgba(253, 152, 83, 0.3);
          }
          100% {
            box-shadow: 0 0 15px rgba(253, 152, 83, 0.6);
          }
        }

        @media (max-width: 768px) {
          .about-data {
            flex-direction: column;
            gap: 30px;
          }

          .about-img {
            flex: none;
            width: 100%;
          }

          .image-wrapper {
            max-width: 350px;
            margin: 0 auto;
          }

          .about-image {
            height: 300px;
          }

          .about-title {
            font-size: 2.2rem;
          }

          .about-text {
            font-size: 1rem;
          }

          .about-box {
            padding: 40px 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
