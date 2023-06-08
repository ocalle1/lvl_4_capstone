import { ThemeContext } from "../Context/ThemeContext";
import React, { useContext } from "react";
// Link imported here so that the App name Ability Meals will show up on each page
import { Link } from "react-router-dom";

const linkStyle = {
    margin: "2rem",
    textDecoration: "none",
    color: "navy",
    fontSize: 20,
}

function Header(props) {

    // const context = useContext(ThemeContext)

    return (
        <>
            <h1 className="title">Ability Meals</h1>
            <nav className="navbar">
                <Link to="protein" style={linkStyle}>Protein</Link>
                <Link to="carb" style={linkStyle}>Carbohydrate Conscious</Link>
                <Link to="iron" style={linkStyle}>Iron Recipes</Link>
            </nav>
            <footer className="footer">Created by Oscar Calle</footer>

        </>
    )
};

export default Header;