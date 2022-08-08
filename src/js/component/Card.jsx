import React from "react";
// import img from './img/acdc.jpg'
import queen from "./assets/queen.jpg";
import guns from "./assets/guns.jpg";
import acdc from "./assets/acdc.jpg";
import metalica from "./assets/metalica.jpg";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
const Card = () => {
  return (
    <div id= "tarjeta"className="container ">
      <div className="row">
        <div className="col-auto ">  
          <div className="card border border-dark" style={{ width: '16rem', height:'35rem'}} >
            <img src={queen} class="card-img-top" style={{widght:50, height:135}} alt="..."/>
            <div className="card-group">
              <h5 className="card-title">Queen</h5>
              <p className="card-text px-2">
                Banda de rock inglesa formada en 1970. Los miembros eran Freddie
                Mercury (Voces y Piano), Brian May (Guitarra, Voces), Roger
                Taylor (Batería, Voces), y John Deacon (Bajo, Voces).
              </p>
              <a href="#" className=" d-grid gap-2 col-6 mx-auto btn btn-dark mt-5">
                Bohemian Rhaps ody
              </a>
            </div>
          </div>
        </div>
        <div  id= "tarjeta" className="col-md-3">
          <div className="card border border-warning"style={{ width: '16rem', height:'35rem' }}  >
            <img src={metalica} class="card-img-top" style={{widght:50, height:135}} alt="..."/>
            <div className="card-group">
              <h5 className="card-title">Metalica</h5>
              <p className="card-text px-2">
              Banda americana de Thrash Metal formada en 1981. La alineación original era James Hetfield (Vocalista y guitarrista rítmico), Dave Mustaine (Guitarra principal), Lars Ulrich (Batería), Ron McGovney (Bajista).
              </p>
              <a href="#" className="d-grid gap-2 col-6 mx-auto btn btn-warning mt-5">
              Master Of Puppets
              </a>
            </div>
          </div>
        </div>
        <div  id= "tarjeta" className="col-md-3">
          <div className="card border border-success" style={{ width: '16rem', height:'35rem' }}  >
            <img src={acdc} class="card-img-top" style={{widght:50, height:135}} alt="..."/>
            <div className="card-group">
              <h5 className="card-title">AC/DC</h5>
              <p className="card-text px-2">
              Surgidos en Australia, se formaron en 1973 por los hermanos Malcolm y Angus Young. Fueron liderados por Bon Scott hasta su prematura muerte por intoxicación alcohólica en 1979, después de lo cual contrataron a Brian Johnson.
              </p>
              <a href="#" className="d-grid gap-2 col-6 mx-auto btn btn-success mt-3">
              Highway to Hell
              </a>
            </div>
          </div>
        </div>
        <div  id= "tarjeta" className="col-md-3">
          <div className="card border border-primary" style={{ width: '16rem', height:'35rem' }} >
            <img src={guns} class="card-img-top" style={{widght:50, height:135}} alt="..."/>
            <div className="card-group">
              <h5 className="card-title">Guns N’ Roses</h5>
              <p className="card-text px-2">
              Guns N’ Roses, a menudo abreviado como GNR, es una banda de rock americano de Los Ángeles, California, formada en 1985. La banda estaba formada por el vocalista Axl Rose, el guitarrista principal Slash, el guitarrista rítmico Izzy Stradlin, el bajista Duff McKagan y el baterista Steven Adler.
              </p>
              <a href="#" className="d-grid gap-2 col-6 mx-auto btn btn-primary mt-1">
                November rain
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
