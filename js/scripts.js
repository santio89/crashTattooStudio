function enlarge(){
    var img = document.getElementById("test");

    if (img.className == "gallery__img gallery__img__active"){
        img.className = "gallery__img";
    } else{
        img.className = "gallery__img gallery__img__active";
    }
}

var img = document.getElementsByClassName(gallery__img);
		
for (var i=0; i < img.length; i++) {
    img[i].onclick = function(){

        if (img[i].className == "gallery__img gallery__img__active"){
            img[i].className = "gallery__img";
        } else{
            img[i].className = "gallery__img gallery__img__active";
        }
        
    }
};