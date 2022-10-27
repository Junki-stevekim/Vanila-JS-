
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function savingTodo(){
  localStorage.setItem("todos", JSON.stringify(toDos)); // text 값을 String으로 변환

}



function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove(); // 어떤 버튼을 삭제했는지 알수있다.

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
  toDos.push(newTodo); // 배열로 전송
  paintToDo(newTodo);
  savingTodo(); // newTodo를 local storage 에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);