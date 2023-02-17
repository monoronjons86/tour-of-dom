document.getElementById('btn-deposit').addEventListener('click',function(){
  const depositFiled=document.getElementById('user-deposit');
  const depositAmount=depositFiled.value ;

  const depositTotalElement=document.getElementById('deposit-total');
  const depositTotal=depositTotalElement.innerText;
  depositTotalElement.innerText=depositAmount;
});