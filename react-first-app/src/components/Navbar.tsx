import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: 10 }}>
        🏠 Home
      </Link>
      <Link to="/todos" style={{ marginRight: 10 }}>
        📝 TODO
      </Link>
      <Link to="/users" style={{ marginRight: 10 }}>
        👥 Users
      </Link>
      <Link to="/calculator">🧮 Calculator</Link>
    </nav>
  );
};

export default Navbar;
