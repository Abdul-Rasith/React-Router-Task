import React from "react";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container-fluid text-align-center">
          <Link to={"/All"} className="navbar-brand" href="#">
            All
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  FULL STACK DEVELOPMENT
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/DataScience"} className="nav-link active">
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/CyberSecurity"} className="nav-link active">
                  CYBER SECURITY
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Career"} className="nav-link active">
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
