import { Router } from "react-router-dom";
import Navbar from "../src/component/Navbar";

function Header() {
  return (
    <div className="Navbar">
      <Navbar>
        <Router>
          <Router path="/src/component/Gallery" />
        </Router>
      </Navbar>
    </div>
  );
}

export default Header;
