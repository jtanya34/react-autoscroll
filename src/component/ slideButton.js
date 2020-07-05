import React from "react";

function SlideButton({ sliderNum, id, HandleClick }) {
  return (
    <>
      <button
        key={id}
        className={sliderNum === id ? "show" : ""}
        onClick={() => HandleClick(id)}
      />
    </>
  );
}

export default SlideButton;
