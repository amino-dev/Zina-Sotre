var iconCart = document.getElementById("icon-cart")
iconCart.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        iconCart.setAttribute("src","images/Theme/sun.png")
    }
    else {
        iconCart.setAttribute("src","images/Theme/moon.png")
    }
})
