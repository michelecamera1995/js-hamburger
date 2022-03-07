
console.log("JS-OK")

const hamiopen = document.querySelector('.fa-bars');

const hiddenmenu = document.querySelector('.hamburger-menu');

const hamiclose = document.querySelector('.fa-times');

hamiopen.addEventListener('click', function () {

    console.log('pulsante cliccato');

    if (hiddenmenu.style.display === "none") {
        hiddenmenu.style.display = "none";
    } else {
        hiddenmenu.style.display = "block";
    }

});

hamiclose.addEventListener('click', function () {

    console.log('pulsante cliccato');

    if (hiddenmenu.style.display === "block") {
        hiddenmenu.style.display = "none";
    }
});
