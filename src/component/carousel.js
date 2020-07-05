import React, { useState, useEffect } from "react";

//# component
import SlideButton from "./ slideButton";

function Carousel() {
  //# State
  const [position, setPosition] = useState(0);
  const [sliderNum, setSliderNum] = useState(0);

  // Images.js
  const images = [
    { id: 0, src: "./assets/image1.jpeg", title: "Paris" },
    { id: 1, src: "./assets/image2.jpg", title: "Beach" },
    { id: 2, src: "./assets/image3.jpg", title: "Australia" },
    { id: 3, src: "./assets/image4.jpeg", title: "Taj Mahal" },
  ];

  useEffect(() => {
    if (sliderNum === images.length) {
      setSliderNum(0);
      setPosition(0);
    }
   let intervalId = setInterval(() => {
      HandleClick(sliderNum + 1);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [sliderNum]);


  //# Click event to handle button  click
  const HandleClick = (index) => {
    if (index <= images.length) {
      setPosition(-index * 100);
      setSliderNum(index);
    }
  };

  
  return (
    <div className="slider">
      {images.map(({ id, src, title }) => {
        return (
          <div
            className="slide"
            style={{ transform: `translateX(${position}%)` }}
            key={id}
          >
            {" "}
            <img src={src} alt={title} />
            <h1 className="title">{title}</h1>
          </div>
        );
      })}
      <div className="slide-button">
        {images.map(({ id }) => {
          return (
            <SlideButton
              id={id}
              sliderNum={sliderNum}
              HandleClick={HandleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
