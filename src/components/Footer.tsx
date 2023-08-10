import SocialNav from "./SocialNav";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__grid contenedor">
        <div className="footer__widget">
          <h3 className="footer__heading">Nosotros</h3>
          <p className="footer__texto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            cum, minus atque harum maxime reprehenderit fugiat sed corrupti
            inventore tempora quisquam provident aut facere ipsum pariatur, esse
            velit blanditiis quae!
          </p>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading">Horario</h3>
          <p className="footer__texto">Lun-Vie: 7AM - 8PM</p>
          <p className="footer__texto">Sábado: 7AM - 8PM</p>
          <p className="footer__texto">Domingo: Cerrado</p>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading">Contacto</h3>
          <p className="footer__texto">Av. Santa fe 9000</p>

          <SocialNav />
        </div>
      </div>

      <p className="footer__copyright">
        Carolina Spa & Salon. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
