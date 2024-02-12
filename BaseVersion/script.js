let isMenuVisible = false;
//Función que oculta o muestra el menu
function hideMenu() {
  if (isMenuVisible) {
    document.getElementById("nav").classList = "";
    isMenuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    isMenuVisible = true;
  }
}

function selection() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  isMenuVisible = false;
}
