window.addEventListener('load', () => {
  const imagenes = [
    '/images/principal/coffee-shop.webp',
    '/images/principal/coffee.webp',
    '/images/principal/bocadillos.webp',
    '/images/principal/zumo.webp',
    '/images/principal/bocadillos2.webp'
  ];

  const titulos = [
    'Benvinguts al Gato Rumano',
    '',
    'Gaudeix de les ofertes de la setmana',
    '',
    'La pausa perfecta amb un sabor autèntic'
  ];

  let posicionActual = 0;
  const retroceder = document.querySelector('.retroceder');
  const avanzar = document.querySelector('.avanzar');
  const imagen = document.querySelector('#imagen');
  const titulo = document.querySelector('#titulos');
  let intervalo;

  function renderizarImagen() {
    if (imagen) imagen.style.backgroundImage = `url(${imagenes[posicionActual]})`;
  }

  function renderizarTitulo() {
    if (titulo) titulo.textContent = titulos[posicionActual];
  }

  function pasarFoto() {
    posicionActual = posicionActual >= imagenes.length - 1 ? 0 : posicionActual + 1;
    renderizarImagen();
    renderizarTitulo();
  }

  function retrocederFoto() {
    posicionActual = posicionActual <= 0 ? imagenes.length - 1 : posicionActual - 1;
    renderizarImagen();
    renderizarTitulo();
  }

  function iniciarAutomatic() {
    intervalo = setInterval(pasarFoto, 3000);
  }

  function pararAutomatic() {
    clearInterval(intervalo);
  }

  if (retroceder) {
    retroceder.addEventListener('click', () => {
      retrocederFoto();
      pararAutomatic();
    });
  }

  if (avanzar) {
    avanzar.addEventListener('click', () => {
      pasarFoto();
      pararAutomatic();
    });
  }

  renderizarImagen();
  renderizarTitulo();
  iniciarAutomatic();
});
