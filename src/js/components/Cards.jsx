import React from "react";

const Cards = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        
        <div className="col-md-3">
          <div className="card">
            <img src="https://picsum.photos/200/200" className="card-img-top" alt="Imagen 1" />
            <div className="card-body text-center">
              <h5 className="card-title">Paseos</h5>
              <p className="card-text">Aqui se muestran imagenes de mis paseos.</p>
              <button className="btn btn-success">Ver más</button>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div className="card">
            <img src="https://picsum.photos/200/200" className="card-img-top" alt="Imagen 2" />
            <div className="card-body text-center">
              <h5 className="card-title">Familia</h5>
              <p className="card-text">Aqui veras imagenes de nuestros familiares.</p>
              <button className="btn btn-success">Ver más</button>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div className="card">
            <img src="https://picsum.photos/200/200?grayscale" className="card-img-top" alt="Imagen 3" />
            <div className="card-body text-center">
              <h5 className="card-title">Paisajes</h5>
              <p className="card-text">Podras ver aqui imagenes de paisajes hermosos.</p>
              <button className="btn btn-success">Ver más</button>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div className="card">
            <img src="https://picsum.photos/200/200/?blur" className="card-img-top" alt="Imagen 4" />
            <div className="card-body text-center">
              <h5 className="card-title">Eventos</h5>
              <p className="card-text">Mostramos aqui imagenes de nuestros eventos especiales.</p>
              <button className="btn btn-success">Ver más</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;