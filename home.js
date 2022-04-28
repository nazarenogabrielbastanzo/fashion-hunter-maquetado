let elemAddNewIcon = document.querySelector(".add-new-icon");
let elemCrearPublicacion = document.querySelector(".crear-publicacion");
let oculto = true;
let elemViewNotifications = document.querySelector('.notifications');
let elemOverlayNotifications = document.querySelector('.overlay-notifications');
let notificationsHidden = true;

elemAddNewIcon.addEventListener("click", mostrarCrearPublicacion);
elemViewNotifications.addEventListener('click', mostrarNotifications);

function mostrarCrearPublicacion() {
  if (oculto) {
    elemCrearPublicacion.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__faster",
      "crear-visible"
    );
    oculto = false;
  } else {
    elemCrearPublicacion.classList.remove(
      "animate__animated",
      "animate__fadeInRight",
      "animate__faster",
      "crear-visible"
    );
    oculto = true;
  }
}

function mostrarNotifications() {
  if (notificationsHidden) {
    elemOverlayNotifications.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__faster",
      "overlay-notifications-visible"
    );
    notificationsHidden = false;
  } else {
    elemOverlayNotifications.classList.remove(
      "animate__animated",
      "animate__fadeInRight",
      "animate__faster",
      "overlay-notifications-visible"
    );
    notificationsHidden = true;
  }
}
