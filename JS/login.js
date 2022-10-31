
let userEmail = document.getElementById('userEmail');

let userPassword = document.getElementById('userPassword');

let signinButton = document.getElementById('signinButton');

let signUp = document.getElementById('signUp');

let formInputs = Array.from(document.querySelectorAll('input'));

let errorMessage = document.getElementById(`error`);

signinButton.addEventListener('click' , loginAccount);

signUp.addEventListener('click' , ()=> {
    location.href = 'Register.html'
});

let getData;

(function () {
    if (localStorage.getItem('data'))
    getData = JSON.parse(localStorage.getItem('data'));
    else getData = [];
})();

function loginAccount(e) {
    e.preventDefault()
    if (validation() && checkInputs())
    {
        location.href = 'result.html'
    }
};

function validation() {
    let valid = true;
    for (let i=0; i<formInputs.length; i++){
        if(formInputs[i].value == "") {
            errorMessage.innerHTML="All inputs required"
            errorMessage.style.color = 'red'
            valid = false;
            return false;
        }
    }
    valid = true;
    if(valid == true) {
        errorMessage.innerHTML = "";
        return true;
    }
};

function checkInputs() 
{
    let userValidition = true

    for (let i=0 ; i<getData.length; i++)
    {
        if (getData[i].email == userEmail.value && getData[i].password == userPassword.value)
        {
            userValidition = false;
            localStorage.setItem('name' , getData[i].name)
            return true;
        }
    }
    userValidition = true;
    if (userValidition == true)
    {
        errorMessage.innerHTML="Email/Password incorrect!";
        return false;
    }
};