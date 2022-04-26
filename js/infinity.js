let slides = document.querySelectorAll('.infinity-slider div');
let current = 0;

function slider(){
    for (let i = 0; i < slides.length; i++){
        slides[i].classList.add('opacity0');
    }
    slides[current].classList.remove('opacity0');
    
   
}
slider();

//document.querySelector('.infinity-slider').onclick = slider;
document.querySelector('.btn-infinity-left').onclick = function(){
     if (current-1 == -1){
        current = slides.length - 1;
    }
    else{
        current--;
    }
    slider()
};
document.querySelector('.btn-infinity-right').onclick = function(){
if (current+1 == slides.length){
        current = 0;
    }
    else{
        current++;
    }
    slider()
};
//слайдер в коментаріях
let slides2 = document.querySelectorAll('.coment-slider div');
let current2 = 0;

function slider2(){
    for (let i = 0; i < slides2.length; i++){
        slides2[i].classList.add('secondOpacity0');
              
    }
    slides2[current2].classList.remove('secondOpacity0');
    
    if(current2+1 == slides2.length){
        current2 = 0; 
    }
    else{
        current2++;
    }
}
slider2();

document.querySelector('.coment-slider').onclick = slider2;





