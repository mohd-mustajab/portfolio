const form=document.querySelector("form");
const Fullname=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const sub=document.getElementById("sub");
const msg=document.getElementById("msg");

function SendEmail(){
    const bodyMessage=`Name:${Fullname.value}<br>Email:${email.value}<br>Phone:${phone.value}<br>Message:${msg.value}`
    Email.send({
        SecureToken : "b06df687-1483-4121-9bb6-26b36844bad7",
        To : "mustjabkhan0786@gmail.com",
        From : "mustjabkhan0786@gmail.com",
        Subject : sub.value,
        Body :bodyMessage
    }).then(
      message =>{
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message has been sent successfully!",
                icon: "success"
              });
             Fullname.value="";
             email.value="";
             phone.value="";
             sub.value="";
             msg.value="";
        }
      }
    );
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    SendEmail();
});
