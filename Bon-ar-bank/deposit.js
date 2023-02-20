document.getElementById('btn-deposit').addEventListener('click',function(){
  const depositFiled=document.getElementById('deposit-filed');
  const newDepositAmountString=depositFiled.value ;
  const newDepositAmount=parseFloat(newDepositAmountString);
  depositFiled.value=' ';

  const depositTotalElement=document.getElementById('Deposit-total');
  const previousDepositTotalString=depositTotalElement.innerText;
  const previousDepositTotal=parseFloat(previousDepositTotalString);

  const newDepositTotal=newDepositAmount+previousDepositTotal;
  depositTotalElement.innerText=newDepositTotal;

  const newDepositBalance=document.getElementById('balance-total');
  const depositBalanceString=newDepositBalance.innerText;
  const depositBalance=parseFloat(depositBalanceString);

  const TotalBalance=depositBalance+newDepositAmount;
  newDepositBalance.innerText=TotalBalance;



});