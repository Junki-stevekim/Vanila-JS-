const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value; // input 값을 새로운 변수에 담아준다.
    toDoInput.value="";

}

toDoFrom.addEventListener("submit",handleToDoSubmit);