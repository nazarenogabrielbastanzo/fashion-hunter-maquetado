let elemAddNewIcon = document.querySelector(".add-new-icon");
let elemCrearPublicacion = document.querySelector(".crear-publicacion");
let oculto = true;
elemAddNewIcon.addEventListener("click", mostrarCrearPublicacion);
function mostrarCrearPublicacion() {
  if (oculto) {
    elemCrearPublicacion.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__faster",
      "crear-visible"
    );
    oculto = !oculto;
  } else {
    elemCrearPublicacion.classList.add("animate__fadeOutRight", "crear-oculto");
    oculto = !oculto;
  }
}
