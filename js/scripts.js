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

