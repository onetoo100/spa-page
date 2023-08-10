import Header from "./components/Header";
import Nav from "./components/Nav";
import Swiper from "./components/Swipper";
import Welcome from "./components/Welcome";
import Cards from "./components/Cards";
import Schedule from "./components/Schedule";
import Products from "./components/Products";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import "./scss/app.scss";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Swiper />
      <Welcome />
      <Cards />
      <Schedule />
      <Products />
      <Appointment />
      <Footer />
    </>
  );
}

export default App;
