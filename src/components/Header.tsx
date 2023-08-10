import SocialNav from "./SocialNav";
import ImageComponent from "./ui/image";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header contenedor">
      <div className="header__grid">
        <div className="header__logo">
          <ImageComponent imageUrl={logo} alt="logo spa" />
        </div>
        <SocialNav />
      </div>
    </header>
  );
};

export default Header;
