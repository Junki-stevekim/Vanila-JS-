// login button,TO-DO list

const loginForm=document.querySelector("#login-form"); // querySelector 로 HTML의 ELEMENTS를 호출
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASS="hidden";  // 자주 사용하는 String은 Upper Case 형태의 변수 선언으로 오타실수를 줄일수있다.
const USERNAME_KEY="username";

function onLoginSubmit(event){
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASS);
const username=loginInput.value;
localStorage.setItem(USERNAME_KEY,username);
paintGreetings();

}


function paintGreetings(){
const username=localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`Hello ${username}` ;
    greeting.classList.remove(HIDDEN_CLASS);
}


const savedUsername=localStorage.getItem(USERNAME_KEY); // 로컬스트리지를 잘 기억하자. 하나의 JS API 어플리케이션(SET(정보를보내주고),GET(정보를 가져오고))

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    greeting.innerText=`Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASS);
}