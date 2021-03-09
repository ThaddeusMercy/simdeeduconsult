var x = 0;
var y = 0; 
var teta = 0; 
var current = 0;
var comment = document.querySelectorAll('#statement') 
var caretRight = document.getElementById('arrow-right')
var caretLeft = document.getElementById('arrow-left')
var navBar = document.getElementById("nav");
var bgLanding = document.querySelectorAll("#bg-landing");
var comment = document.querySelectorAll('#statement') ;
var caretRight = document.getElementById('arrow-right');
var caretLeft = document.getElementById('arrow-left');
var whatsappContact = document.getElementById('whatsapp');
var nav = document.getElementById('nav');
var nav1 = document.getElementById('fullarticle-nav');

//navbar color chnage
function navify() {
    console.log(pageYOffset)
    if(window.pageYOffset > 150) {
        navBar.className = "hidden-xs nav-on-scroll";
    }
    else {
        navBar.className = "hidden-xs";
    }
};

// WHATSAPP CONTACT
function whatsappshow() {
  setTimeout(function() {
      whatsappContact.style.display = "block"
  },4000)
}

// BG-LANDING SLIDES
function changeBg() {
    setTimeout(function(){
        bgLanding[0].style.display =  "block" 
        bgLanding[1].style.display =   "none"
        bgLanding[2].style.display =   "none"
    },0)
    setTimeout(function(){
        bgLanding[0].style.display =   "none" 
        bgLanding[1].style.display =   "block"
        bgLanding[2].style.display =   "none"
    },6000)
    setTimeout(function(){
        bgLanding[0].style.display =   "none" 
        bgLanding[1].style.display =   "none"
        bgLanding[2].style.display =   "block"
    },12000)
    setTimeout(function(){
        changeBg()
    },24000)
}

  // MOBILENAV SECTION
var hamburger = document.querySelectorAll('#hamburger')
var mobileNav = document.getElementById('mobileNav')
v = 0;
function mobileNavify(){
  for(var i = 0; i < hamburger.length; i++)
  if(v == 0){
    hamburger[0].style.animationName = 'burgerAnimi'
    hamburger[1].style.display = 'none'
    hamburger[2].style.animationName = 'buggerAfterAnimi'
    hamburger[2].style.width = '35px'
    mobileNav.style.animationName = 'navOpened'
    v = 1
  }
  else{
    hamburger[0].style.animationName = 'burgerAnimiClose'
    hamburger[2].style.animationName = 'buggerAfterAnimiClose'
    hamburger[2].style.width = '30px' 
    hamburger[1].style.display = 'block'
    mobileNav.style.animationName = 'navClosed'
    v = 0
  }
}
