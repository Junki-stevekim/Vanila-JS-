
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");



function deleteTodo(event){
  console.log(event.target.parentElement); // 어떤 버튼을 삭제했는지 알수있다.

}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button"); // button 태그를 생성
  button.innerText="★";
  button.addEventListener("click" ,deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); // button을 li에 생성
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);