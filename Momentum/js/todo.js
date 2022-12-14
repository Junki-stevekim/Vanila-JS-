
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY="todos";
let toDos = []; // const -> let으로 변경 이전의값들도 저장하기위해

function savingTodo(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
   // text 값을 String으로 변환

}



function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove(); // 어떤 버튼을 삭제했는지 알수없다.
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // fillter -> return 값이 false인 값을 제외하고 (삭제가아닌) 배열을 새로 구성
  savedToDos();
}


function paintToDo(newTodo) { // Object를 담는 function
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //Object의 Text
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
  const newTodoObj ={
    text:newTodo,        //Object를 만들어 push해주기
    id:Date.now(),        // 각각의 item을 구별
  };
  toDos.push(newTodoObj); // 배열로 전송
  paintToDo(newTodoObj);
  savingTodo(); // newTodo를 local storage 에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);






const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos != null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // user가 새로 작성한것뿐만아니라 이전의 값들도  localstorege에 담아준다
  parsedToDos.forEach(paintToDo); // array 의 객체마다 실행할수있는 반복문
}


