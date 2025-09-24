import React from "react";
import "./ImageSlider.css";
import { Carousel } from "react-bootstrap";

function ImageSlider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="slide-image-wrapper">
            <img
              className="d-block w-100 slide-image"
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Library Reading Room"
            />
            <div className="slide-overlay"></div>
          </div>
          <Carousel.Caption className="modern-caption">
            <div className="caption-content">
              <h3 className="caption-title">Discover Knowledge</h3>
              <p className="caption-text">
                Explore our vast collection of books and digital resources in a
                serene, inspiring environment designed for learning and
                discovery.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="slide-image-wrapper">
            <img
              className="d-block w-100 slide-image"
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80"
              alt="Modern Library Interior"
            />
            <div className="slide-overlay"></div>
          </div>
          <Carousel.Caption className="modern-caption">
            <div className="caption-content">
              <h3 className="caption-title">Modern Learning Spaces</h3>
              <p className="caption-text">
                Experience state-of-the-art facilities with comfortable study
                areas, collaborative spaces, and cutting-edge technology for all
                your research needs.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="slide-image-wrapper">
            <img
              className="d-block w-100 slide-image"
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Digital Library Resources"
            />
            <div className="slide-overlay"></div>
          </div>
          <Carousel.Caption className="modern-caption">
            <div className="caption-content">
              <h3 className="caption-title">Digital Innovation</h3>
              <p className="caption-text">
                Access thousands of e-books, online databases, and digital
                archives from anywhere. Your gateway to infinite knowledge
                awaits.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <style jsx>{`
        .slider {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .slide-image-wrapper {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .slide-image {
          height: 500px;
          object-fit: cover;
          transition: transform 0.5s ease;
          animation: slideZoom 6s ease-in-out infinite;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
          );
          animation: overlayPulse 3s ease-in-out infinite alternate;
        }

        .modern-caption {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.2) 100%
          );
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 30px;
          bottom: 50px;
          left: 50px;
          right: 50px;
          animation: captionSlideUp 1s ease-out;
        }

        .caption-content {
          text-align: center;
        }

        .caption-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          animation: titleGlow 2s ease-in-out infinite alternate;
        }

        .caption-text {
          font-size: 1.1rem;
          color: #f8f9fa;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
          animation: textFadeIn 1.5s ease-out 0.5s both;
        }

        @keyframes slideZoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes overlayPulse {
          0% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes captionSlideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes titleGlow {
          0% {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
          100% {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
              0 0 20px rgba(255, 255, 255, 0.3);
          }
        }

        @keyframes textFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Carousel controls styling */
        :global(.carousel-control-prev),
        :global(.carousel-control-next) {
          width: 60px;
          height: 60px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.1)
          );
          backdrop-filter: blur(10px);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        :global(.carousel-control-prev):hover,
        :global(.carousel-control-next):hover {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.2)
          );
          transform: translateY(-50%) scale(1.1);
        }

        :global(.carousel-indicators) {
          bottom: 20px;
        }

        :global(.carousel-indicators button) {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }

        :global(.carousel-indicators .active) {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .slide-image-wrapper {
            height: 300px;
          }

          .slide-image {
            height: 300px;
          }

          .modern-caption {
            bottom: 20px;
            left: 20px;
            right: 20px;
            padding: 20px;
          }

          .caption-title {
            font-size: 1.8rem;
          }

          .caption-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ImageSlider;
