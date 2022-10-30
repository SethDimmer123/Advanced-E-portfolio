// template_og3t8jr
// service_pker4n9
// hXfeDCAUBiwaZ6K3T

function contact(event) {
    event.preventDefault(); //prevents refreshing of email page
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList.remove("modal__overlay--visible")
    emailjs
      .sendForm(
        'service_pker4n9',
        'template_og3t8jr',
        event.target,
        'hXfeDCAUBiwaZ6K3T'
      ).then(() => {
        // throw new Error("error");
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
      }).catch(() => { //if the service is down or i run out of emails this is what happens
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on sethdimmer1@gmail.com"
        )

      })

    loading.classList += " modal__overlay--visible"
    setTimeout(() => {

        console.log('it worked')
    },1000);

}
