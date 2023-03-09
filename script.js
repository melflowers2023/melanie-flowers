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
        setInterval(change, 3000);
        setInterval(change2, 3000);
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

let images = ['C:/Users/melfl/OneDrive/Documents/melanie-flowers/di2.PNG', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/di3.PNG', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/dihome.PNG'];
let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

let images2 = ['C:/Users/melfl/OneDrive/Documents/melanie-flowers/zd2.PNG', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/zd3.PNG', 'C:/Users/melfl/OneDrive/Documents/melanie-flowers/zdhome.PNG'];
let index2 = 0;
const imgElement2 = document.querySelector('#mainPhoto2');

function change2() {
   imgElement2.src = images2[index2];
   index2 > 1 ? index2 = 0 : index2++;
}

// window.onload = function () {
//     setInterval(change, 5000);
// };