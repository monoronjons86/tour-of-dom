document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFiled=document.getElementById('withdraw-filed');
    const newWithdrawAmountString=withdrawFiled.value ;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);


    withdrawFiled.value='';

    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText=newWithdrawTotal;

    const balanceElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
     balanceElement.innerText=newBalanceTotal;



});