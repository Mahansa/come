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
    },
    {
         id: 4,
        name: 'Samsung Galaxy A54',
        price: 4900000,
        originalPrice: 5200000,
        rating: 4.6,
        sold: '250',
        location: 'Tanggerang',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSYZZuGuZ8dcxXgFRH-LyfNo4jIH5Puv_Zd-VUsjMyAgh1ehrOSbnjanacJ1QEQCjmQDcBK8mnFMIhnr0jyQtCWUnhJWDVb-oBAOZtXqLQuhtcf4_w4H41',
        description: 'Spesifikasi - Processor : Exynos 1380 - Size : 6.4- Technology : FHD+ SA HID 120Hz 1000nits- Resolution : Infinity-O- Rear Camera Resolution : 50MP + 12MP + 5MP- Main Camera Auto Focus : Yes- Rear Camera - OIS : Yes Rear Camera - Zoom : Digital Zoom up to 10x- Front Camera Resolution : 32.0 MP- Front Camera Auto Focus : No- Video Resolution : UHD 4K (3840 x 2160)@30fps- RAM : 8GB- ROM : 128GB- SIM Tray : SIM 1 + Hybrid (SIM or MicroSD)- Network Type : 5G- USB Interface : USB Type-C- USB Version : USB 2.0- Earjack : No- Bluetooth Version : Bluetooth v5.3- NFC : Yes- Audio : Stereo- Battery Capacity : 5,000mAh, 25W Fast Charging'
    }
];

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById('product-image').src = product.imageUrl;
        document.getElementById('product-image').alt = product.name;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-sold').textContent = product.sold;
        document.getElementById('product-rating').textContent = product.rating;
        document.getElementById('product-price').textContent = `Rp${product.price.toLocaleString('id-ID')}`;
        document.getElementById('product-description').textContent = product.description;

        const discountInfo = document.getElementById('product-discount-info');
        if (product.originalPrice) {
            const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
            discountInfo.innerHTML = `
                <span class="discount-tag">${discountPercentage}%</span>
                <span class="original-price-detail">Rp${product.originalPrice.toLocaleString('id-ID')}</span>
            `;
        }

        const minusBtn = document.getElementById('minus-btn');
        const plusBtn = document.getElementById('plus-btn');
        const quantityInput = document.getElementById('quantity-input');
        const addToCartBtn = document.getElementById('add-to-cart-btn');

        minusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });

        addToCartBtn.addEventListener('click', () => {
            const user = localStorage.getItem('currentUser');
            if (user) {
                const quantity = quantityInput.value;
                const userData = JSON.parse(user);
                alert(`${quantity} buah "${product.name}" telah ditambahkan ke keranjang!\n\nAkan dikirim ke: ${userData.address}`);
            } else {
                alert('Anda harus login terlebih dahulu untuk membeli barang!');
                showLoginModal(); 
            }
        });

    } else {
        document.getElementById('product-detail-container').innerHTML = '<h1>404 - Produk tidak ditemukan.</h1><p>Silakan kembali ke halaman utama.</p>';
    }
});
