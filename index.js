// template_og3t8jr
// service_pker4n9
// hXfeDCAUBiwaZ6K3T

function contact(event) {
    event.preventDefault(); //prevents refreshing of email page
    // emailjs
    //   .sendForm(
    //     'service_pker4n9',
    //     'template_og3t8jr',
    //     event.target,
    //     'hXfeDCAUBiwaZ6K3T'
    //   ).then(() => {
    //     console.log('this worked')
    //   })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    
    setTimeout(() => {
        console.log('it worked')
    },200);

}
