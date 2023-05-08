let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

let slideIndex = 1;
showSlides(slideIndex+1);
let n;
function addSlides(n) {
  showSlides(slideIndex += n);}

  function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img");
  console.log(slides.length);
  if (n > slides.length) {
  btn1.style.display = `none`;
    btn2.style.display = `block`;
   slideIndex = 1;
   };
if( (n-1) == 0) {
  btn1.style.displey = `block`;
    btn2.style.display = `none`;
 };
 if(((n-1) != 0) & (n < slides.length))
 {
  btn1.style.display = `block`;
  btn2.style.display = `block`;
 }
 if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[slideIndex-1].style.display = "block";
    }}
  
    
   

   
   
    