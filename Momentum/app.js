// login button,TO-DO list

const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASS="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASS);
const username=loginInput.value;
localStorage.setItem(USERNAME_KEY,username);
greeting.innerText=`Hello ${username}`;
greeting.classList.remove(HIDDEN_CLASS);

}



const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    greeting.innerText=`Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASS);
}