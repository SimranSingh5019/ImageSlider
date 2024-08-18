const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
document.addEventListener("DOMContentLoaded",initialize);
function initialize(){
    if(slides.length>0){
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide,5000)
    }
   
}
function showSlide(index){
    if(index>=slides.length){
        index = index%slides.length;
    }
    else if(index<0){
        index = 0;
    }
    slides.forEach(slide=>{
        slide.classList.remove('displaySlide');
    });
    slides[index].classList.add('displaySlide');
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
