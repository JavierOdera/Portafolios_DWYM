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
                            <button onclick="retroceder(this)">
                                retroceder
                            </button>
                            <button onclick="eliminar(this)">
                                eliminar
                            </button>
                            <button onclick="proceder(this)">
                                proceder
                            </button>
                        </div>
                    </div>
                </li>
   `;
    const newCard = document.createElement("div")
    newCard.innerHTML = markup;
    target.append(newCard)
    document.getElementById("nombre").value = '';
    document.getElementById("resumen").value = '';
    document.getElementById("etapa").value = "listaPorIniciar";
}

function proceder(boton) {
    let target = boton.parentNode.parentNode.parentNode.parentNode
    if (target.parentNode.id === "listaPorIniciar") {
        let newTarget = document.getElementById("listaEnProceso")
        newTarget.append(target)
    }
    else if (target.parentNode.id === "listaEnProceso") {
        let newTarget = document.getElementById("listaFinalizadas");
        newTarget.append(target);
    }
}

function eliminar(boton) {
    let target = boton.parentNode.parentNode.parentNode.parentNode;
    target.remove();
}

function retroceder(boton) {
    let target = boton.parentNode.parentNode.parentNode.parentNode
    if (target.parentNode.id === "listaEnProceso") {
        let newTarget = document.getElementById("listaPorIniciar")
        newTarget.append(target)
    }
    else if (target.parentNode.id === "listaFinalizadas") {
        let newTarget = document.getElementById("listaEnProceso");
        newTarget.append(target);
    }
}