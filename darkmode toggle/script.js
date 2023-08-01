window.onload = function(){
    const toggle = document.getElementById('toggle');
    toggle.addEventListener('change',function(Element){
        document.body.classList.toggle('dark',Element.target.checked);
    });
}