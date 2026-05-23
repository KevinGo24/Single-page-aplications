import home from "../Views/Referencias";

const rout = document.getElementById('master');

const enreutanamiento = (router) => {
    rout.innerHTML = '';

    switch (router) {
        // Esto atrapa cualquier variante del inicio (vacío, solo #, o #/)
        case "#/": {  // <--- AGREGA ESTA LÍNEA AQUÍ
           console.log("alerta roja")
           break
        }
        case '#/Referencias': {
            return rout.appendChild(home());
        }
        case '#/Publicaciones': {
            console.log('publicaciones');
            break
        }
        case '#/Ubicacion': {
            console.log('ubicacion');
            break
        }
        default: {
            rout.innerHTML = '<h2>Error 404: Not Found</h2>';
            console.log('error 404: not found. Ruta recibida:', router);

        }
    }
}

export { enreutanamiento };