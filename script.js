const form1=document.querySelector("form");
const listGroup=document.querySelector(".list-group");

const getbtn=document.getElementById("addbtn");

getbtn.addEventListener("click",function(event)
{

    event.preventDefault();
    var enteredText= document.getElementById("expense-amount").value;
    //add desc
    var enteredDesc=document.getElementById("description").value;
    //add category
    var categorySelect=document.getElementById("category").value;
    //full list value
    var fullValue= document.createTextNode(enteredText+" "+enteredDesc+" "+categorySelect);
   
    
    //create a list element
    var newLi=document.createElement("li");
    newLi.setAttribute("class" ,"text-center")
    newLi.appendChild(fullValue);
    
    
    //create an edit button
    const editBtn= document.createElement("button");
    editBtn.setAttribute("class","btn btn-primary");
   
    editBtn.innerText="Edit";
   
    //create a delete button
    const dlttBtn= document.createElement("button");
    dlttBtn.setAttribute("class","btn btn-primary");
    
    dlttBtn.innerText="delete";
    
    //append both button to list
    newLi.appendChild(editBtn);
    newLi.appendChild(dlttBtn);
   // listGroup.appendChild(newLi);
    
    //edit and delete events
    editBtn.addEventListener("click",function(event)
     {
  
    document.getElementById("expense-amount").value=enteredText;
    document.getElementById("description").value=enteredDesc;
    //add category
    document.getElementById("category").value=categorySelect;
    newLi.remove();
     });

    dlttBtn.addEventListener("click",function(event)
     {
       listGroup.removeChild(newLi);
     });
     listGroup.appendChild(newLi);
     
     document.getElementById("expense-amount").value="";
     document.getElementById("description").value="";
     document.getElementById("category").value="";
});


