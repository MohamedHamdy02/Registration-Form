
let title = document.querySelector('p');

let logout = document.getElementById('logout');

logout.addEventListener('click' , () =>
{
    location.href = 'index.html'
});

let name = localStorage.getItem('name');

title.innerHTML = 'Welcome ' + name;



