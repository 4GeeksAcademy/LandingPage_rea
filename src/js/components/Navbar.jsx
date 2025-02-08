import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar bg-success">
      <div className="container">
       
        <span className="navbar-brand fw-bold text-white fs-2">
          Pagina de Yarley
        </span>

       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse justify-content-end fw-bolder" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Servicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;