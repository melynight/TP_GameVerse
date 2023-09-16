const body = document.querySelector(".body");
const logoResponsive = document.querySelector(".foto-menu");
let div = document.querySelector(".lateral-menu");

logoResponsive.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("click")
    div.style.left = '0'; // Nueva posición en X
    div.style.top = '0'; // Nueva posición en X
});

// Detectar clic fuera del elemento para restablecer la posición
document.addEventListener('click', (e) => {
    if (e.target != div) {
        div.style.left = '-200px';
        body.style.opacity = "1";
    }
});

//JS CON JQUERY

$(document).ready(function() {
    const tarjeta = $(".info");

   
    tarjeta.hover(
        function() {
            // Dentro de esta función, 'this' se refiere al elemento .info-img actual
            $(this).find("h4").css("font-size", "2.3rem");
            $(this).find("h4").css("width", "200px");
            $(this).find("h4").css("height", "90px");
            $(this).find("h4").css("transition", "all 1s");
        },
        function() {
            // Esta función se llama cuando el mouse sale del elemento .info-img
            $(this).find("h4").css("font-size", "1.9rem"); 
        }
    );
});






