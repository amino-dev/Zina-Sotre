var icon = document.getElementById("icon")
var logoNavBar = document.getElementById("logo-navbar")
var logoFooter = document.getElementById("logo-footer")
icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.setAttribute("src","images/Theme/sun.png")
        logoNavBar.setAttribute("src","images/Logo/logo2.png")
        logoFooter.setAttribute("src","images/Logo/logo2.png")
    }
    else {
        icon.setAttribute("src","images/Theme/moon.png")
        logoNavBar.setAttribute("src","images/Logo/logo.png")
        logoFooter.setAttribute("src","images/Logo/logo.png")
    }
}

