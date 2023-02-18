document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('user-withdraw');
    const withdrawFieldString=withdrawField.value ;
    const newWithdrawAmount=parseFloat(withdrawFieldString);
    
    const withdrawTotalElement=document.getElementById('withdraw-amount');
    const previousWithdrawString=withdrawTotalElement.innerText;
    const previousWithdraw=parseFloat(previousWithdrawString);

    const currentWithdraw=previousWithdraw+newWithdrawAmount;
    withdrawTotalElement.innerText=currentWithdraw;
    withdrawField.value='';
   
});