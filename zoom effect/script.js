window.onload = function(){
    const container = document.getElementById('container');
    const image = document.querySelector('img');
    container.addEventListener('mousemove',function(event){
        const x = event.clientX - event.target.offsetLeft;//target = dive
        const y = event.clientY - event.target.offsetTop;
        console.log(x,y);
        image.style.transformOrigin = `${x}px ${y}px`;//move when zoom on this image
        //image.style.transformOrigin = x + 'px'
        image.style.transform  = 'scale(2)';
        
    })
    container.addEventListener('mouseleave',function(){
        image.style.transformOrigin = 'center center';//move to default point
        image.style.transform  = 'scale(1)';//zoom
    })
}   