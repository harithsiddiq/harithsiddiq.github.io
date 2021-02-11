// save the color on localStorage
let mainColor = localStorage.getItem('main-color');

if(mainColor !== null) {
    // set page color from localStorage
    document.documentElement.style.setProperty('--main--color', mainColor);

    document.querySelectorAll('.color-list li').forEach( el => {
        el.classList.remove('active');
        if(el.dataset.color === mainColor) {
            el.classList.add('active');
        }
    });
};


// turn on/off random background image  
let backgroundOption = true;

// controll timeInterval 
let backgroundInterVal;

// check if there is Local Storage Random background value;
let backgroundLocalItem = localStorage.getItem('background-option');

if(backgroundLocalItem !== null) {
    
    if(backgroundLocalItem === 'true') {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

    document.querySelectorAll('.bg-option span').forEach( el => {
        el.classList.remove('active');
    });

    if(backgroundLocalItem === 'true') {
        document.querySelector('.bg-option .yes').classList.add('active');
    } else {
        document.querySelector('.bg-option .no').classList.add('active');
    }
}

// toogle setting view

// get the gear icon 
let gearIcon = document.querySelector('.setting-box .fa-gear');
// open setting box and make the gear spin and light
gearIcon.addEventListener('click', () => {
    document.querySelector('.setting-box').classList.toggle('open');
    gearIcon.classList.toggle('fa-spin')
    document.querySelector('.toggle-setting').classList.toggle('light')
});

// Switch color
const colorsLi = document.querySelectorAll('.color-list li');

colorsLi.forEach( li => {
    li.addEventListener('click', e => {
        // handle active class
        activeClass(e);

        // set color on root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color)
        
        // add selected color to localStorage
        localStorage.setItem('main-color', e.target.dataset.color)

    });
});

// Switch on/off random background
const randomBg = document.querySelectorAll('.bg-option span');

randomBg.forEach( span => {
    span.addEventListener('click', e => {

            // handle active class
            activeClass(e);

            if(e.target.dataset.back == 'yes') {
                localStorage.setItem('background-option', true);
                backgroundOption = true;
                randomizeImages();
            } else {
                localStorage.setItem('background-option', false);
                backgroundOption = false;
                clearInterval(backgroundInterVal);
            }
    });
});

randomizeImages();

// Select Landing Page Element
let LandingPage = document.querySelector('.landing-page');

// get Array Of Image
let Images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

let randomNumber = Math.floor(Math.random() * Images.length - 1);

function randomizeImages() {

    if(backgroundOption === true) {

        backgroundInterVal = setInterval( () => {
            randomNumber < 5 ? randomNumber++ : randomNumber = 0; 
            LandingPage.style.backgroundImage = 'url("image/'+ Images[randomNumber] +'")';
        }, 3000);

    }
}

// remove active class from list items
function removeActiveClass() {
    colorsLi.forEach( li => li.classList.remove('active'));
}

const ourSkills = document.querySelector('.skills')

window.onscroll = function() {

    // Skills offset top
    let skilOfSetTop = ourSkills.offsetTop;

    // skill outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let WindowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    
    if(windowScrollTop >= (skilOfSetTop + skillsOuterHeight - WindowHeight)) {
        
        console.log('yep')
        // get all progres skill spans
        let skillsSpan = document.querySelectorAll('.skill-box .skill-progress span');
        
        // loop throw spans and set the width
        skillsSpan.forEach( span => {
            span.style.width = span.dataset.prog;
        });
    }
}


// Create Popup With Image

let gellery = document.querySelectorAll('.images-box img');

// create overlay div on top of everything in page


gellery.forEach( img => {

    img.addEventListener('click', () => {

        let overlay = document.createElement('div');

        // remove overlay from dom when click on it
        overlay.addEventListener('click', () => {
            let parent = overlay.parentElement;
            parent.removeChild(overlay);
            let imgBox = parent.querySelector('.popup-box');
            imgBox.parentElement.removeChild(imgBox);
        });

        // add overlay class to overlay div
        overlay.className = 'popup-overlay';

        // append the div into body 
        document.body.appendChild(overlay);

        // create image container
        let popupBox = document.createElement('div');

        // add popup class to the image container
        popupBox.className = 'popup-box';

        // append the image container to the body
        document.body.appendChild(popupBox);

        // create an image tag
        let imageTag = document.createElement('img'); 

        // assing thr source of selected image to the imageItem
        imageTag.src = img.src;

        // add imageItem to the popupbox
        popupBox.appendChild(imageTag); 
    });
});


// get All Bullets
const toolKit = document.querySelectorAll('.bullets');

// get All links 
const allLinks = document.querySelectorAll('.links a');

// loop throw bullets and scroll to the selected section
smoothScroll(toolKit);

// loop throw all links and scroll to selected one's
smoothScroll(allLinks);

// handle smooth scroll 
function smoothScroll(element) {
    element.forEach( el =>  {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e.target.dataset.section)
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// handle active class function
function activeClass(event) {

    event.target.parentElement.querySelectorAll('.active').forEach( el => {
        el.classList.remove('active');
    }); 

    // add active class to the selected item
    event.target.classList.add('active');
}

// get bullits nav
let bulitNav = document.querySelector('.nav-bullet');

// get bullets span 
let bullitSpan = document.querySelectorAll('.bullets-option span');

// check if there is Local Storage value for bullits option;
let bullitsLocal = localStorage.getItem('nav-option');

if(bullitsLocal !== null) {
    
    bullitSpan.forEach( span => { span.classList.remove('active') });

    if(bullitsLocal === 'block') {
        bulitNav.style.display = 'block';
        document.querySelector('.bullets-option .yes').classList.add('active');
    } else {
        bulitNav.style.display = 'none';
        document.querySelector('.bullets-option .no').classList.add('active');
    }
}


bullitSpan.forEach( span => {
    span.addEventListener('click', (e) => {
        if(e.target.dataset.bulit === 'yes') {
            bulitNav.style.display = 'block';
            localStorage.setItem('nav-option', 'block');
        } else {
            bulitNav.style.display = 'none';
            localStorage.setItem('nav-option', 'none');
        }
        activeClass(e);
    });
});

// reset button
document.querySelector('.reste-option').onclick = function() {

    localStorage.clear();

    window.location.reload();
}

// toggle menu in small screen
let toggleBtn = document.querySelector('.toggle-menu');
let tlinks = document.querySelector('.links');

toggleBtn.onclick = function(e) {

    e.stopPropagation();

    this.classList.toggle('menu-active');

    tlinks.classList.toggle('open');

}

document .addEventListener('click', (e) => {
    if(e.target !== toggleBtn && e.target !== tlinks) {
        
        if(tlinks.classList.contains('open')) {
            toggleBtn.classList.toggle('menu-active');

            tlinks.classList.toggle('open');
        }

    }
});

tlinks.onclick = function(e) {
    e.stopPropagation();
}

let topBtn = document.querySelector('.top').onclick = function() {
    this.scrollTop = '0'
}