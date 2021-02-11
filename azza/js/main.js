let DOM = {
    works: document.querySelector('.works'),
    android: document.querySelector('.android'),
    web: document.querySelector('.web'),
    work_space: document.querySelectorAll('.work-space')
}


let work_btn = Array.from(DOM.works.querySelectorAll('span'))
let work_space = Array.from(DOM.work_space)

function removeALl(arr, classname) {
    arr.forEach((el) => {
        el.classList.remove(classname)
    })
}

function addALl(arr, classname) {
    arr.forEach((el) => {
        el.classList.add(classname)
    })
}

work_btn.forEach((el, index) => {
    console.log(index)
    el.addEventListener('click', function() {
        removeALl(work_btn, 'active')
        addALl(work_space, 'd-none')
        this.classList.add('active')
        if(work_space[index].dataset.work == this.dataset.link) {
            work_space[index].classList.remove('d-none')
        }
    })
})
