const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});
function sendEmail(){
      Email.send({
        Host : "smtp.gmail.com",
        Username : "paschal@gmail.com",
        Password : "@dad23",
        To : 'iwuchukwuezugo@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name:" + document.getElementById("name").value
        + "<br> Email:" + document.getElementById("email").value
        + "<br> phone no:" + document.getElementById("phone").value
        + "<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}
