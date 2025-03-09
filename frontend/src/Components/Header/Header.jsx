import React from "react";
import Categories from "../Categories/Categories";
import EmblaCarousel from "../../assets/Carousel/EmblaCarousel";
import a from "../../assets/Images/credircard.webp";
import b from "../../assets/Images/flights.webp";
import c from "../../assets/Images/samsung.webp";
import d from "../../assets/Images/industry.jpeg";
import Footer from "../Footer/Footer";

const SLIDES = [a, b, c, d];

const OPTIONS = { loop: true };
// const SLIDE_COUNT = 5
// const SLIDES = [1,2,3,4,5,6,7,8]
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Header = () => {
  return (
    <div>
      <Categories />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Header;
