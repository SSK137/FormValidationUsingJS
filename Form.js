const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
        });

        
// Validation For Name
const text= document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRgx = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRgx.test(text.value))
    textError.textContent= "";
    else textError.textContent = "Name Is Incorrect";
});

//Validation For Contact Number
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function(){
    let telRgx = RegExp('^[0-9]{2}\\s{0,1}[0-9]{10}$');
    if(telRgx.test(tel.value))
    telError.textContent= "";
    else telError.textContent = "Phone No Is Incorrect";
});

//Validattion for Password and its Rules
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function(){
    let pwdRgx = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()]).{8}$');
    if(pwdRgx.test(pwd.value))
    pwdError.textContent= "";
    else pwdError.textContent = "Password Is Incorrect";
});