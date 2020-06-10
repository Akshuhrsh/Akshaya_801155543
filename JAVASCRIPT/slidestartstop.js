var slideIndex=0;
var interval=null;
function startSlideshow() {
    var i;
    var x = document.getElementsByClassName("blogarticle");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    interval = setTimeout(startSlideshow, 1000); 
}

function stopSlideshow(){
    clearTimeout(interval);    
    var i;
    var x = document.getElementsByClassName("blogarticle");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block"; 
    }
}
  