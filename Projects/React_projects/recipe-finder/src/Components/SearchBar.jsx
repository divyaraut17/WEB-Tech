import { useState } from "react";

function SearchBar({ searchRecipe }) {

  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    searchRecipe(query);
  };


  return (

    <form onSubmit={submit}>

      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "15px",
          width: "350px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "1px solid #ccc"
        }}
      />


      <button
        style={{
          padding: "15px 25px",
          marginLeft: "10px",
          background: "orange",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px"
        }}
      >
        Search
      </button>

    </form>

  );

}

export default SearchBar;