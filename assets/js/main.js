let products = [
  {
    name: "Product 1",
    image: "product1.jpg",
    description: "Description of Product 1",
    price: 10,
    rating: 0,
    id: "product1"
  },
  {
    name: "Product 2",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product2"
  },
  {
    name: "Product 2",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product2"
  },
  {
    name: "Product 3",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product3"
  },
  {
    name: "Product 4",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product4"
  },
  {
    name: "Product 5",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product2"
  },
  {
    name: "Product 2",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product5"
  },
  {
    name: "Product 6",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product6"
  },
  {
    name: "Product 7",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product7"
  },
  {
    name: "Product 8",
    image: "product2.jpg",
    description: "Description of Product 2",
    price: 20,
    rating: 0,
    id: "product8"
  }
];

function setRating(rating, productId) {
  let product = products.find(p => p.id === productId);
  product.rating = rating;
  let stars = document.querySelectorAll(`#${productId} .star`);
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars[i].textContent = "★";
    } else {
      stars[i].textContent = "☆";
    }
  }
}

function generateProductHTML(product) {
  let html = `
    <div class="product-rating">
      <div class="rating" id="${product.id}">
        <span class="star" onclick="setRating(1, '${product.id}')">☆</span>
        <span class="star" onclick="setRating(2, '${product.id}')">☆</span>
        <span class="star" onclick="setRating(3, '${product.id}')">☆</span>
        <span class="star" onclick="setRating(4, '${product.id}')">☆</span>
        <span class="star" onclick="setRating(5, '${product.id}')">☆</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
      </div>
    </div>
  `;
  return html;
}

let productsHTML = "";
for (let i = 0; i < products.length; i++) {
  let productHTML = generateProductHTML(products[i]);
  productsHTML += productHTML;
}




$(document).ready(function() {
  // تهيئة Isotope
  $('.collection-list').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  // تفعيل الفلاتر
  $('.filter-buttons').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.collection-list').isotope({ filter: filterValue });
  });

  // إعادة ترتيب العناصر بعد تحميل الصفحة
  $('.collection-list').imagesLoaded(function() {
    $('.collection-list').isotope('layout');
  });
});

