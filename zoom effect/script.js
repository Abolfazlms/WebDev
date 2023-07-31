window.onload = function(){
    const container = document.getElementById('container');
    const image = document.querySelector('img');
    container.addEventListener('mousemove',function(Event){
        const x = Event.clientX - Event.target.offsetLeft;//target = dive
        const y = Event.clientY - Event.target.offsetTop;
        //console.log(x,y);
        image.style.transformOrigin = '${x}px ${y}px';//move when zoom on this image
        //image.style.transformOrigin = x + 'px'
        image.style.transform  = 'scale(2)';//zoom
    })
}   