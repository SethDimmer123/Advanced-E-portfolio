// template_og3t8jr
// service_sj0b8fa
// hXfeDCAUBiwaZ6K3T

function contact(event) {
    event.preventDefault();
    // emailjs
    //     .sendForm(
    //         'service_sj0b8fa',
    //         'template_og3t8jr',
    //         event.target,
    //         'hXfeDCAUBiwaZ6K3T'
    //     ).then(() => {
    //         console.log('this worked1')
    //     })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    
    setTimeout(() => {
        console.log('it worked 1')
    }, 500);

}