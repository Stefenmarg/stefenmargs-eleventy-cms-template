// DOM Element Cache
const DOM = {
    header: {
        navbar: document.getElementById("navbar"),
        toggle: document.getElementById("menu-toggle"),
        menu: document.getElementById("navbar-solid")
    },
    footer: {
        year: document.getElementById("year")
    },
    toTopBttn: document.getElementById("to-top-button")
}


// Handle the height of the header
document.documentElement.style.setProperty("--navbar-height", `${DOM.header.navbar.offsetHeight}px`);

// Handle the hamburger menu toggle
DOM.header.toggle.addEventListener("click", () => {
    const isOpen = !DOM.header.menu.classList.contains("hidden");

    DOM.header.menu.classList.toggle("hidden");
    DOM.header.toggle.setAttribute("aria-expanded", String(!isOpen));
});

// Handle the head to top button
DOM.toTopBttn.addEventListener('click', () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
})

// Handle the scroll to top button
window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        DOM.toTopBttn.classList.remove("opacity-0", "pointer-events-none");
        DOM.toTopBttn.classList.add("opacity-100");
    } else {
        DOM.toTopBttn.classList.add("opacity-0", "pointer-events-none");
        DOM.toTopBttn.classList.remove("opacity-100");
    }
};

// Handle the year shown in the footer
DOM.footer.year.textContent = new Date().getFullYear().toString();

