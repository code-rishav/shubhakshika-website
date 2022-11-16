const arrows = document.querySelectorAll(".submenu-link");

for (const arrow of arrows) {
    const img = arrow.querySelector(".arrow-down");
    img.addEventListener("click", e => {
        arrow.classList.toggle("show");
    });  
}
