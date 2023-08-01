
window.onload = function(){
    const button = document.getElementById('button');
    button.addEventListener('click',function(){
        document.body.style.background = randomBackGround();
    });
}
function randomBackGround(){
    alert('Hello World!');
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}