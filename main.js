
console.log("JS-OK")

const icon = document.querySelector('#header-right a');

const hiddenmenu = document.getElementsByClassName('hamburger-menu');

icon.addEventListener('click', function () {

    console.log('pulsante cliccato');

    if (hiddenmenu.style.display === "none") {
        hiddenmenu.style.display = "none";
    } else {
        hiddenmenu.style.display = "block";
    }

});

