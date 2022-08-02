import React from "react";
import "./styles.css";

const Navbar = () => {
    const userId = 1;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand logo" >
                Traditional Game
            </span>
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
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">
                            Home <span className="sr-only">(current)</span>
                        </a>
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
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="register">
                                Register
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login.html">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href={"/profile/" + userId}>
                                <img className="profilePicture" src="https://via.placeholder.com/150?text=Profile+Picture" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;