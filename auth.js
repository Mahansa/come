

document.addEventListener('DOMContentLoaded', () => {
   
    const mainNav = document.getElementById('main-nav');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const loginForm = document.getElementById('login-form');

   
    const checkLoginStatus = () => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            // Jika user ada di localStorage
            const userData = JSON.parse(user);
            mainNav.innerHTML = `
                <div class="user-profile">
                    <span>Halo, ${userData.name}</span>
                    <button class="logout-btn">Logout</button>
                </div>
            `;
            // Tambahkan event listener untuk tombol logout
            mainNav.querySelector('.logout-btn').addEventListener('click', handleLogout);
        } else {
            // Jika tidak ada user
            mainNav.innerHTML = '<button class="login-btn">Login</button>';
            // Tambahkan event listener untuk tombol login
            mainNav.querySelector('.login-btn').addEventListener('click', () => {
                loginModal.style.display = 'flex';
            });
        }
    };

    // Fungsi untuk menangani logout
    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        alert('Anda telah logout.');
        window.location.reload(); // Muat ulang halaman untuk memperbarui status
    };

    // Event listener untuk form login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah form mengirim data ke server
        
        // Ambil data dari form
        const userName = document.getElementById('user-name').value;
        const userAddress = document.getElementById('user-address').value;

        if (userName && userAddress) {
            const user = {
                name: userName,
                address: userAddress,
            };
            // Simpan data user ke localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert(`Login berhasil! Selamat datang, ${userName}.`);
            loginModal.style.display = 'none';
            loginForm.reset();
            checkLoginStatus(); // Perbarui header
        }
    });

    // Event listener untuk menutup modal
    closeModalBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
    // Juga tutup modal jika klik di luar area konten
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Jalankan pengecekan status saat halaman pertama kali dimuat
    checkLoginStatus();
});

// Fungsi global yang bisa dipanggil dari file lain untuk membuka modal
function showLoginModal() {
    const loginModal = document.getElementById('login-modal');
    if(loginModal) {
        loginModal.style.display = 'flex';
    }
}