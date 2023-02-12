//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
//step-2: get the email address inside the email input field
//always remember to use .value to get text form an input filed
const emailFiled=document.getElementById('user-email');
const email=emailFiled.value ;
//step-3:get password
//step-3.a: set id on the html element
//step-3.b:get the element
//step-4.c :get the value form element
const passwordFiled=document.getElementById('user-password');
const password=passwordFiled.value;

//Danger:Do not verify email password on the client side
//step-4:verify email and password
if(email==='sontan@baap.com'&& password=='secret'){
    console.log('valid user')
}
else{
    console.log('invalid user')
}


});