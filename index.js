// template_og3t8jr
// service_sj0b8fa
// hXfeDCAUBiwaZ6K3T

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; ++i) {
        shapes[i].style.transform = `translate(${x}px, ${y}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible" 

    emailjs
        .sendForm(
            'service_sj0b8fa',
            'template_og3t8jr',
            event.target,
            'hXfeDCAUBiwaZ6K3T'
        ).then(() => {
            // throw new Error("error");
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on sethdimmer1@gmail.com"
            );
        }) 
}

function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}