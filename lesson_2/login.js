function checkValidData(event) {
    event.preventDefault()
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value;

    if (email === "") {
        document.getElementById("noEmail").innerHTML = "Enter your email"
    } else {
        document.getElementById("noEmail").innerHTML = ""
    }

    if (password === "") {
        document.getElementById("noPassword").innerHTML = "Enter a password"
    } else if(password.length<4){
        document.getElementById("noPassword").innerHTML = "Your password is too short "
    } else if(password.length>4) {
        document.getElementById("noPassword").innerHTML = ""
    }
}