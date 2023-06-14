const menu = document.getElementById('menu'); 
const menuUl = document.getElementById('menu-ul');
const menuUlLi = document.querySelector('.menuUlLi')
const header = document.getElementById('header');
let toogle;

const darkMode = document.getElementsByClassName('dark-mode');
const container = document.getElementById('container');
const noturnMode = document.querySelector('#noturn-mode-div');
//noturn mode 
const blackColor = '#383a52'
const primaryColor = '#f7f3f3'
const textColor = '#b11b1b';
let modeSky =  true
function toggleSky(){
    
    if(noturnMode.classList == 'moon')
    { 
        modeSky  = false
        for(let i = 0;i < darkMode.length;i++){
          darkMode[i].style.color = primaryColor
        }
        
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
        for(let i = 0;i < darkMode.length;i++){
          darkMode[i].style.color = 'inherit'
        }
    }
    

}

function toggleMenu(){

  toggle = true;
  if(toggle){
    
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
        
        /* document.getElementsByTagName('ul').style.listStyle = 'none';  */ 
        menu.style.display = 'none';
        menu.style.listStyle = 'none';
        toggle = true;
        console.log(modeSky)
        if(modeSky)container.style.backgroundColor = primaryColor
    
      }  
 }
 const title = document.querySelector('.title')
 var scrollval = 0;
 window.addEventListener('scroll', () => {
   if(scrollval > window.scrollY) {
     // scroll up
        if(scrollval < 50){
            title.innerHTML = ''
            const textTitle = document.createElement('p')
            textTitle.innerText = 'Rangel Gomes'
            title.appendChild(textTitle)
        }
     
   } else {
     // scrooldown
     
        if(scrollval >= 50){
            title.innerHTML = ''
            const imgR = document.createElement('img')
            imgR.setAttribute('src','img/r.png')
            imgR.id = 'imgR'
            title.appendChild(imgR)
            header.style.position = 'fixed'
            header.style.width = '100%'
            header.style.backgroundColor = primaryColor
            header.style.height =  '10vh'
        
        
     }
     

   }
   scrollval = window.scrollY;
 });