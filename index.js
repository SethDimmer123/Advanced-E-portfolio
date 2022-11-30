// template_og3t8jr
// service_sj0b8fa
// hXfeDCAUBiwaZ6K3T

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    emailjs
        .sendForm(
            'service_sj0b8fa',
            'template_og3t8jr',
            event.target,
            'hXfeDCAUBiwaZ6K3T'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on sethdimmer1@gmail.com"
            )
        })


    loading.classList += " modal__overlay--visible" 
    setTimeout(() => {

        console.log('it worked 1')
    }, 1000);

}