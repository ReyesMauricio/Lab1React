
import Controlado from "./components/Controlado";
import Header from "./components/Header";

const App = () => {
  const titulo = "Mi primer proyecto con React.JS";
  const logo = "./src/assets/react.svg";
  const clases = {
    titulo: "text-info text-center",
    subtitulo: "text-info text-center",
    imagenCenter: "rounded d-block mx-auto",
  };
  return (
    <div className="container">
      <h1 className={clases.titulo}>
        {titulo}
      </h1>
      <Header/>
      <img src={logo} alt="" className={clases.imagenCenter}  />
      <hr />
      <center>
        <Controlado/>
      </center>
    </div>
  );
};

export default App;
