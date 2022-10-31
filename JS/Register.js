let signupUsername = document.getElementById("signupUsername");

let signUpEmail = document.getElementById("signUpEmail");

let signUpPassword = document.getElementById("signUpPassword");

let registerButton = document.getElementById("registerButton");

let signIn = document.getElementById('signIn');

let errorMessage = document.getElementById(`error`);

let errorEmail = document.querySelector('.error-email');

let formInputs = Array.from(document.querySelectorAll("input"));

signIn.addEventListener('click' , () => {
    location.href = 'index.html'
});

let registrationContainer;

(function () {
    if (localStorage.getItem("data"))
        registrationContainer = JSON.parse(localStorage.getItem("data"));
    else registrationContainer = [];
})();

registerButton.addEventListener("click", register);

function register() {
    if (validation() && checkUserInfo() != false) {
        location.href = 'index.html'
        let registerForm = {
            name: signupUsername.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
        };
        registrationContainer.push(registerForm);
        localStorage.setItem("data", JSON.stringify(registrationContainer));
    }
};

function validation() {
    let valid = true;
    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value == "") {
            errorMessage.innerHTML = "All inputs required";
            errorMessage.style.color = "red";
            valid = false;
            return false;
        }
    }
    valid = true;
    if (valid && validateEmail() == true) {
        errorMessage.innerHTML = "succsess";
        errorMessage.style.color = "green";
        return true;
    }
    else {
        errorEmail.style.display = 'block';
        errorEmail.innerHTML = 'invalid email address'
    }
    
};

function checkUserInfo() {
    for (let i = 0; i < registrationContainer.length; i++) {
        if (registrationContainer[i].email == signUpEmail.value) {
            errorMessage.innerHTML = "you already signed with this mail";
            errorMessage.style.color = "red";
            return false;
        }
    }
};


function validateEmail() {
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    if (regex.test(signUpEmail.value) == true) {
        return true;
    }
    else {
        return false;
    }
};