import React from "react";

const Jumbotron = () => {
  return (
    <div className="container mt-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-4">¡Bienvenido a Mi Pagina!</h1>
          <p className="lead">
          Bienvenidos a la página de Yarley, esta pagina fue hecha con React y Bootstrap con el fin de realizar practicas del curso que está tomando con 4Geeks Academy, gracias por tu visita.
          </p>
          <button className="btn btn-primary btn-lg">Más información</button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron