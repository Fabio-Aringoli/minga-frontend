//Debo importar los componentes que esten en TODAS las vistas
import NavBar from "../components/NavBar"
//import Index from "../pages/Index";
import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
//los layouts son PLANTILLAS
//algo que se va a repetir enj todas las vistas

export default function Main({children}) {
  console.log(children);
    //la propiedad children CONTIENE el contenido que main tiene como hijo
    //la porpiedad children es undefined si Main (App.jsx) no tiene hijos
  return (
    <div className=" flex flex-col min-h-screen w-full justify-between items-center overflow-y-hidden">
      <NavBar />
      {/* contenido dinamico de cada interfaz */}
      {children}
      <Carrousel/>
      <Footer />
    </div>
  )
}
