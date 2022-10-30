// template_og3t8jr
// service_pker4n9
// hXfeDCAUBiwaZ6K3T

function contact(event) {
    event.preventDefault(); //prevents refreshing of email page
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += "modal__overlay--visible";
    emailjs
      .sendForm(
        'service_pker4n9',
        'template_og3t8jr',
        event.target,
        'hXfeDCAUBiwaZ6K3T'
      ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
      }).catch(() => { //if the service is down or i run out of emails this is what happens
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on sethdimmer1@gmail.com"
        );
      })
    }


let isModalOpen = false;
function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}
