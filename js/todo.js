 const toDoForm =document.getElementById("todo-form");
const toDoInput =toDoForm.querySelector("input");
//document.querySelector("#todo-form input")과 같음 id가 todo-form에서 input을 찾음
const toDoList=document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos =[];

function saveTodo(){ 
    
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //JSON.stringify는 모든걸 string으로 바꿔줌

     
}

function deleteTodo(event){
    const li = event.target.parentElement;//클릭된 버튼의 부모
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//todo id와 다른거만 출력
     //parseInt 문자열을 숫자로 바꿔줌
     saveTodo( )
}


function paintTodo(newTodo){

   const li = document.createElement("li"); //li를 만듦
   li.id = newTodo.id;
   const span=document.createElement("span"); //span을 만듦
   span.innerText = newTodo.text; //span의 텍스트를 newTodo로 지정
   const button= document.createElement("button");//button을 만듦
   button.innerText="❌";
   button.addEventListener("click",deleteTodo);//클릭이 되었는지 확인 하는법 eventlistner
   li.appendChild(span); //span을 li의 자식으로 지정
   li.appendChild(button);//버튼을 li의 자식으로 지정
   toDoList.appendChild(li); //li를 ul에 추가함.
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo= toDoInput.value;
    toDoInput.value="";//공백을 준다고 해서newtodo가 비워지는건 아님
    const newTodosObj = {
        text :  newTodo,
        id: Date.now(),
    };
    toDos.push(newTodosObj);// newtodo를 toDos배열에 추가.
    paintTodo(newTodosObj);
    saveTodo();
}
//locallstage는 배열을 넣을 수 없음 오직 '텍스트'만 가능
toDoForm.addEventListener("submit",handleToDoSubmit)


const saveTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos !== null){
    const parsedTodos = JSON.parse(saveTodos) ;
    todos = parsedTodos;// 새로 추가할때 배열이 초기화 되는걸 막기위함;
    parsedTodos.forEach(paintTodo); //배열을 paintodo에 보내줌
}
//JSON.parse는 모든걸 배열로 만들 수 있음    


  