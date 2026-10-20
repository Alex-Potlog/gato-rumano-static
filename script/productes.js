const PRODUCTES = [
  {
    nom: 'Entrepà de pernil ibèric',
    categoria: 'entrepans',
    descripció: 'Fred amb pernil ibèric, formatge i tomàquet',
    preu: 8.5,
    imatge: 'entrpa-pernil.png',
    oferta: true
  },
  {
    nom: 'Entrepà de xoriço',
    categoria: 'entrepans',
    descripció: 'Fred de xoriço, formatge i enciam',
    preu: 7.5,
    imatge: 'entrepa-chorizo.png',
    oferta: true
  },
  {
    nom: 'Entrepà de pollastre',
    categoria: 'entrepans',
    descripció: 'Fred amb pollastre, maionesa i cogombre',
    preu: 7.9,
    imatge: 'placeholder.png',
    oferta: false
  },
  {
    nom: 'Entrepà de botifarra',
    categoria: 'entrepans',
    descripció: 'Calent de botifarra, ceba i formatge',
    preu: 8.2,
    imatge: 'placeholder.png',
    oferta: false
  },
  {
    nom: 'Entrepà de carn',
    categoria: 'entrepans',
    descripció: 'Calent amb carn, salsa i cebes',
    preu: 9.1,
    imatge: 'placeholder.png',
    oferta: true
  },
  {
    nom: 'Entrepà de mozzarella',
    categoria: 'entrepans',
    descripció: 'Calent amb mozzarella, tomàquet i albahaca',
    preu: 8.8,
    imatge: 'placeholder.png',
    oferta: false
  },
  {
    nom: 'Entrepà de salmó',
    categoria: 'entrepans',
    descripció: 'Fred de salmó, crema de formatge i enciam',
    preu: 9.4,
    imatge: 'placeholder.png',
    oferta: true
  },
  {
    nom: 'Entrepà de bacó',
    categoria: 'entrepans',
    descripció: 'Calent amb bacó, formatge i salsa de la casa',
    preu: 8.7,
    imatge: 'entrepa-baco.png',
    oferta: false
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
