const title =document.querySelector("div.hello:first-child h1");


title.style.color="blue";

function handle(){
    console.log("Was Clicked here!");
}

function handled(){
    console.log("Mouse is Here");
}

function handleMouseLeave(){
    title.innerText="Mouse is Gone!";
}

title.addEventListener("click",handle);
title.addEventListener("mouseenter",handled);
title.addEventListener("mouseleave",handleMouseLeave);