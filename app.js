const menuLinks = document.querySelectorAll(".menu-desktop a");

menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = link.getAttribute("href");
        const section = document.querySelector(id);
        const offsetTop = section.offsetTop - 90; // Ajuste para menu fixo

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    });
});
