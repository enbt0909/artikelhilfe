document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const warning = document.getElementById('warning');
        warning.textContent = link.dataset.msg || "Ich habe zur Zeit keine Funktion.";
        warning.style.visibility = "visible";
        setTimeout(() => {
            warning.style.visibility = "hidden";
            warning.textContent = "";
        }, 2000);
    });
});