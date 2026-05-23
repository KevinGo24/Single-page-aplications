//Importaciones de las vistas 
import Views from "../Views/Referencias.html";
//----------------------------
export default () => {
      const Viweshome = document.createElement('div');
      Viweshome.innerHTML = Views;
      return Viweshome;
}