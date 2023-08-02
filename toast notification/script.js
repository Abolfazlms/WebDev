window.onload = function(){
    const button = document.getElementById('button');
    const container = document.getElementById('container')
    button.addEventListener('click',function(){
        createNotification();
    });
    function createNotification(){
        const notification = document.createElement('div');
        notification.classList.add('toast');
        notification.innerText = 'Test notification';
        container.appendChild(notification);

        setTimeout(function(){
            notification.remove();
        },2000);
    }
   
}