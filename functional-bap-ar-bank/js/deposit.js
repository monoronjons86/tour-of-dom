function getInputFiledValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFiledValueString=inputField.value ;
    const inputFiledValue=parseFloat(inputFiledValueString);
    inputField.value=' ';
    return inputFiledValue;
}
function getElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueString=element.innerText;
    const value=parseFloat(elementValueString);
    return value;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount=getInputFiledValueById('deposit-filed')

   
});
