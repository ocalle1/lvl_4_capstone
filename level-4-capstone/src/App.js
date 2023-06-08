import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Protein from './Components/Protein';
import Carb from './Components/Carb';
import Iron from './Components/Iron';
import Button from './Components/Button';
import './Css/App.css';



function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
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
