window.onload = function(){
    const button = document.getElementById('button');
    button.addEventListener('click',function(){
        document.body.style.background = randomBackGround();
    });
}
function randomBackGround(){    
    //return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    return`hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}
// function randomBackGround(){    
//     //return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
//     document.body.style.background = `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
// }
// setInterval(randomBackGround,500);