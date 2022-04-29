const nav= document.getElementById("nav")

window.addEventListener("scroll", function() {
    nav.classList.toggle("nav-bg", window.scrollY > 0)
})

// window.addEventListener("scroll", function(){
//     nav.classList.toggle("nav-bg", scroll < 50)
// })