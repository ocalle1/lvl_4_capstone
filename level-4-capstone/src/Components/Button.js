import { blue } from "@mui/material/colors";
import { ThemeContext } from "../Context/ThemeContext";
import React, { useContext, useState } from "react";



function Button(props) {
// Am not using context so far
const context = useContext(ThemeContext);


    const [bodyColor, setBodyColor] = useState(null);

    const changeColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // allows the entire body to change color
        document.body.style.backgroundColor = randomColor;    
      };
  





    return(
        <>
<div style={{ backgroundColor: bodyColor }}>
      <button onClick={changeColor}>Change Theme Colors</button>
    </div>

        </>
    )
};



export default Button;