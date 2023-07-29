function dragElement(terrariumElement){
    //set positions of object in string
    let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;    
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(element){
        element.preventDefault();
        console.log(element);
        pos3 = element.clientX;
        pos4 = element.clientY;
    }    
}
 



dragElement(document.getElementById('plant1'));

dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));