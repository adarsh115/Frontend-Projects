const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    if (input.classList.length === 2) {
        input.classList.add("active");
        input.focus();
    } else {
        input.classList.remove("active");
    }
});