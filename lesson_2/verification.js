function sendVerification(event) {
    event.preventDefault()
    var email = document.getElementById("email-v").value

    if (email === "") {
        document.getElementById("noEmail").innerHTML = "Enter your email"
    } else {
        document.getElementById("noEmail").innerHTML = ""
    }
}