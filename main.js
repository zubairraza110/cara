window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) { // Adjust scroll value as needed
        header.style.boxShadow = "0 14px 20px rgba(0, 0, 0, 0.8)";
    } else {
        header.style.boxShadow = "none";
    }
});