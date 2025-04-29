// Блокировка зума через Ctrl + колесо мыши
document.addEventListener('wheel', (e) => {
if (e.ctrlKey) {
    e.preventDefault();
}
}, { passive: false });

// Блокировка зума через клавиши Ctrl + +/- и Ctrl + 0
document.addEventListener('keydown', (e) => {
if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) {
    e.preventDefault();
}
});