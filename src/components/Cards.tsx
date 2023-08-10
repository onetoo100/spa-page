import ImageComponent from "./ui/image";
import servicio1 from "../assets/servicio_01.jpg";
import servicio2 from "../assets/servicio_02.jpg";
import servicio3 from "../assets/servicio_03.jpg";

const Cards = () => {
  return (
    <section className="cards" id="cards">
      <div className="cards__grid contenedor">
        <div className="card">
          <ImageComponent
            className="card__imagen"
            imageUrl={servicio1}
            alt="imagen card 01"
          />
          <div className="card__contenido">
            <h2 className="card__heading">
              Conoce sobre <span>Nosotros</span>{" "}
            </h2>
            <a className="card__enlace" href="#">
              Leer más
            </a>
          </div>
        </div>

        <div className="card">
          <ImageComponent
            className="card__imagen"
            imageUrl={servicio2}
            alt="imagen card 02"
          />
          <div className="card__contenido">
            <h2 className="card__heading">
              nuestros<span>servicios</span>{" "}
            </h2>
            <a className="card__enlace" href="#">
              Leer más
            </a>
          </div>
        </div>

        <div className="card">
          <ImageComponent
            className="card__imagen"
            imageUrl={servicio3}
            alt="imagen card 03"
          />
          <div className="card__contenido">
            <h2 className="card__heading">
              vísita nuestra <span>tienda</span>{" "}
            </h2>
            <a className="card__enlace" href="#">
              Leer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
