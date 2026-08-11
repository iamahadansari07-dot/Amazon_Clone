function sendWhatsApp() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "919340955539"; // Yahan apna WhatsApp number likho

    let text =
`Hello Ahad Sir,

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}
