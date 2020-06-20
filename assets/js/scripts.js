// Mobile nav
const nav = document.querySelector(".js-nav");
const navSocial = document.querySelector(".js-nav-social");
const navTrigger = document.querySelector(".js-nav-trigger");
const navLink = document.querySelectorAll('.js-nav-link');
const body = document.body;

function toggleMobileNav() {
    nav.classList.toggle('is-visible');
    navSocial.classList.toggle('is-hidden');
    navTrigger.classList.toggle('is-active');
    if (navTrigger.classList.contains('is-active')) {
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    } else {
        stopFixedBody();
    }
};

function closeMobileNav() {
    nav.classList.remove('is-visible');
    navTrigger.classList.remove('is-active');
    stopFixedBody();   
};

function stopFixedBody() {
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

navTrigger.addEventListener( 'click', toggleMobileNav );

navLink.forEach(el => {
    el.addEventListener('click', event => {
        closeMobileNav();
    })
  })


// Wobble animation
const paperstack = document.querySelector(".js-paperstack")

 if(paperstack){
    function wobblePaperstack() {
        paperstack.classList.add('animated', 'wobble');
    };
    paperstack.addEventListener( 'mouseover', wobblePaperstack );

    paperstack.addEventListener('mouseout', () => {
        setTimeout(() => {
            paperstack.classList.remove('animated', 'wobble');
        }, 500);
     });
}


// Sound scape
const sound = document.getElementById("js-sound");
const soundTrigger = document.querySelector(".js-sound-trigger");

if(soundTrigger){
    soundTrigger.addEventListener('mousedown', () => {
        sound.play();
    });
}


// Nanobar
let options = {
    classname: 'p-nanobar',
    id: 'nanobar'
};

const nanobar = new Nanobar( options );

nanobar.go( 30 ); // size bar 30%
nanobar.go( 76 ); // size bar 76%

// size bar 100% and and finish
nanobar.go(100);


// Tilt
VanillaTilt.init(document.querySelector(".js-tilt"), {
    max: 10,
    speed: 300
});


// Aos
AOS.init();
