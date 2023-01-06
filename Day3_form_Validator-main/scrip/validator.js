
var name1 = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#Confirm_password');
var form = document.querySelector('form');


form.addEventListener('submit',function(event){
    event.preventDefault();
    checkInput();
});

function checkInput(){
    var nameValue =name1.value.trim();
    var emailValue =email.value.trim();
    var passwordValue =password.value.trim();
    var confirmpassValue =confirmPassword.value.trim();

    //! check name value
    if(nameValue == ''){
        showError(name1,'cannot be blank');
    }else if(checkLeght(nameValue,4)==1){
        showError(name1,'name is not a valid')
    }else{
        showSuccess(name1);
    }

    //! check email value

    if(emailValue == ''){
        showError(email,'cannot be blank');
    }else if(!checkEmail(emailValue)){
        showError(email,'email is not a valid')

    }else{
        showSuccess(email);
    }
    
    
    //! check password value

    if(passwordValue == ''){
        showError(password,'cannot be blank');
    }else if(checkLeght(passwordValue,4)==1){
        showError(password,'password is not a valid')
    }else{
        showSuccess(password);
    }
    
    
    //! check confirmPassword value

    if(confirmpassValue == ''){
        showError(confirmPassword,'cannot be blank');
    }else if(passwordValue !== confirmpassValue){
        showError(confirmPassword,'password does not match')
    }else{
        showSuccess(confirmPassword);
    }
   

}

// showError
function showError(input, message){
    var formControl = input.parentElement;
    formControl.className = 'form-control error'
    formControl.querySelector('span').innerText = message;
}

//showSuccess
function showSuccess(input, message){
    var formControl = input.parentElement;
    formControl.className = 'form-control'
    formControl.querySelector('span').innerText = '';
}

//checkLeght
function checkLeght(input,min){
    if(input.length < min){
        return 1;
    }
}

function checkEmail(input){
    const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(input);
}