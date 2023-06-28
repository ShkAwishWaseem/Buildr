import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

function Header() {
  return (
    <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent text-white">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand gold">BUILDR</Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link to='/' className="nav-item nav-link">Home</Link>
                <Link to='/services' className="nav-item nav-link">Services</Link>
                <Link to='/choose' className="nav-item nav-link">Why choose us</Link>
                
            </div>
            <div className="navbar-nav ms-auto">
                <Link to='/contact' className="nav-item nav-link gold">Join us!</Link>
            </div>
        </div>
    </div>
</nav>
    </div>
  );
}


export default Header;
