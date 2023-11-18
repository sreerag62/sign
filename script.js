function validateName(){
    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')


    if(name.ariaValueMax.trim()==''){
        nameError.innerHTML='username cannot be blank'
        return false
    }else if(name.Value.length<5){
        nameError.innerHTML = 'username must not be less than characters'
        return false
    }
    else{
        nameError.innerHTML = ''
        return true
    }
}
function validateEmail(){
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')

    if(email.Value.trim()==''){
        emailError.innerHTML = 'Email cannot be blank'


     let regEx =   / ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

 if(email.Value.trim()==''){
        emailError.innerHTML = 'Email cannot be blank'
        return false
    }else if(email.value.match(regEx)){
        emailError.innerHTML = 'email is not valid!'
        return false
    }else{
        emailError.innerHTML=''
        return true
    }
}
function validatePassword(){
    let password = document.getElementById('password')
    let passwordError = document.getElementById('password-error')

    if(password.value.trim() == ''){
        passwordError.innerHTML = 'password cannot be empty'
        return false
    }else if(password.value.length <6 || password.value.length>20){
        passwordError.innerHTML ='password should contain 6 to 18 characters'
        return false
    }else{
        passwordError.innerHTML = ''
        return true
    }
    }
}