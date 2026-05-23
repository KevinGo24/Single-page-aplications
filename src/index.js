import './style.scss';
import { enreutanamiento } from "./router/index.routes";
window.addEventListener('hashchange', () => {
    // Le pasamos el nuevo hash modificado
    enreutanamiento(window.location.hash);
});