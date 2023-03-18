var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 250;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        function change() {
            imgElement.src = photos[index];
            index > 1 ? index = 0 : index++;
         }


        console.log(interval)
        setInterval(change, interval);
        
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

let interval = 4000;
let images = ['C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/di2.PNG', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/di3.PNG', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/dihome.PNG'];
let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
    imgElement.className = size;
   imgElement.src = photos[index];
   
   index > 1 ? index = 0 : index++;
   console
}

let images2 = ['C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/zd2.PNG', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/zd3.PNG', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/zdhome.PNG'];
let images3 = ['C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/ig3.gif', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/ig4.gif', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/ig1.gif', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/sources/ig2.gif']

// window.onload = function () {
//     setInterval(change, 5000);
// };
let size = 'di1';
let photos = images;
function choose(choice) {
    console.log(choice)
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
        console.log(interval)
        // interval = 7000;
        // clearInterval();
        // setInterval(change, 7000);
        console.log(interval);
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

const themeButton = document.getElementById("theme-button");
console.log(themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme')
    themeButton.classList.toggle('sun');

    localStorage.setItem('saved-theme', getCurrentTheme());
    localStorage.setItem('saved-icon', getCurrentIcon());

    console.log('clicked')
})

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains('sun') ? 'sun' : 'moon';

const savedTheme = localStorage.getItem('saved-theme');
const savedIcon = localStorage.getItem('saved-icon');

if(savedTheme) {
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    themeButton.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun');
}