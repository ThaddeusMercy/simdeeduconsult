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



// Testimonial Slides
function reset(){
    for( var i = 0; i < comment.length; i++)
     comment[i].style.display = 'none'
  }
  function display0(){
    reset();
    comment[0].style.display = 'block';
  }
  function displayPrev(){
    reset()
    comment[current - 1].style.display = 'block';
    current-- 
  }
  function displayNext(){
    reset()
    comment[current + 1].style.display = 'block';
    current++
  }
  caretLeft.addEventListener('click', function(){
    if(current === 0){
      current = comment.length;
    }
    displayPrev()
  })
  caretRight.addEventListener('click', function(){
    if(current === comment.length - 1){
      current = -1
    }
    displayNext()
  });
