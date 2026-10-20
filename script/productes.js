document.addEventListener('DOMContentLoaded', () => {
  const ofertaSection = document.getElementById('ofertes');
  if (!ofertaSection) return;

  fetch('../data/products.json')
    .then((response) => response.json())
    .then((data) => {
      const products = Array.isArray(data.productes) ? data.productes : [];
      const ofertaProducts = products.filter((product) => product.oferta);

      if (!ofertaProducts.length) {
        ofertaSection.innerHTML += '<p class="empty-state">No hi ha ofertes disponibles en aquest moment.</p>';
        return;
      }

      const categories = {};
      ofertaProducts.forEach((product) => {
        const category = product.categoria || 'General';
        if (!categories[category]) categories[category] = [];
        categories[category].push(product);
      });

      Object.entries(categories).forEach(([category, items]) => {
        const section = document.createElement('section');
        section.className = 'seccioCategoria';
        section.id = category;

        const h3 = document.createElement('h3');
        h3.textContent = category.charAt(0).toUpperCase() + category.slice(1);

        const productsWrap = document.createElement('div');
        productsWrap.className = 'productes';

        items.forEach((item) => {
          const card = document.createElement('article');
          card.className = 'ofertProduct';
          card.innerHTML = `
            <img src="../images/products/${item.imatge}" alt="${item.nom}" />
            <h4>${item.nom}</h4>
            <p>${item['descripció'] || item.descripcio}</p>
            <p class="preuAbans">Abans: ${(item.preu || 0).toFixed(2)} €</p>
            <p class="preuDescompte">Ara: ${(item.preu * 0.8).toFixed(2)} €</p>
            <p class="percent">Gaudeix del 20% de descompte</p>
          `;
          productsWrap.appendChild(card);
        });

        section.appendChild(h3);
        section.appendChild(productsWrap);
        ofertaSection.appendChild(section);
      });
    })
    .catch(() => {
      ofertaSection.innerHTML += '<p class="empty-state">No s’han pogut carregar les ofertes.</p>';
    });
});
