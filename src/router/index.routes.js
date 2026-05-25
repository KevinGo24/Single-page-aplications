import { pages_controller } from "../controller/main.controller";

const rout = document.getElementById('master');

const enreutanamiento = (router) => {

    rout.innerHTML = '';

    switch (router) {

        case "#/": {
            console.log("inicio");
            break;
        }

        case '#/Referencias': {
            rout.appendChild(
                pages_controller.referencia()
            );
            break;
        }
        case '#/Ubicacion': {
                rout.appendChild(
                pages_controller.ubicacion()
            )
            break;
        }

        default: {
            rout.innerHTML = '<h2>Error 404: Not Found</h2>';
            console.log('Ruta recibida:', router);
        }
    }
}

export { enreutanamiento };