const header = document.querySelector('#header');
const mobileMenu = document.querySelector('.menu-btn');
const headerHeight = header.clientHeight //lấy chiều cao của header

mobileMenu.onclick = function(){
    const isClosed = header.clientHeight === headerHeight
    if (isClosed){
        header.style.minHeight = '230px';
    }
    else{
        header.style.minHeight = null;
    }
}

const menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i]
}