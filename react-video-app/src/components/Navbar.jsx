import { Link } from "react-router-dom";
import { HamburgerIcon, LogoIcon } from "./Icons";

import Wrapper from "../styles/Navbar";

function Navbar() {
  return (
    <Wrapper>
      <div className="logo flex-row">
        <HamburgerIcon className="toggle-navhandler" />
        <span>
          <Link to="/">
            <LogoIcon
              style={{
                width: 80,
                height: 24,
              }}
            />
          </Link>
        </span>
      </div>

      {/* Search */}

      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Wrapper>
  );
}

export default Navbar;
