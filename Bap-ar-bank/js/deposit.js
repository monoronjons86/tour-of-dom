//step-1:add even listen to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2:get the deposit amount form the deposit input filed
    //for input field use .value to inside the input filed
    const depositFiled=document.getElementById('deposit-filed');
    const newDepositAmountString=depositFiled.value ;
    const newDepositAmount=parseFloat(newDepositAmountString);
    
    //step-3:get current the deposit total
    //for non-input(element other than input,textarea)use innerText to get the text;
    const depositTotalElement=document.getElementById('deposit-total');
    const PreviousDepositTotalString=depositTotalElement.innerText;
    const PreviousDepositTotal=parseFloat(PreviousDepositTotalString)

    //step-4:add numbers to set the total deposit
    const currentDepositTotal=PreviousDepositTotal+newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText=currentDepositTotal;

    //step-5:get balance current total
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

     //step-6:calculate current total balance
     const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
     //set the balance total
     balanceTotalElement.innerText=currentBalanceTotal
    //step-7:clear the deposit field
    depositFiled.value=''
});