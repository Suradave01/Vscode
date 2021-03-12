let LoginButton = document.getElementById('Login');
let RegisButton = document.getElementById('Register');

const loginFunc = () => {
    let id = localStorage.getItem("username");
    let pass = localStorage.getItem("password");
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(id != username ) {
        alert("Username หรือ Password ไม่ถูกต้อง")
    }
    else if(password != pass) {
        alert("Username หรือ Password ไม่ถูกต้อง")
    }
    else {
        alert("Login success")
        location.href = 'website.html'
    }
}
LoginButton.addEventListener('click',loginFunc);


const PageRegis = () => {
    location.href = 'Register.html'
}
RegisButton.addEventListener('click',PageRegis);


