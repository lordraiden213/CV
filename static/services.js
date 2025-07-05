document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector("nav ul");

    if (hamburger && navList) {
        hamburger.addEventListener("click", () => {
            navList.classList.toggle("show");
        });
    }
}); 