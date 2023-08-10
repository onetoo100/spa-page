const Nav = () => {
  const navigatePages = (id: string) => {
    const element: HTMLElement | null = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="navegacion">
      <div className="navegacion__border">
        <nav className="navegacion__contenedor">
          <a className="navegacion__enlace" href="#">
            Inicio
          </a>
          <a
            className="navegacion__enlace"
            onClick={() => navigatePages("footer")}
          >
            Nosotros
          </a>
          <a
            className="navegacion__enlace"
            onClick={() => navigatePages("cards")}
          >
            Servicios
          </a>
          <a
            className="navegacion__enlace"
            onClick={() => navigatePages("products")}
          >
            Productos
          </a>
          <a
            className="navegacion__enlace"
            onClick={() => navigatePages("footer")}
          >
            Contacto
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
