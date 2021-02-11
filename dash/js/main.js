const side = document.querySelector('.toggle-button');
side.onclick = function () {
    document.querySelector('.sidebar').classList.toggle('nosidebar')
    document.querySelector('.content-area').classList.toggle('nosidebar');
}


const items = Array.from(document.querySelectorAll('.links li a'));

items.forEach(el => {
    el.addEventListener('click', function() {
        let list = el.lastChild;
        list.classList.toggle('show');
    })
});

//  Show an hide setting box

const box = document.querySelector('.toggle-box');
const settingBox = document.querySelector('.setting-box');
box.addEventListener('click', function() {
    this.lastChild.classList.toggle('fa-spin');
    console.log(this);
    settingBox.classList.toggle('hide-box');
});


// Switch color theme
const colorItem = Array.from(document.querySelectorAll('.color-options ul li'));


colorItem.forEach(el => {
    el.addEventListener('click', function(e) {
        removeThemes();
        document.body.classList.add(e.target.dataset.theme);
    });
});


function removeThemes() {
    const colorItem = Array.from(document.querySelectorAll('.color-options ul li'));
    const themes = [];
    colorItem.forEach((element, i) => {
        themes.push(element.dataset.theme)
    });
    document.body.classList.remove(...themes)
}

// Slider color control
const switchBtn = Array.from(document.querySelectorAll('.slider-option ul li .switch'));
console.log(switchBtn)
switchBtn.forEach(el => {
    el.addEventListener('click', function() {
        changeIcon();
        this.classList.replace('fa-toggle-off', 'fa-toggle-on');
    });
});


function changeIcon() {
    const switchBtn = Array.from(document.querySelectorAll('.slider-option ul li .switch'));
    switchBtn.forEach(element => {
        element.classList.replace('fa-toggle-on', 'fa-toggle-off');
    });
}

changeIcon();


const sideColor = Array.from(document.querySelectorAll('.slider-option ul li'));
sideColor.forEach(el => {
    el.addEventListener('click', function(e) {
        console.log(e.target.dataset.color);
        document.querySelector('.sidebar').classList.remove('blue', 'black', 'defult', 'red');
        document.querySelector('.sidebar').classList.add(e.target.dataset.color)
    });
});


function removeColor() {
    const col = Array.from(document.querySelectorAll('.slider-option ul li'));
    const themes = [];
    col.forEach((element, i) => {
        themes.push(element.dataset.color);
    });
}

removeColor();


// theme option 
const dashTheme = Array.from(document.querySelectorAll('.theme-option .themes div'));

dashTheme.forEach(element => {
    element.addEventListener('click', function(e) {
        if(e.target.dataset.th == 'dark') {
            document.body.classList.add('darker-theme');
        } else {
            document.body.classList.remove('darker-theme');
        }
    });
});

// darker-theme