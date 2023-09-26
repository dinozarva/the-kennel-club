function createAccount(event) {
    event.preventDefault()
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value

    if (email === "") {
        document.getElementById("noEmail").innerHTML = "Enter your email"
    } else {
        document.getElementById("noEmail").innerHTML = ""
    }

    if (password === "") {
        document.getElementById("noPassword").innerHTML = "Create a password"
    } else if(password.length<4){
        document.getElementById("noPassword").innerHTML = "Your password is too short "
    } else if(password.length>4) {
        document.getElementById("noPassword").innerHTML = ""
    }
    if (confirmPassword === "") {
        document.getElementById("ifo").innerHTML = "Confirm your password"
    } else if (password === confirmPassword) {
        document.getElementById("ifo").innerHTML = ""
    } else if (password !== confirmPassword) {
        document.getElementById("ifo").innerHTML = "Incorrect password"
    }


}

var cancle = document.getElementById('cancel-button')

cancle.addEventListener('click', function (){
    event.preventDefault()
    window.location.href="login.html"
})