var iconCart = document.getElementById("icon-cart")
var logo = document.getElementById("logo")
iconCart.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        iconCart.setAttribute("src","images/Theme/sun.png")
        logo.setAttribute("src","images/Logo/logo2.png")
    }
    else {
        iconCart.setAttribute("src","images/Theme/moon.png")
        logo.setAttribute("src","images/Logo/logo.png")
    }
})
