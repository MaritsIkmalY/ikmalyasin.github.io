const header = document.querySelector('.navbar.container-fluid');

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 150){
        header.style.backgroundColor = 'rgb(13,110,253)';
    } else{
        header.style.backgroundColor = 'transparent';
    }
});