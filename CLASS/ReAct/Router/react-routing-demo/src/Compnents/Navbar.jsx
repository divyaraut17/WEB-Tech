import { Link } from "react-router-dom";

function Navbar() {
    {/* Link is used instead of <a> to avoid page reload */}
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;