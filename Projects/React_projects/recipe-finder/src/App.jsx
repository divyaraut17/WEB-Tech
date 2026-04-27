import { BrowserRouter, Routes, Route } 
from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import RecipeDetails from "./Components/RecipeDetails";
import Favorites from "./Components/Favorites";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/recipe/:id"
          element={<RecipeDetails />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;