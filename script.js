

window.addEventListener('DOMContentLoaded', () => {

   
    const products = [
      {
        id: 1,
        name: 'Headphone Gaming Keren dengan RGB LED dan Suara Jernih',
        price: 299000,
        originalPrice: 450000,
        rating: 4.8,
        sold: '1rb',
        location: 'Jakarta Barat',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
        description: 'Rasakan pengalaman audio imersif dengan headphone gaming ini. Dilengkapi dengan driver 50mm, mikrofon peredam bising, dan lampu RGB yang dapat disesuaikan. Sangat nyaman untuk sesi bermain game yang lama.'
      },
      {
        id: 2,
        name: 'Smartwatch Fitness Tracker Tahan Air IP68',
        price: 450000,
        originalPrice: 700000,
        rating: 4.9,
        sold: '2rb',
        location: 'Surabaya',
        imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop',
        description: 'Pantau kesehatan dan kebugaran Anda 24/7. Smartwatch ini melacak detak jantung, langkah, kalori terbakar, dan kualitas tidur. Tahan air hingga kedalaman 50 meter dan baterai tahan hingga 14 hari.'
      },
      {
        id: 3,
        name: 'Samsung Galaxy A19',
        price: 1800000,
        originalPrice: 2250000,
        rating: 4.8,
        sold: '550',
        location: 'Tanggerang',
        imageUrl: 'https://www.mobilebazar.com.bd/assets/img/Samsung-Galaxy-A19.webp',
        description: 'Handphone Samsung Galaxy A19 merupakan handphone terbaik di kelasnya memiliki fitur utama yaitu penyimpanan 128 GB dan ram 4GB'
      }
      // ... isi produk lain di sini bre
    ];

    const gridContainer = document.getElementById('product-grid');
    if (!gridContainer) return; // 


    gridContainer.innerHTML = '';

    products.forEach(product => {
        // BUAT LINK UNTUK SETIAP KARTU
        const cardLink = document.createElement('a');
        cardLink.href = `product.html?id=${product.id}`; 
        cardLink.className = 'product-card-link';

        const discountPercentage = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        cardLink.innerHTML = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.imageUrl}" alt="${product.name}">
                    ${discountPercentage > 0 ? `<div class="discount-badge">${discountPercentage}%</div>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-details">
                        <p class="product-price">Rp${product.price.toLocaleString('id-ID')}</p>
                        ${product.originalPrice ? `<span class="original-price">Rp${product.originalPrice.toLocaleString('id-ID')}</span>` : ''}
                        <div class="product-meta">
                            <span class="product-rating">
                                <span class="star">★</span> ${product.rating}
                            </span>
                            <span style="margin: 0 8px;">|</span>
                            <span>Terjual ${product.sold}+</span>
                        </div>
                        <p class="product-location">${product.location}</p>
                    </div>
                </div>
            </div>
        `;
        
        gridContainer.appendChild(cardLink);
    });
});