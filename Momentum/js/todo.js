
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY="todos";
let toDos = []; // const -> letㅇ로 변경 이전의값들도 저장하기위해

function savingTodo(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // text 값을 String으로 변환

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






const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos != null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // user가 새로 작성한것뿐만아니라 이전의 값들도  localstorege에 담아준다
  parsedToDos.forEach(paintToDo); // array 의 객체마다 실행할수있는 반복문
}