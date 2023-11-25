function switchTheme() {
    var theme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save theme preference
}

// On page load, set the theme to the last saved preference
window.onload = function() {
    var savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
};