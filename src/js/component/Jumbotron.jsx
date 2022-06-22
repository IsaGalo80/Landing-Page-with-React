import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
const Jumbotron = () => {
  return (
    <div className="container bg-light mt-4 mb-4 sm-ps-1">
      <div className="row">
        <div className="col-12 bg-light bg-gradient ">
          <h3 className="display-5 fw-bold">Rock de los 80!</h3>
          <p className="col- 12 md-8 fs-4">
            El rock de los años 80 marcó un nuevo despertar de sonidos,
            dominados por los adelantos tecnológicos y la aplicación de la
            electrónica a la música, a veces un tanto en exceso. Además, tanto
            los peinados, como la ropa de los artistas cambió totalmente en
            cuanto al aspecto que se venía usando en los 60s y los 70s, sumado
            al auge de los videoclips, y la popularización de cadenas de TV
            exclusivas de música, como la legendaria MTV. A continuación, un
            listado de las bandas y grupos que debes escuchar.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to action
          </button>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
