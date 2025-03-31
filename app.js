const menuEl = document.querySelector(".menu")
const containerEl = document.querySelector(".container")
const menuTextEl = document.querySelector(".menu p")
const liEls = document.querySelectorAll(".container li")

menuEl.addEventListener("click", () =>{
    containerEl.classList.toggle("hide")
    menuEl.classList.toggle("rotate")
    if (!containerEl.classList.contains("hide")) {
        menuTextEl.innerHTML = "Seciniz";
    }
})


liEls.forEach(liEl => {
    liEl.addEventListener("click", () =>{
    menuTextEl.innerHTML = liEl.innerHTML
    containerEl.classList.add("hide")
    })
})