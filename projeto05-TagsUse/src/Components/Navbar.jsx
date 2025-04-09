import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="blocoNav">
      <span> <Link className="fonte" id="ulnk" to="/exemplos"> <strong> 📦 Exemplos </strong> </Link> </span>

      <span> <Link className="fonte" id="link" to="/exercicios"> <strong> 🔨 Exercicios </strong> </Link> </span>
    </nav>
  );
}
export default Navbar;
