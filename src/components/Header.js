import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <aside>
        <nav className="gosrock-header">
          <Link to="/">
            <div className="logo">GOSROCK</div>
          </Link>
          <ul className="menu">
            <Link to="/members">
              <li>22thmembers</li>
            </Link>
            <Link to="/band">
              <li>band</li>
            </Link>
            <Link to="/memory">
              <li>memory</li>
            </Link>
            <Link to="/study">
              <li>study</li>
            </Link>
            <Link to="/faq">
              <li>FAQ</li>
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  );
};
