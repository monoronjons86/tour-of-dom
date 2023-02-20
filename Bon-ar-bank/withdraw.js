document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawFiled=document.getElementById('withdraw-filed');
    const withdrawFiledString=newWithdrawFiled.value ;
    const withdrawFiled=parseFloat(withdrawFiledString);
    newWithdrawFiled.value=' ';

    const withdrawTotalElement=document.getElementById('withdraw-total');
    const withdrawTotalElementString=withdrawTotalElement.innerText;
    const WithDrawTOtal=parseFloat(withdrawTotalElementString);

    const newWithdrawTotal=withdrawFiled+WithDrawTOtal;
    withdrawTotalElement.innerText=newWithdrawTotal;

    const newBalanceTotal=document.getElementById('balance-total');
    const newBalanceString=newBalanceTotal.innerText;
    const newBalanceAmount=parseFloat(newBalanceString);

    const BalanceTotal=newBalanceAmount-withdrawFiled;
    newBalanceTotal.innerText=BalanceTotal;



});