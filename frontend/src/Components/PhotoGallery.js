import React from "react";
import "./PhotoGallery.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function PhotoGallery() {
  return (
    <div className="photogallery-container">
      <h1 className="photogallery-title">Photo Gallery</h1>
      <div className="photogallery-images">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
          alt="Books 1"
        />
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
          alt="Books 2"
        />
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          alt="Books 3"
        />
        <img
          src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80"
          alt="Books 4"
        />
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
          alt="Books 5"
        />
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
          alt="Books 6"
        />
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
          alt="Books 7"
        />
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
          alt="Books 8"
        />
      </div>
      <button>
        VIEW MORE <ArrowForwardIosIcon style={{ fontSize: 20 }} />
      </button>
    </div>
  );
}

export default PhotoGallery;
