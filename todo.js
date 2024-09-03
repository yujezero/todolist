const toDoForm =document.getElementById("todo-form");
const toDoInput =toDoForm.querySelector("input");
//document.querySelector("#todo-form input")과 같음 id가 todo-form에서 input을 찾음
const toDoList=document.getElementById("toodo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo= toDoInput.value;
    toDoInput.value="";//공백을 준다고 해서newtodo가 비워지는건 아님

}

toDoForm.addEventListener("submit",handleToDoSubmit)