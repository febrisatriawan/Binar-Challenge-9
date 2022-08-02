import React, { useContext } from "react";
import "../pages/LandingPage/styles.css";
import { Link } from "react-router-dom";
import firebaseAuth from "../config/firebaseAuth";
import AuthContext from "../context/AuthContext";
import { signOut } from "firebase/auth";

const Navbar = ({ isFixedTop }) => {
  const authenticatedUser = useContext(AuthContext);
  const onLogoutClick = async () => {
    await signOut(firebaseAuth);
  };
  return (
    <header className={isFixedTop}>
      <div className="container-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand logo" to={"/"}>
            Traditional Game
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse p-2 menu"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <div>Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#games">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#requirements">
                  Requirements
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/game"}>
                  <div>Game</div>
                </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mt-2 mt-lg-0">
                {!authenticatedUser ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/register"}>
                        <div>Register</div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/login"}>
                        <div>Login</div>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                  <li className="nav-item">
                    <Link className="nav-link" style={{ color: "white" }} to={"/profile/"}>
                      {authenticatedUser.email}
                    </Link>
                  </li>
                  <li className="nav-item" onClick={onLogoutClick}>
                    <div className="nav-link" style={{ color: "white", fontSize: "1rem", lineHeight:"1.75rem", fontWeight: "bold" }}>
                      Logout
                    </div>
                  </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
