import React from "react";
import "./Footer.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="footer-data">
          <div className="contact-details">
            <h1>Contact Us</h1>
            <div className="contact-info">
              <p>Librarian</p>
              <p>Government School</p>
              <p>Visakhapatnam-530041</p>
              <p>Andhra Pradesh</p>
              <p>India</p>
              <p>
                <b>Email:</b> example@gmail.com
              </p>
            </div>
          </div>
          <div className="usefull-links">
            <h1>Useful Links</h1>
            <div className="links-container">
              <a href="#home" className="footer-link">
                Library Catalog
              </a>
              <a href="#home" className="footer-link">
                Digital Resources
              </a>
              <a href="#home" className="footer-link">
                Study Rooms
              </a>
              <a href="#home" className="footer-link">
                Library Events
              </a>
            </div>
          </div>
          <div className="librarian-details">
            <h1>Librarian</h1>
            <div className="librarian-info">
              <p>Shruti Upadhyay</p>
              <p>Master of Library Science</p>
              <p>Contact: +91 9161858200</p>
            </div>
          </div>
        </div>
        <div className="contact-social">
          <a href="#home" className="social-icon twitter-icon">
            <TwitterIcon style={{ fontSize: 40 }} />
            <div className="icon-ripple"></div>
          </a>
          <a href="#home" className="social-icon linkedin-icon">
            <LinkedInIcon style={{ fontSize: 40 }} />
            <div className="icon-ripple"></div>
          </a>
          <a href="#home" className="social-icon telegram-icon">
            <TelegramIcon style={{ fontSize: 40 }} />
            <div className="icon-ripple"></div>
          </a>
          <a href="#home" className="social-icon instagram-icon">
            <InstagramIcon style={{ fontSize: 40 }} />
            <div className="icon-ripple"></div>
          </a>
        </div>
      </div>
      <div className="copyright-details">
        <p className="footer-copyright">
          &#169; 2025 copyright all rights reserved
          <br />
          <span className="designer-credit">
            Designed with ❤️ by Shruti Upadhyay
          </span>
        </p>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(
            135deg,
            #2c3e50 0%,
            #34495e 50%,
            #2c3e50 100%
          );
          color: #ecf0f1;
          padding: 60px 20px 30px;
          position: relative;
          overflow: hidden;
          animation: footerSlideUp 1s ease-out;
        }

        .footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
              circle at 20% 20%,
              rgba(52, 152, 219, 0.1) 0%,
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(155, 89, 182, 0.1) 0%,
              transparent 30%
            ),
            linear-gradient(
              45deg,
              transparent 40%,
              rgba(255, 255, 255, 0.02) 50%,
              transparent 60%
            );
          pointer-events: none;
          animation: backgroundShift 10s ease-in-out infinite;
        }

        .footer-data {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 50px;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }

        .contact-details,
        .usefull-links,
        .librarian-details {
          animation: sectionFadeInUp 1s ease-out backwards;
          transition: transform 0.3s ease;
        }

        .contact-details {
          animation-delay: 0.2s;
        }
        .usefull-links {
          animation-delay: 0.4s;
        }
        .librarian-details {
          animation-delay: 0.6s;
        }

        .contact-details:hover,
        .usefull-links:hover,
        .librarian-details:hover {
          transform: translateY(-5px);
        }

        .footer-data h1 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #3498db;
          margin-bottom: 25px;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 2px;
          animation: titleGlow 3s ease-in-out infinite;
        }

        .footer-data h1::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #e74c3c, #f39c12, #3498db);
          border-radius: 2px;
          animation: underlineSlide 2s ease-in-out infinite;
        }

        .contact-info p,
        .librarian-info p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 8px;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 15px;
        }

        .contact-info p::before,
        .librarian-info p::before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #3498db;
          font-weight: bold;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .contact-info p:hover::before,
        .librarian-info p:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-info p:hover,
        .librarian-info p:hover {
          color: #3498db;
          transform: translateX(10px);
        }

        .links-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: #bdc3c7;
          text-decoration: none;
          font-size: 1rem;
          position: relative;
          padding: 8px 15px;
          border-radius: 25px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .footer-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(52, 152, 219, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .footer-link:hover {
          color: #ffffff;
          background: rgba(52, 152, 219, 0.2);
          transform: translateX(10px);
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        }

        .footer-link:hover::before {
          left: 100%;
        }

        .contact-social {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
          animation: socialFadeIn 1s ease-out 0.8s both;
        }

        .social-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          animation: iconFloat 3s ease-in-out infinite;
        }

        .twitter-icon {
          background: linear-gradient(
            135deg,
            rgba(29, 161, 242, 0.2),
            rgba(29, 161, 242, 0.1)
          );
          color: #1da1f2;
          animation-delay: 0s;
        }

        .linkedin-icon {
          background: linear-gradient(
            135deg,
            rgba(0, 119, 181, 0.2),
            rgba(0, 119, 181, 0.1)
          );
          color: #0077b5;
          animation-delay: 0.5s;
        }

        .telegram-icon {
          background: linear-gradient(
            135deg,
            rgba(0, 136, 204, 0.2),
            rgba(0, 136, 204, 0.1)
          );
          color: #0088cc;
          animation-delay: 1s;
        }

        .instagram-icon {
          background: linear-gradient(
            135deg,
            rgba(225, 48, 108, 0.2),
            rgba(225, 48, 108, 0.1)
          );
          color: #e1306c;
          animation-delay: 1.5s;
        }

        .social-icon:hover {
          transform: translateY(-10px) scale(1.15);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .twitter-icon:hover {
          box-shadow: 0 15px 30px rgba(29, 161, 242, 0.4);
        }
        .linkedin-icon:hover {
          box-shadow: 0 15px 30px rgba(0, 119, 181, 0.4);
        }
        .telegram-icon:hover {
          box-shadow: 0 15px 30px rgba(0, 136, 204, 0.4);
        }
        .instagram-icon:hover {
          box-shadow: 0 15px 30px rgba(225, 48, 108, 0.4);
        }

        .icon-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
        }

        .social-icon:hover .icon-ripple {
          width: 100px;
          height: 100px;
        }

        .copyright-details {
          text-align: center;
          padding-top: 30px;
          border-top: 2px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
          animation: copyrightFadeIn 1s ease-out 1s both;
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: #95a5a6;
          line-height: 1.6;
          margin: 0;
        }

        .designer-credit {
          color: #e74c3c;
          font-weight: 600;
          animation: heartBeat 2s ease-in-out infinite;
        }

        @keyframes footerSlideUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backgroundShift {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes sectionFadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleGlow {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(52, 152, 219, 0.6);
          }
        }

        @keyframes underlineSlide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }

        @keyframes socialFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes copyrightFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes heartBeat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 15px 20px;
          }

          .footer-data {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-data h1 {
            font-size: 1.5rem;
          }

          .contact-social {
            gap: 20px;
          }

          .social-icon {
            width: 60px;
            height: 60px;
          }

          .social-icon svg {
            font-size: 32px !important;
          }

          .footer-copyright {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .contact-social {
            flex-wrap: wrap;
            justify-content: center;
          }

          .social-icon {
            width: 50px;
            height: 50px;
          }

          .social-icon svg {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Footer;
