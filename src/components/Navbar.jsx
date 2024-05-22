import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/about">About</Link>
      <Link to="/create">Create</Link>
    </div>
  );
}

export default Navbar;
