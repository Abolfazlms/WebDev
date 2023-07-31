let intervalId;
let width = 500;
let unit = 2;
function increase(){
    clearInterval(intervalId);
    intervalId = setInterval(expand,20);
}
function expand(){
    if(width<600){
        width = width+unit;
        document.getElementById('image1').width = width;
    }
    else{
        clearInterval(intervalId);
    }
}
function decrease(){
    clearInterval(intervalId);
    intervalId = setInterval(shrink,20);
}
function shrink(){
    if(width>500){
        width = width-unit;
        document.getElementById('image1').width = width;
    }
    else{
        clearInterval(intervalId);
    }
}