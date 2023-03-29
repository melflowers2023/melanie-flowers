// var TxtType = function(el, toRotate, period) {
//         this.toRotate = toRotate;
//         this.el = el;
//         this.loopNum = 0;
//         this.period = parseInt(period, 10) || 2000;
//         this.txt = '';
//         this.tick();
//         this.isDeleting = false;
//     };

//     TxtType.prototype.tick = function() {
//         var i = this.loopNum % this.toRotate.length;
//         var fullTxt = this.toRotate[i];

//         if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }

//         this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//         var that = this;
//         var delta = 100 - Math.random() * 100;

//         if (this.isDeleting) { delta /= 2; }

//         if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 250;
//         }

//         setTimeout(function() {
//         that.tick();
//         }, delta);
//     };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // function change() {
        //     imgElement.src = photos[index];
        //     index > 1 ? index = 0 : index++;
        //  }


        // console.log(interval)
        setInterval(change, interval);
        
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

// APP SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides)
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}    

let interval = 4000;
let images = ['sources/dihome.PNG', 'sources/di2.PNG', 'sources/di3.PNG'];
let index = 0;
const imgElement = document.querySelector('#mainPhoto');
const imgElement0 = document.querySelector('#Photo0');
const imgElement1 = document.querySelector('#Photo1');
const imgElement2 = document.querySelector('#Photo2');

function change() {
    imgElement0.className = size;
    imgElement0.src = photos[0];

    imgElement1.className = size;
    imgElement1.src = photos[1];

    imgElement2.className = size;   
    imgElement2.src = photos[2];
   
   
   
}

let images2 = ['sources/zdhome.PNG', 'sources/zd2.PNG', 'sources/zd3.PNG'];
let images3 = ['sources/ig4.gif', 'sources/ig1.gif', 'sources/ig2.gif']
let images4 = ['sources/cb1.PNG', 'sources/cb2.PNG', 'sources/cb3.PNG'];

let size = 'di1';
let photos = images;
function choose(choice) {
    showSlides(1);
    // console.log(choice)
    if (choice == 'zd') {
        photos = images2;
        // index = 2;
        // clearInterval();
        // setInterval(change, 3000);
        size = 'di1';
    }
    else if (choice == 'ig') {
        photos = images3;
        index = 2;
        // console.log(interval)
        // interval = 7000;
        // clearInterval();
        // setInterval(change, 7000);
        // console.log(interval);
        size = 'ig1';
        
    }
    else if (choice == 'cb') {
        photos = images4;
        index = 1;
        // console.log(interval)
        // interval = 7000;
        // clearInterval();
        // setInterval(change, 7000);
        // console.log(interval);
        size = 'ig1';
        
    }
    else {
        photos = images;
        // index = 2;
        // clearInterval();
        // setInterval(change, 3000);
        size = 'di1';
    }
}

// DARK AND LIGHT THEME
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme')
    themeButton.classList.toggle('sun');

    localStorage.setItem('saved-theme', getCurrentTheme());
    localStorage.setItem('saved-icon', getCurrentIcon());
})

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains('sun') ? 'sun' : 'moon';

const savedTheme = localStorage.getItem('saved-theme');
const savedIcon = localStorage.getItem('saved-icon');

if(savedTheme) {
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    themeButton.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun');
}

// RESPONSIVE NAVIGATION MENU
const navOpen = document.getElementById('nav-open');
const navClose= document.getElementById('nav-close');
const nav = document.getElementById('nav-box');
const navItems = document.querySelectorAll('.nav-box a');

navOpen.addEventListener('click', () => {
    nav.classList.add('active');
})

navClose.addEventListener('click', () => {
    nav.classList.remove('active');
})

navItems.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.remove('active');
    })
});

// NAV BAR ITEMS ACTIVE ON SCROLL
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 70;
        let id = current.getAttribute('id');  

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-items a[href*=' + id + ']').classList.add('active');
        }
        else {
            document.querySelector('.nav-items a[href*=' + id + ']').classList.remove('active');
        }
    })
})

// APP DROPDOWN MENU
var dropdown = document.querySelectorAll('.app-item');
var dropdownArray = Array.prototype.slice.call(dropdown, 0);

dropdownArray.forEach(function(element) {
    var button = element.querySelector('.app-button'),
        menu = element.querySelector('.app-about');
        // arrow = button.querySelector('')
    button.onclick = function(event) {
        dropdownArray.forEach(function(el) {
            choose(button.id);
            console.log(menu);
            console.log(button);
            if (el.querySelector('.app-button') == button) {
                if(!menu.classList.contains('show')) {
                    menu.classList.add('show');
                    menu.classList.remove('hide');
                    button.classList.add('highlight');
                    button.classList.remove('nolight');   
                }
            }
            else {
                if(el.querySelector('.app-about').classList.contains('show')) {
                    console.log(el.querySelector('.app-button'))
                    el.querySelector('.app-about').classList.remove('show');
                    el.querySelector('.app-about').classList.add('hide');
                    el.querySelector('.app-button').classList.remove('highlight');
                    el.querySelector('.app-button').classList.add('nolight');
                }
            }
        })  
    }
})

