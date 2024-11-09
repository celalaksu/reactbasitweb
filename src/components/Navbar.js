import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // kodlar
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>{" "}
          </li>
          <li>
            <Link to="/hakkinda">Hakkında</Link>{" "}
          </li>
          <li>
            <Link to="/iletisim">İletişim</Link>
          </li>
          <li>
            <Link to="/datalistcomponent">Veri Al</Link>
          </li>
          <li><Link to="/verilera">Veriler Async</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
