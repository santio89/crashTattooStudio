/* studio/gallery img -> transform:scale on click*/
var img = document.getElementsByClassName("gallery__img");

for (let i=0; i < img.length; i++) {
    let img = document.getElementsByClassName("gallery__img")[i];

    img.addEventListener("click", function(){

        if (img.className == "gallery__img gallery__img--active"){
            img.className = "gallery__img";
        } else{
            img.className = "gallery__img gallery__img--active";
        }

    })
};

/* volver al tamaño inicial clickeando fuera del area de imagen */
window.onclick = function(e) {
    if (!e.target.matches('.gallery__img')) {
        for (let i=0; i < img.length; i++) {
            let img = document.getElementsByClassName("gallery__img")[i];
        
            if (img.classList.contains('gallery__img--active')) {
                img.classList.remove('gallery__img--active');
              }
         
        };
    }
  }
/* fin volver al tamaño inicial */
/* fin studio/gallery img -> transform:scale on click*/


/* input file-show selected files on label */
var inputs = document.querySelectorAll(".contactForm__file__input");

if (inputs.length > 0){
    Array.prototype.forEach.call(inputs, function(input){
        var label = input.nextElementSibling;
        var labelVal = label.innerHTML;
        
        input.addEventListener("change", function(e){
            fileName = e.target.value.split("\\").pop();
            
            if (fileName){
            label.querySelector("span").innerHTML = fileName;
            } else{
            label.innerHTML = labelVal;
            }
        });
    });
}
/*fin input file-show selected files on label */

/* INICIO cerrar nav burger si hago click fuera del area */
var nav__link = document.getElementsByClassName("nav__link");
var header__burgerMenu = document.getElementById("header__burgerMenu");

/* cerrar nav burger al hacer click en un link (util para single page layouts) */
for (let i=0; i < nav__link.length; i++)
{
    nav__link[i].addEventListener("click", function() {
        header__burgerMenu.checked = false;
    });
}
/* fin cerrar nav burger al hacer click en un link (util para single page layouts) */

/* agregar EventListener cuando el nav burger sea abierto */
var header__nav = document.getElementById("header__nav");
var header__burgerIcon__icon = document.getElementById("header__burgerIcon__icon");

header__burgerMenu.addEventListener( 'click', function(){
    if( this.checked ) {
      document.addEventListener( 'click', listener );
    } 
  });
/* fin agregar EventListener cuando el nav burger sea abierto */

/* cerrar nav si hago click fuera del nav o del icono burger */
var listener = function( e ) {
if( e.target != header__burgerMenu && e.target != header__nav  && e.target != header__burgerIcon__icon) {
    header__burgerMenu.checked = false;
    document.removeEventListener( 'click', listener );
}
};
/* fin cerrar nav si hago click fuera del nav o del icono burger */

/* FIN cerrar nav burger si hago click fuera del area */

/* INICIO cerrar burger nav si estaba abierto y hago resize hasta un tamaño en el que ya no existe */
window.addEventListener('resize', function() {
    if (window.matchMedia('(min-width:1025px)').matches && !window.matchMedia('(pointer: coarse').matches) {
        document.getElementById('header__burgerMenu').checked = false;
    } 
  }, true);

/* FIN cerrar burger nav si estaba abierto y hago resize hasta un tamaño en el que ya no existe */