function addCard(event) {
    let target;
    let nombre = document.getElementById("nombre").value;
    let resumen = document.getElementById("resumen").value;
    let etapa = document.getElementById("etapa").value
    switch (etapa) {
        case "Por iniciar":
            imagen = "https://i.blogs.es/e652ca/harold-pain-meme/840_560.jpeg";
            target = document.getElementById("listaPorIniciar")
            break;
        case "En proceso":
            imagen = "https://i.ytimg.com/vi/6iu9i0X3rZ0/maxresdefault.jpg";
            target = document.getElementById("listaEnProceso")
            break;
        case "Finalizadas":
            imagen = "https://avatars.githubusercontent.com/u/13066412?v=4";
            target = document.getElementById("listaFinalizadas")
            break;
        case "Otras ideas":
            imagen = "https://media.licdn.com/dms/image/C4D03AQEDe2ozEgGofA/profile-displayphoto-shrink_800_800/0/1658508660538?e=2147483647&v=beta&t=fWHYr7Juttx3BEGqncYuebqWgarFjAEPNWU2oFv1Png";
            target = document.getElementById("listaOtras")
            break;
        default:
            imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/1200px-ProhibitionSign2.svg.png"
    }
    const markup = `
    <li class="card">
                    <img src=${imagen}
                        class="card-img-top imagenDeTarjeta" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">${resumen}</p>
                        <div>
                            <button onclick="retoceder()">
                                retroceder
                            </button>
                            <button onclick="proceder()">
                                proceder
                            </button>
                        </div>
                    </div>
                </li>
   `;
    const newCard = document.createElement("div")
    newCard.innerHTML = markup;
    target.append(newCard)
}

function proceder() {
    alert("falta implementar")
}

function eliminar() {
    alert("falta implementar")
}

function retroceder() {
    alert("falta implementar")
}