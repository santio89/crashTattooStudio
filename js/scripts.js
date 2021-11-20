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
/* fin studio/gallery img -> transform:scale on click*/
