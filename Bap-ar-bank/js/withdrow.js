/*
 step-1:add event handler with the withdraw button
 step-2: get the withdraw amount amount form the withdraw input filed
 step-2.5: also make sure to convert the input a number by using parse float;
 step-3:Get previous withdraw total
 step-4-5:set total withdraw amount
 step-5:get the previous balance total
 step-6:set the new balance total 
 step-7:clear the input filed;
 

*/

//step-1:add event handler with the withdraw button;
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2:
    const withdrawField=document.getElementById('withdraw-field');
    const newWithDrawAmountString=withdrawField.value ;
    const newWithDrawAmount=parseFloat(newWithDrawAmountString)
    
    //step-3
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

 //step-4
         const currentWithdrawTotal=previousWithdrawTotal+newWithDrawAmount;
         withdrawTotalElement.innerText=currentWithdrawTotal;


    //step-5
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);





    //step-6
    const newBalanceTotal=previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText=newBalanceTotal

         //step-7
         withdrawField.value=' ';


   

});