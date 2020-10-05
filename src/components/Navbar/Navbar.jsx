import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>christina xiao</h1>
        <div className="info-bar">
          <p className="info-item">christinaxiao@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className="info-link"
            to={{ pathname: "https://www.instagram.com/christinahhxiao/" }}   // outside 2 {} are for reading as variable, inside 2 {} are because of pathname: reqs
            target="_blank"
          >
            instagram
          </Link>

          <Link 
            className="info-link"
            to={{ pathname: "https://open.spotify.com/user/ti3sxd3pmm6wbh9nl8befo5e8?si=2BqogxixTTiCBez1wpctgw" }}
            target="_blank"
          >
            spotify
          </Link>

          <Link 
            className="info-link"
            to={{ pathname: "https://www.linkedin.com/in/christina-xiao/" }}
            target="_blank"
          >
            linkedin
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link" to={{ pathname: "/about" }}>
          about
        </Link>
        <Link className="nav-link" to={{ pathname: "/experience" }}>
          experience
        </Link>
        <Link className="nav-link" to={{ pathname: "/projects" }}>
          projects
        </Link>
      </div>
    </>
  );
}
