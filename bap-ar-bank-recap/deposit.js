document.getElementById('btn-deposit').addEventListener('click',function(){
 const depositFiled=document.getElementById('deposit-filed');
 const newDepositAmountString=depositFiled.value ;
 const newDepositAmount=parseFloat(newDepositAmountString);

 depositFiled.value='';

 const depositTotalElement=document.getElementById('deposit-total');
 const previousDepositTotalString=depositTotalElement.innerText;
 const previousDepositTotal=parseFloat(previousDepositTotalString);

 const newDepositTotal=previousDepositTotal+newDepositAmount;
 depositTotalElement.innerText=newDepositTotal;

 const balanceTotalElement=document.getElementById('balance-total');
 const previousBalanceTotalString=balanceTotalElement.innerText;
 const previousBalanceAmount=parseFloat(previousBalanceTotalString);

 const newBalanceTotal=previousBalanceAmount+newDepositAmount;
 balanceTotalElement.innerText=newBalanceTotal;
 
});