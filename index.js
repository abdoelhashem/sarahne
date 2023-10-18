document.querySelector(".sms").focus();
function send() {
if (document.querySelector(".sms").value != "") {
    document.querySelector(".sms").focus();
    document.querySelector(".errs").innerHTML = ""
        var prams = {
            name: "saraha",
            email: "asmaahmd7x@gmail.com",
            message: document.querySelector(".sms").value,
        };
        let service_id = "service_cb87tb5";
        let template_id = "template_ml3cair";
        emailjs.send(
            service_id, template_id, prams
        ).then(res => {
            document.querySelector(".sms").value = "";
            document.querySelector(".errs").innerHTML = "done ---"
        }) .catch (err => document.querySelector(".errs").innerHTML = "check your internet!");
} else {
    document.querySelector(".errs").innerHTML = "write a text please!"
}
}
