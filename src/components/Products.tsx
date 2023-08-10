import ImageComponent from "./ui/image";
import producto01 from "../assets/producto_01.jpg";
import producto02 from "../assets/producto_02.jpg";
import producto03 from "../assets/producto_03.jpg";
import producto04 from "../assets/producto_04.jpg";
import { productsData } from "../data/data";

const Products = () => {
  return (
    <main className="productos contenedor seccion" id="products">
      <h2 className="productos__heading">
        nuestros <span>productos</span>
      </h2>

      <div className="productos__grid">
        {productsData.map((e, index) => (
          <div key={index} className="producto">
            <div className="producto__mask">
              <ImageComponent
                className="producto__imagen"
                imageUrl={
                  index === 0
                    ? producto01
                    : index === 1
                    ? producto02
                    : index === 2
                    ? producto03
                    : producto04
                }
                alt={`imagen producto 0${index + 1}`}
              />
            </div>
            <div className="producto__contenido">
              <h3 className="producto__nombre">{e.title}</h3>
              <p className="producto__descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                eveniet neque
              </p>
              <p className="producto__precio">{e.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
