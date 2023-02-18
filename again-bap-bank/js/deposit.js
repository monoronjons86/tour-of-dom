document.getElementById('btn-deposit').addEventListener('click',function(){
  const depositFiled=document.getElementById('user-deposit');
  const newDepositAmountString=depositFiled.value ;
  const newDepositAmount=parseFloat(newDepositAmountString);

  const depositTotalElement=document.getElementById('deposit-total');
  const previousDepositTotalString=depositTotalElement.innerText;
  const previousDepositTotal=parseFloat(previousDepositTotalString);

  const currentDepositTotal=newDepositAmount+previousDepositTotal;
  depositTotalElement.innerText=currentDepositTotal;

  const balanceTotalElement=document.getElementById('balance-total');
  const previousBalanceTotalString=balanceTotalElement.innerText;
  const previousBalanceTotal=parseFloat(previousBalanceTotalString);

  const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
  balanceTotalElement.innerText=currentBalanceTotal;



  depositFiled.value='';



});