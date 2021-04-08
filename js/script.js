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
function display0() {
setTimeout(function display0(){
  reset();
  comment[0].style.display = 'block';
},0)
setTimeout(function displayPrev(){
  reset()
  comment[1].style.display = 'block';
 
},6000)
setTimeout(function displayNext(){
  reset()
  comment[2].style.display = 'block';
  
},12000)
setTimeout(function displayNext(){
  reset()
  comment[3].style.display = 'block';
  
},18000)
setTimeout(function displayNext(){
  reset()
  comment[4].style.display = 'block';
 
},24000)
setTimeout(function displayNext(){
  display0()
},30000)
}
caretLeft.addEventListener('click', function (){
  if(current === 0){
    current = comment.length;
  }
  displayPrev()
})
caretRight.addEventListener('click', function (){
  if(current === comment.length - 1){
    current = -1
  }
  displayNext()
});


// // Testimonial Slides
// function reset(){
//     for( var i = 0; i < comment.length; i++)
//      comment[i].style.display = 'none'
//   }
//   setTimeout(function display0(){
//     reset();
//     comment[0].style.display = 'block';
//   },0)
//   setTimeout(function displayPrev(){
//     reset()
//     comment[current - 1].style.display = 'block';
//     current-- 
//   },1000)
//   setTimeout(function displayNext(){
//     reset()
//     comment[current + 1].style.display = 'block';
//     current++
//   },2000)
//   caretLeft.addEventListener('click', function(){
//     if(current === 0){
//       current = comment.length;
//     }
//     displayPrev()
//   })
//   caretRight.addEventListener('click', function(){
//     if(current === comment.length - 1){
//       current = -1
//     }
//     displayNext()
//   });
