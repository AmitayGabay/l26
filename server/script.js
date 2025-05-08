const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
    h1.style.color = "orange";
    setTimeout(() => {
        h1.style.color = "white";
    }, 500);
    const p = document.createElement("p");
    p.innerText = "Start learning Git...";
    p.style.textAlign = "center";
    document.body.appendChild(p);
})