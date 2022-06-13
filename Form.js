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