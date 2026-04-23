// components/CategorySlide.jsx
// Image slider that lets users browse golf club categories

import { useState } from "react";
import "../css/CategorySlide.css";
import Driver from "../assets/Driver.jpg";
import Putter from "../assets/Putter.jpg";
import Wedge from "../assets/Wedge.jpg";
import FairyWood from "../assets/FairyWood.jpg";
import IronSet from "../assets/IronSet.jpg";

// Slide images and their corresponding category labels
const images = [Driver, Putter, Wedge, FairyWood, IronSet];
const category = ["Driver", "Putter", "Wedge", "Fairy Wood", "Iron Set"];

function CategorySlide() {
  // Index of the currently displayed (center) slide
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Calculate adjacent slide indices for the 3-image display
  const prevIndex = index === 0 ? images.length - 1 : index - 1;
  const nextIndex = index === images.length - 1 ? 0 : index + 1;

  return (
    <div className="slider-container">
      <h3 className="slider-heading">Shop By Category</h3>

      {/* Show previous, current, and next slide images */}
      <div className="slider">
        <img
          src={images[prevIndex]}
          alt="prev category"
          className="slider-img side"
        />
        <img src={images[index]} alt="category" className="slider-img main" />
        <img
          src={images[nextIndex]}
          alt="next category"
          className="slider-img side"
        />
      </div>

      {/* Navigation controls and current category label */}
      <div className="category-footer">
        <button onClick={prevSlide} className="arrow-btn">
          ❮
        </button>
        <h4 className="category-title mt-3">{category[index]}</h4>
        <button onClick={nextSlide} className="arrow-btn">
          ❯
        </button>
      </div>
    </div>
  );
}

export default CategorySlide;
