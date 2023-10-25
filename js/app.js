const mensajeIntroducido = document.querySelector("#mensaje")

const mensajesGuardados = document.querySelector("#lista-mensajes")

const agregar = document.querySelector(".button")

let listaMensajes = JSON.parse(localStorage.getItem("mensajes"))



agregar.addEventListener("click", addMensaje)

mensajesGuardados.addEventListener("click", deleteMensaje)



function addMensaje(e) {

  e.preventDefault()

  const mensaje = mensajeIntroducido.value

  listaMensajes.push(mensaje)

  showMensajes();

  mensajeIntroducido.value = ""

  localStorage.setItem("mensajes", JSON.stringify(listaMensajes));
}



function showMensajes() {

  limpiarHTML()

  listaMensajes.forEach((mensaje) => {
    const texto = document.createElement("tr")
    texto.innerHTML = `
      <th>${mensaje}</th>
      <td><a href="#" class="eliminar" data-id="${mensaje}">X</a></td>
    `
    mensajesGuardados.appendChild(texto);
  })

}



function limpiarHTML() {

  while (mensajesGuardados.firstChild) {
    mensajesGuardados.firstChild.remove();
  }

}

function deleteMensaje(e) {

  if (e.target.classList.contains("eliminar")) {

    const mensajeAEliminar = e.target.getAttribute("data-id")

    listaMensajes = listaMensajes.filter((mensaje) => mensaje !== mensajeAEliminar)

    localStorage.setItem("mensajes", JSON.stringify(listaMensajes))

    showMensajes()
  }
}

showMensajes()