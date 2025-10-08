let email = document.getElementById("mail");
let role = document.getElementById("options");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("Cpassword");
let mail = document.getElementById("email");
let pword = document.getElementById("word"); 
let email1 = document.getElementById("email1");
let Checkit = document.getElementById("checkit")


function createA(){
    if(email.value === "" || role.value === "" || firstName.value === "" || lastName.value === "" || password.value === "" || confirmPassword.value === "")
        alert("Please fill in all fields.");
        return false;
}
    if(password.value !== confirmPassword.value){
        alert("Passwords do not match.");
    }else{
    alert("Account created successfully!");
    }

function Signup(){
    if(mail.value === "" || pword.value === "" || !Checkit.checked){
        alert("Please fill in all fields.");
        return false;
    }else{
    alert("Login successful!");
    }

}

function Sendlink(){
    if(email1.value === ""){
        alert("Please enter your email address.");
        return false;
    }else{
    alert("A password reset link has been sent to your email.");
    }
}

function myFunction() {
  var x = document.getElementById("word");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
