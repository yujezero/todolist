//queryselector 을 할때는 id를 명확히 구분해야함.
const loginform=document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");


function onLoginSubmin(event){
    event.preventDefault(); //브라우저의 기본동작을 막아줌.
    console.log(loginInput.value)
 
}
loginform.addEventListener("submit",onLoginSubmin)
