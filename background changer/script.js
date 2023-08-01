window.onload = function(){
    const button = document.getElementById('button');
    button.addEventListener('onclick',function(){
        document.body.style.background = randomBackGround();
    });
}
function randomBackGround(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}