document.getElementById('add-btn').addEventListener('click',function(){
const value=document.getElementById('text-input').value;
const container=document.getElementById('parent-container');
const li=document.createElement("li");
li.innerText=value;
li.classList.add("new-li")
container.appendChild(li);
const allList=document.getElementsByClassName("new-li");
for(const items of allList){
    items.addEventListener('click',function(e){
        console.log(e.target);
    });
}
});

document.getElementById('hit').addEventListener('click',function(){
   setInnerText("p-1","bangladesh")
   setInnerText("p-2","India")
   setInnerText("p-3","china")
   setInnerText("p-4","Us")
   const inputValue=getInputValue("text-input")

   
});
function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
function getInputValue(id){
   const value=document.getElementById(id).value;
   return value;


}