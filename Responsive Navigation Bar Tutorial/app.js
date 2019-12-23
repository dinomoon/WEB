const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_list');
    const navLinks = document.querySelectorAll('.nav_list li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav_active');

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();