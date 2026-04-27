import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {

  return (

    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,.1)",
        textAlign: "center"
      }}
    >

      <img
        src={recipe.strMealThumb}
        style={{
          width: "100%",
          borderRadius: "12px"
        }}
      />


      <h3>
        {recipe.strMeal}
      </h3>


      <Link to={`/recipe/${recipe.idMeal}`}>

        <button
          style={{
            padding: "10px 20px",
            background: "tomato",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          View Recipe
        </button>

      </Link>

    </div>

  );

}

export default RecipeCard;