function createLink(value) {
    const navlink = document.createElement("a");
    navlink.setAttribute("href", "#");
    navlink.classList.add("navbar__link");
    navlink.innerText = value;
    return navlink;
}

export function createNav() {
    const content = document.querySelector(".content");
    // Creating Navbar
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    content.appendChild(navbar);

    // Adding links
    navbar.appendChild(createLink("HOME"));
    navbar.appendChild(createLink("MENU"));
    navbar.appendChild(createLink("CONTACT"));
};
