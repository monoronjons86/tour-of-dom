function getInputFiledValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFiledValueString=inputField.value ;
    const inputFiledValue=parseFloat(inputFiledValueString);
    inputField.value=' ';
    return inputFiledValue;
}
// function getElementValueById(elementId){
//     const element=document.getElementById(elementId);
//     const elementValueString=element.innerText;
//     const value=parseFloat(elementValueString);
//     return value;
// }
function getTextElementValueById(elementId){
    const textElement=document.getElementById(elementId);
    const textElementValueString=textElement.innerText;
    const textElementValue=parseFloat(textElementValueString);
    return textElementValue;

}
function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount=getInputFiledValueById('deposit-filed')

    const previousDepositTotal=getTextElementValueById('Deposit-total');
    const newDepositTotal=previousDepositTotal+newDepositAmount;
    setTextElementValueById('deposit-total',newDepositTotal)
});
