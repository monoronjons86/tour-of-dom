document.getElementById('btn-submit').addEventListener('click',function(){
   const EmailFiled= document.getElementById('user-email');
   const email=EmailFiled.value ;
   
   const passwordFiled=document.getElementById('user-password');
   const password=passwordFiled.value;
   console.log(password);

   if( email==='sontan@bap.com'&& password==='secret'){
    window.location.href='Bank.html'
   }
   else{
    console.log('invalid user');
   }
});