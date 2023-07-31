alert('test');
let id;//for clear interval
function fadeOut(){
    id = setInterval(hide,20);
}
function hide(){
    let image = document.getElementById('image1');
    opacity = Number(window.getComputedStyle(image).getPropertyValue('opacity'));
    if(opacity>0){
        opacity -=0.01;
        image.style.opacity=opacity;
    }
    else{
        clearInterval(id);
    }
}
function fadeIn(){
    id = setInterval(show,20);
}
function show(){
    let image = document.getElementById('image1');
    opacity = Number(window.getComputedStyle(image).getPropertyValue('opacity'));
    if(opacity <1){
        opacity+=0.01;
        image.style.opacity = opacity;
    }
    else{
        clearInterval(id);
    }
}
