const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const wrapper = document.querySelector('.wrapper');
const popupBtn = document.querySelector('.btnLogin-popup');
const closeBtn = document.querySelector('.close-icon');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    console.log('click');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

popupBtn.addEventListener('click', () => {
    wrapper.classList.add('popup');
});
closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('popup');
});
