import { Link } from "react-router-dom";


function Navbar() {

  return (

    <nav
      style={{
        background: "tomato",
        padding: "20px",
        textAlign: "center"
      }}
    >

      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "30px",
          fontSize: "22px",
          textDecoration: "none"
        }}
      >
        Home
      </Link>


      <Link
        to="/favorites"
        style={{
          color: "white",
          fontSize: "22px",
          textDecoration: "none"
        }}
      >
        ❤️ Favorites
      </Link>

    </nav>

  );

}

export default Navbar;