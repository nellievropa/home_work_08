const local = document.querySelector('.js-local');
const session = document.querySelector('.js-session');

local.addEventListener('click', () => {
localStorage.setItem('local', 'test local')
});
session.addEventListener('click', () => {
    sessionStorage.setItem('session', 'test session')
});
