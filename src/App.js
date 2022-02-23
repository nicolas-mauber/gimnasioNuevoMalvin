import "./App.css";
import Horarios from "./components/Calendario/Horarios";
import Carrusel from "./components/carrusel/Carrusel";
import Footer from "./components/Footer/Footer";
import Map from "./components/Mapa/Map";
import Navbar from "./components/Navbar/Navbar";
import Informacion from "./components/Personal/Informacion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Horarios />
      <Carrusel />
      <Informacion/>
      <Map/>
      <Footer/>

    </div>
  );
}

export default App;
