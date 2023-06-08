import React, { useState } from "react";



function Button(props) {

  const [bodyColor, setBodyColor] = useState(null);

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // allows the entire body to change color
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <>
      <div style={{ backgroundColor: bodyColor }}>
        <button onClick={changeColor}>Change Theme Colors</button>
      </div>
    </>
  )
};

export default Button;