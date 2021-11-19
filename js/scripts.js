function enlarge(){
    var img = document.getElementById("test");

    if (img.className == "gallery__img gallery__img__active gallery__img__nohover"){
        img.className = "gallery__img";
    } else{
        img.className = "gallery__img gallery__img__active gallery__img__nohover";
    }
}

