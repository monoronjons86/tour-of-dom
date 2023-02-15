document.getElementById('btn-submit').addEventListener('click',function(){
    const emailFiled=document.getElementById('user-email');
    const EMmail=emailFiled.value ;

    const passwordFiled=document.getElementById('user-password');
    const PPassWrd=passwordFiled.value;

    if(EMmail==='sona@mom.com'&&PPassWrd==='mother'){
        window.location.href='bank.htm'
    }
    else{
        alert('tui vuli gaics');
    }

});