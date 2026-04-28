import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeDetails() {

  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);


  useEffect(() => {
    fetchRecipe();
  }, []);


  const fetchRecipe = async () => {

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    setRecipe(
      res.data.meals[0]
    );

  };


  const saveFavorite = () => {

    let favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];


    if (
      !favorites.find(
        item => item.idMeal === recipe.idMeal
      )
    ) {
      favorites.push(recipe);
    }


    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    alert("Recipe Saved ❤️");

  };


  if (!recipe) {
    return <h2>Loading...</h2>;
  }


  return (

    <div
      style={{
        background: "#fff8f0",
        minHeight: "100vh",
        padding: "40px"
      }}
    >

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,.1)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "50px"
          }}
        >
          🍽 {recipe.strMeal}
        </h1>


        <div style={{ textAlign: "center" }}>

          <img
            src={recipe.strMealThumb}
            style={{
              width: "450px",
              borderRadius: "20px",
              marginTop: "20px"
            }}
          />

        </div>


        <div style={{ textAlign: "center" }}>

          <button
            onClick={saveFavorite}
            style={{
              marginTop: "20px",
              padding: "14px 24px",
              background: "tomato",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer"
            }}
          >
            ❤️ Save Favorite
          </button>

        </div>



        <h2 style={{ marginTop: "40px" }}>
          🥗 Ingredients
        </h2>


        <ul
          style={{
            fontSize: "20px",
            lineHeight: "2"
          }}
        >

          {
            Array.from(
              { length: 20 },
              (_, i) => recipe[`strIngredient${i + 1}`]
            ).map((item, index) =>

              item &&
              item.trim() !== "" && (

                <li key={index}>
                  {item}
                </li>

              )

            )
          }

        </ul>



        <h2 style={{ marginTop: "40px" }}>
          👨‍🍳 Cooking Steps
        </h2>


        <ol
          style={{
            fontSize: "18px",
            lineHeight: "2"
          }}
        >

          {
            recipe.strInstructions
              .split(". ")
              .map((step, index) =>

                step.trim() && (

                  <li
                    key={index}
                    style={{
                      marginBottom: "18px"
                    }}
                  >
                    {step}
                  </li>

                )

              )
          }

        </ol>

      </div>

    </div>

  );

}

export default RecipeDetails; 