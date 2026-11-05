const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.querySelector(".nav");
const navbar = document.querySelector(".navbar a");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
navbar.array.forEach(navbar => {
    link.onclick = () => {
        nav.classList.remove('active');
    }
});