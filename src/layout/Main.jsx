import NavBar from "../components/NavBar"
//import Index from "../pages/Index";
import Footer from "../components/Footer"
//Debo importar los componentes que esten en TODAS las vistas
//los layouts son PLANTILLAS
//algo que se va a repetir enj todas las vistas



export default function Main({children}) {
    console.log(children);
    //la propiedad children CONTIENE el contenido que main tiene como hijo
    //la porpiedad children es undefined si Main no tiene hijos
  return (
    <div className="shirk-0 bg-cover bg-center bg-no-repeat bg-[url('./src/assets/image/background.png')] flex flex-col min-h-screen w-full justify-between items-center overflow-y-hidden">
        <NavBar />
        {/* contenido dinamico de cada interfaz */}
        {children}
        <Footer />
    </div>
  )
}
