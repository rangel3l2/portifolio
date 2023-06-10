const menu = document.getElementById('menu'); 
const menuUl = document.getElementById('menu-ul');
const menuUlLi = document.querySelector('.menuUlLi')

let toogle;
const container = document.getElementById('container');
const noturnMode = document.querySelector('#noturn-mode-div');
//noturn mode 
const blackColor = '#3b2a2a'
const primaryColor = '#b11b1b'
let modeSky =  true
function toggleSky(){
    
    if(noturnMode.classList == 'moon')
    { 
        modeSky  = false
        noturnMode.classList.remove('moon')
        noturnMode.classList.add('sun')
        container.style.backgroundColor = blackColor
    }
    else
    { 
        modeSky = true
        noturnMode.classList.remove('sun')
        noturnMode.classList.add('moon')
        container.style.backgroundColor = primaryColor
    }
    

}

function toggleMenu(){
    console.log(modeSky)
  toggle = true;
  if(toggle){
    menuUl.style.listStyle = 'none';
    /* document.getElementsByTagName('ul').style.listStyle = 'none';  */ 
    menu.style.display = 'block';
    menu.style.listStyle = 'none';
    toggle = false;

    container.style.backgroundColor = blackColor
    menu.style.backgroundColor = primaryColor
    
  }
  menu.onmouseleave = function() {
    menu.style.display = 'none';
    if(modeSky)container.style.backgroundColor = primaryColor
  }
  


    

}
function closeMenu(){
    if(!toggle){
        menuUl.style.listStyle = 'none';
        /* document.getElementsByTagName('ul').style.listStyle = 'none';  */ 
        menu.style.display = 'none';
        menu.style.listStyle = 'none';
        toggle = true;
        console.log(modeSky)
        if(modeSky)container.style.backgroundColor = primaryColor
    
      }  
 }
 var scrollval = 0;
 window.addEventListener('scroll', () => {
   if(scrollval > window.scrollY) {
     // Do something
     console.log('Scroll up')
   } else {
     // Do something
     console.log('Scroll down')
   }
   scrollval = window.scrollY;
 });