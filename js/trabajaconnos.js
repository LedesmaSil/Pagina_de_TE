const d = document;
const selectProvincias = d.getElementById("selectProvincias");
//const selectMunicipios = d.getElementById("selectMunicipios");
//const $electLocalidades = d.getElementById("selectLocalidades");

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let options = `<option value="Elige una provincia">Elige una provincia</option>`;

        json.provincias.forEach(el => options += `<option value="${el.nombre}">${el.nombre}</option>`);

        selectProvincias.innerHTML = options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        selectProvincias.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

d.addEventListener("DOMContentLoaded", provincia)