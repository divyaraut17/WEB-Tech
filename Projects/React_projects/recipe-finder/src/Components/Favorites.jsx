import { useEffect, useState } from "react";

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const savedRecipes =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    setFavorites(savedRecipes);

  }, []);


  return (

    <div
      style={{
        padding:"30px",
        background:"#fff8f0",
        minHeight:"100vh"
      }}
    >

      <h1
        style={{
          textAlign:"center",
          marginBottom:"40px"
        }}
      >
        ❤️ Favorite Recipes
      </h1>


      {
        favorites.length === 0 &&
        (
          <h2 style={{textAlign:"center"}}>
            No favorites saved yet
          </h2>
        )
      }


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"30px"
        }}
      >

        {
          favorites.map(recipe => (

            <div
              key={recipe.idMeal}
              style={{
                background:"white",
                padding:"20px",
                borderRadius:"15px",
                boxShadow:"0 4px 12px rgba(0,0,0,.1)",
                textAlign:"center"
              }}
            >

              <img
                src={recipe.strMealThumb}
                width="250"
                style={{
                  borderRadius:"12px"
                }}
              />

              <h3>
                {recipe.strMeal}
              </h3>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Favorites;