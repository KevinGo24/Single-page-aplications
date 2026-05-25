// --- I M P O T A C I O N -----
import ubicacion from "../Views/Ubicacion.html";
//------------------------------

export default () => {
    const Viewsubicacion= document.createElement('div');
    Viewsubicacion.innerHTML= ubicacion
    return Viewsubicacion
}