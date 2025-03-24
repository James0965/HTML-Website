const wrapper = document.querySelector('.wrapper');
const Loginlink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

Loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Handling form submission for login
const loginForm = document.querySelector('.form-box.Login form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Simulating a login check
    if (email === 'maryclaresuarez@gmail.com' && password === 'maryclaresuarez') {
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
