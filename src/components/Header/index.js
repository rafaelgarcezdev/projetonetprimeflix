import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        NETPRIME FLIX
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus Filmes
      </Link>
    </header>
  );
}

export default Header;
