
var el = document.getElementById('header-list');
var elems = el.getElementsByTagName('li'); 

for(var i=1; i<elems.length; i++) {
  elems[i].addEventListener('mouseover', changeBg); 
  elems[i].addEventListener('mouseout', changeBd); 
var elemFirst = el.getElementsByTagName('li')[0]; 
elemFirst.className = 'menu_item_style';}




function changeBg(e){  
      //console.log(this);
      this.className = 'menu_item_style';
      elemFirst.className = '';
         
}

function changeBd(e){  
      //console.log(this);
      this.className = '';
      elemFirst.className = 'menu_item_style';
    }

/*--------------------------end menu js---------------------------------------*/


/*-----------------------------slider js-------------------------------------*/
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
  
   goToSlide(currentSlide+1);
   
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide,5000);
  };

previous.onclick = function() {
    previousSlide();
};

/*----------------------------------end slider js-----------------------------------*/