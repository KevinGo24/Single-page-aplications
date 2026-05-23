//Importaciones de las vistas 
import Views from "../Views/Referencias.html";

//----------------------------
export default () => {

      const Viweshome = document.createElement('div');

      Viweshome.innerHTML = Views;

      const click = Viweshome.querySelector('#Btn_enviar');

      click.addEventListener('click', () => {
            alert('Esta es una alerta MODOD PRUEBA');
      });

      return Viweshome;
}