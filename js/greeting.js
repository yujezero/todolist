//queryselector 을 할때는 id를 명확히 구분해야함.
const loginform=document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY ="username"
// const link=document.querySelector("a");

function onLoginSubmin(event){
    event.preventDefault(); //브라우저의 기본동작을 막아줌.
    const username=loginInput.value;
    loginform.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username)
   paintGreetings(username);
}
// function handleLinkClick(evnet){
//     evnet.preventDefault();
//     console.dir(evnet);
// }
 
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText= `HELLO ${username}`;
}

// link.addEventListener("click",handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit",onLoginSubmin)
}else{
    paintGreetings(savedUsername);
    }
