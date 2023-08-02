window.onload = function(){
    const images = document.getElementById('images');
    const image = document.querySelectorAll('#images img')
    let index = 0;
    setInterval(run, 1500);
    function run(){
        index++;
        if(index >= image.length-1){
            index = 0;
        }
        images.style.transform = `translatex(${-index*500}px)`;
    }
}