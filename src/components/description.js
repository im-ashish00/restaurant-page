import { makeHome } from "./home";
import { makeMenu } from "./menu";
import { makeContact } from "./contact"

function loader() {
    const desc = document.querySelector(".desc");
    document.addEventListener("click", e => {
        const value = e.target.innerText;
        switch (value) {
            case "MENU":
                makeMenu();
                break;
            case "CONTACT":
                makeContact();
                break;
            case "HOME":
                makeHome();
        }
    });
}

export function createDesc() {
    const content = document.querySelector(".content");
    // Adding desc div
    const desc = document.createElement("div");
    desc.classList.add("desc");
    content.appendChild(desc);
    desc.innerHTML = `<img src="./img/home.jpg"><br>WELCOME!!`; 

    loader();
}