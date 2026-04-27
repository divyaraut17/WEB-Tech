import { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

function Home() {

  const [recipes, setRecipes] = useState([]);

  const searchRecipe = async (food) => {

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    );

    setRecipes(
      res.data.meals || []
    );

  };


  const randomRecipe = async () => {

    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    setRecipes(
      res.data.meals
    );

  };



  return (

    <div
      style={{
        background: "#fff8f0",
        minHeight: "100vh",
        padding: "30px"
      }}
    >

      <div
        style={{
          textAlign: "center",
          padding: "40px"
        }}
      >

        <h1
          style={{
            fontSize: "55px",
            marginBottom: "10px"
          }}
        >
          🍲 Recipe Finder
        </h1>


        <p
          style={{
            fontSize: "24px",
            color: "#555"
          }}
        >
          Discover Delicious Recipes
        </p>


        <SearchBar searchRecipe={searchRecipe} />


        <button
          onClick={randomRecipe}
          style={{
            display: "block",
            margin: "20px auto",
            padding: "12px 25px",
            background: "tomato",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          🎲 Surprise Me
        </button>

      </div>
      


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
          padding: "30px"
        }}
      >

        {
          recipes.map(recipe => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
            />
          ))
        }

      </div>

    </div>

  );

}

export default Home;