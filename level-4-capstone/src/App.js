import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Home from './Components/Home';
import Protein from './Components/Protein';
import Carb from './Components/Carb';
import Header from './Components/Header';

import './Css/App.css'
import './Css/Protein.css'
import Button from './Components/Button';
import { ThemeContext } from './Context/ThemeContext';
import { useState } from 'react';
// import { AxiosContextProvider } from './Context/AxiosContext';

import Iron from './Components/Iron'


const linkStyle = {
  margin: "2rem",
  textDecoration: "none",
  // color: "white",
  fontSize: 20,
}

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/protein" element={<Protein />} />
          <Route path="/carb" element={<Carb />} />
          <Route path="/iron" element={<Iron />} />
          {/* when meal is clicked it directs you that that id number */}
          <Route path="/proteinMeals/:id" element={<Protein />} />
          <Route path="/carbMeals/:id" element={<Carb />} />
          <Route path="/ironMeals/:id" element={<Iron />} />

        </Routes>
      </Router>
      
      <Button />
    </>
  );
}

export default App;
