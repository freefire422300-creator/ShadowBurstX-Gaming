// DOM Elements
const loginForm = document.getElementById('loginForm');
const loginPage = document.getElementById('loginPage');
const mainPage = document.getElementById('mainPage');
const logoutBtn = document.getElementById('logoutBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Check if user is already logged in
window.addEventListener('load', () => {
    const isLoggedIn = localStorage.getItem('shadowburstx_logged_in');
    if (isLoggedIn) {
        showMainPage();
    }
});

// Login Form Submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Simple validation (in real app, validate with backend)
    if (username && password) {
        // Save login status in localStorage
        localStorage.setItem('shadowburstx_logged_in', 'true');
        localStorage.setItem('shadowburstx_username', username);
        
        // Show main page
        showMainPage();
        
        // Clear form
        usernameInput.value = '';
        passwordInput.value = '';
    } else {
        alert('لطفاً نام کاربری و رمز عبور را وارد کنید!');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    if (confirm('آیا مطمئن هستید که می‌خواهید خروج کنید؟')) {
        localStorage.removeItem('shadowburstx_logged_in');
        localStorage.removeItem('shadowburstx_username');
        showLoginPage();
    }
});

// Show Main Page
function showMainPage() {
    loginPage.classList.remove('active');
    mainPage.classList.add('active');
    logoutBtn.style.display = 'block';
}

// Show Login Page
function showLoginPage() {
    mainPage.classList.remove('active');
    loginPage.classList.add('active');
    logoutBtn.style.display = 'none';
}

// Add smooth animations
document.addEventListener('DOMContentLoaded', () => {
    const socialBtns = document.querySelectorAll('.social-btn');
    
    socialBtns.forEach((btn, index) => {
        btn.style.animation = `slideIn 0.5s ease ${index * 0.1}s both`;
    });
});

// Animation keyframes (in CSS)
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);