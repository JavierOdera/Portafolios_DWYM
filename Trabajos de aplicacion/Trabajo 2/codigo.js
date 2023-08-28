function addCard(event) {
    console.log('target', event.target.id);
    switch (event.target.id){
        case "TareasPorIniciar":
            imagen = "https://i.blogs.es/e652ca/harold-pain-meme/840_560.jpeg";
            break;
        case "TareasEnProceso":
            imagen = "https://i.ytimg.com/vi/6iu9i0X3rZ0/maxresdefault.jpg";
            break;
        case "TareasFinalizadasBoton":
            imagen = "https://avatars.githubusercontent.com/u/13066412?v=4";
            break;
        case "otrasIdeasBoton":
            imagen = "https://media.licdn.com/dms/image/C4D03AQEDe2ozEgGofA/profile-displayphoto-shrink_800_800/0/1658508660538?e=2147483647&v=beta&t=fWHYr7Juttx3BEGqncYuebqWgarFjAEPNWU2oFv1Png";
            break;
        default:
            imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/1200px-ProhibitionSign2.svg.png"
    }
    let target = document.getElementById(event.target.id) //hay que convertir esto en un formulario
    const markup = `
    <li class="card">
                    <img src=${imagen}
                        class="card-img-top imagenDeTarjeta" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Resumen de la tarea a realizar.</p>
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
    target.previousElementSibling.append(newCard)
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