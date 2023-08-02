window.onload = function(){
    const button = document.getElementById('button');
    const nav = document.getElementById('nav');
    
    button.addEventListener('click',function(){
        nav.classList.toggle('active');
        button.classList.toggle('active');
    })
}