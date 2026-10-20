const PRODUCTES = [
  {
            "nom": "Aigua",
            "preu": 1,
            "descripció": "Ampolla aigua de 250ml",
            "categoria": "begudes",
            "oferta": false,
            "imatge": "agua.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Cacaolat",
            "preu": 2.5,
            "descripció": "Ampolla cacacolat de 275ml",
            "categoria": "begudes",
            "oferta": true,
            "imatge": "cacaolat.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Fanta",
            "preu": 1.5,
            "descripció": "Refresc de cola original llauna 33 cl",
            "categoria": "begudes",
            "oferta": true,
            "imatge": "fanta.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Coca-Cola",
            "preu": 1.5,
            "descripció": "Refresc de cola original llauna 33 cl",
            "categoria": "begudes",
            "oferta": true,
            "imatge": "cocacola.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Cafè",
            "preu": 0.7,
            "descripció": "Cafè expresso acabat de fer",
            "categoria": "begudes",
            "oferta": false,
            "imatge": "cafe.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Tallat",
            "preu": 0.85,
            "descripció": "Cafè descafeïnat acabat de fer",
            "categoria": "begudes",
            "oferta": false,
            "imatge": "tallat.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Cafè amb llet",
            "preu": 1,
            "descripció": "Cafè amb llet acabat de fer",
            "categoria": "begudes",
            "oferta": true,
            "imatge": "cafe-llet.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Entrepà de llom",
            "preu": 3.5,
            "descripció": "Entrepà calent de llom amb tomàquet",
            "categoria": "entrepans",
            "oferta": true,
            "imatge": "entrepa-llom.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Entrepà de truita",
            "preu": 3,
            "descripció": "Entrepà calent de truita amb tomàquet",
            "categoria": "entrepans",
            "oferta": false,
            "imatge": "entrepa-truita.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Entrepà de bacó",
            "preu": 4,
            "descripció": "Entrepà calent de bacó amb tomàquet",
            "categoria": "entrepans",
            "oferta": true,
            "imatge": "entrepa-baco.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Entrepà de pernil salat",
            "preu": 4,
            "descripció": "Entrepà fred de pernil salat amb tomàquet",
            "categoria": "entrepans",
            "oferta": true,
            "imatge": "entrpa-pernil.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Entrepà de pernil dolç i formatge",
            "preu": 2.5,
            "descripció": "Entrepà fred de pernil dolç i formatge amb tomàquet",
            "categoria": "entrepans",
            "oferta": false,
            "imatge": "entrpa-pernil-d.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Entrapà de xoriço",
            "preu": 3,
            "descripció": "Entrepà fred de xoriço amb tomàquet",
            "categoria": "entrepans",
            "oferta": false,
            "imatge": "entrepa-chorizo.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Croissant",
            "preu": 0.75,
            "descripció": "Croissant tradicional de mantega",
            "categoria": "brioixeria",
            "oferta": false,
            "imatge": "croissant.png",
            "horario": [
                "manana"
            ]
        },
        {
            "nom": "Croissant de xocolata",
            "preu": 1.5,
            "descripció": "Croissant farcit de xocolata",
            "categoria": "brioixeria",
            "oferta": true,
            "imatge": "croissant-choco.png",
            "horario": [
                "manana"
            ]
        },
        {
            "nom": "Magdalena",
            "preu": 0.85,
            "descripció": "Magdalena casolana",
            "categoria": "brioixeria",
            "oferta": false,
            "imatge": "magdalena.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Magdalena de xocolata",
            "preu": 1.4,
            "descripció": "Magdalena casolana amb trossets de xocolata",
            "categoria": "brioixeria",
            "oferta": true,
            "imatge": "magdalena-choco.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Napolitana de crema",
            "preu": 1.1,
            "descripció": "Napolitana farcida de crema",
            "categoria": "brioixeria",
            "oferta": true,
            "imatge": "napolitana.png",
            "horario": [
                "manana"
            ]
        },
        {
            "nom": "Napolitana de xocolata",
            "preu": 1.1,
            "descripció": "Napolitana farcida de xocolata",
            "categoria": "brioixeria",
            "oferta": true,
            "imatge": "napolitana-choco.png",
            "horario": [
                "manana",
                "tarde"
            ]
        },
        {
            "nom": "Kinder Bueno",
            "preu": 1,
            "descripció": "Barretes de xocolata Kinder",
            "categoria": "snacks",
            "oferta": true,
            "imatge": "kinder-bueno.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Kit Kat",
            "preu": 1,
            "descripció": "Barretes de xocolata Kit Kat",
            "categoria": "snacks",
            "oferta": true,
            "imatge": "kitkat.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Twix",
            "preu": 1,
            "descripció": "Barretes de xocolata Twix",
            "categoria": "snacks",
            "oferta": true,
            "imatge": "twix.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Lays al punt de sal",
            "preu": 0.95,
            "descripció": "Bossa de patates fregides Lays al punt de sal 150g",
            "categoria": "snacks",
            "oferta": false,
            "imatge": "lays.png",
            "horario": [
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Ruffles",
            "preu": 0.95,
            "descripció": "Bossa de patates fregides Ruffles 150g",
            "categoria": "snacks",
            "oferta": false,
            "imatge": "ruffles.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        },
        {
            "nom": "Doritos",
            "preu": 0.95,
            "descripció": "Bossa de nachos Doritos 150g",
            "categoria": "snacks",
            "oferta": false,
            "imatge": "doritos.png",
            "horario": [
                "manana",
                "tarde",
                "noche"
            ]
        }
];

document.addEventListener('DOMContentLoaded', () => {
  const buttonSet = document.querySelectorAll('.tablinks');

  buttonSet.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      const tabcontent = document.querySelectorAll('.tabcontent');

      tabcontent.forEach((item) => {
        item.style.display = 'none';
      });

      const activeTab = document.getElementById(target);
      if (activeTab) {
        activeTab.style.display = 'block';
      }

      buttonSet.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const products = Array.isArray(PRODUCTES) ? PRODUCTES : [];
  const categories = {
    freds: [],
    calents: []
  };

  products.forEach((product) => {
    if (product.categoria !== 'entrepans') return;

    const description = `${product['descripció'] || product.descripcio || ''}`;
    const isCold = description.toLowerCase().includes('fred');

    categories[isCold ? 'freds' : 'calents'].push(product);
  });

  const fredsWrap = document.querySelector('#freds .product-cards');
  const calentsWrap = document.querySelector('#calents .product-cards');

  if (fredsWrap) {
    fredsWrap.innerHTML = categories.freds.length
      ? categories.freds.map(renderCard).join('')
      : '<p class="empty-state">No hi ha entrepans freds disponibles.</p>';
  }

  if (calentsWrap) {
    calentsWrap.innerHTML = categories.calents.length
      ? categories.calents.map(renderCard).join('')
      : '<p class="empty-state">No hi ha entrepans calents disponibles.</p>';
  }
});

function renderCard(product) {
  const image = product.imatge || 'placeholder.png';
  const prix = Number(product.preu || 0).toFixed(2);
  const description = product['descripció'] || product.descripcio || 'Producte del dia';
  const offerBadge = product.oferta ? '<div class="oferta-badge">Oferta!</div>' : '';

  return `
    <article class="product-card" data-producte="${escapeHtml(product.nom || '')}">
      <div class="inner">
        <img src="/images/products/${image}" alt="${escapeHtml(product.nom || '')}" />
        <h5>${escapeHtml(product.nom || '')}</h5>
        <p class="descripcio">${escapeHtml(description)}</p>
        <div class="preu-oferta-container">
          <p class="preu-iva"><span class="preu">${prix}</span> € <span class="iva">IVA inclós</span></p>
          ${offerBadge}
        </div>
        <div class="cont">
          <div class="crtdiv">
            <button type="button" class="cart btn-cart">Afegir a la cistella</button>
            <span class="qty">
              <span class="dec"><i class="fa fa-minus" aria-hidden="true"></i></span>
              <span class="num">1</span>
              <span class="inc"><i class="fa fa-plus" aria-hidden="true"></i></span>
            </span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
