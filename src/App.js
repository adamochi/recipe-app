import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Recipes from "./screens/Recipes/Recipes";
import CreateRecipe from "./screens/CreateRecipe/CreateRecipe";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/create" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
