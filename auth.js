document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const loginForm = document.getElementById('login-form');

    const checkLoginStatus = () => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            const userData = JSON.parse(user);
            mainNav.innerHTML = `
                <div class="user-profile">
                    <span>Halo, ${userData.name}</span>
                    <button class="logout-btn">Logout</button>
                </div>
            `;
            mainNav.querySelector('.logout-btn').addEventListener('click', handleLogout);
        } else {
            mainNav.innerHTML = '<button class="login-btn">Login</button>';
            mainNav.querySelector('.login-btn').addEventListener('click', () => {
                loginModal.style.display = 'flex';
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        alert('Anda telah logout.');
        window.location.reload();
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = document.getElementById('user-name').value;
        const userAddress = document.getElementById('user-address').value;

        if (userName && userAddress) {
            const user = {
                name: userName,
                address: userAddress,
            };
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert(`Login berhasil! Selamat datang, ${userName}.`);
            loginModal.style.display = 'none';
            loginForm.reset();
            checkLoginStatus();
        }
    });

    closeModalBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    checkLoginStatus();
});

function showLoginModal() {
    const loginModal = document.getElementById('login-modal');
    if(loginModal) {
        loginModal.style.display = 'flex';
    }
}
