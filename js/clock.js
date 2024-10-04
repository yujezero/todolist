const clock=document.querySelector("h2#clock");
function getClocck(){
const date= new Date();
const hours = String(date.getHours()).padStart(2,"0")
const minutes= String(date.getMinutes()).padStart(2,"0")
const seconds = String(date.getSeconds()).padStart(2,"0")
clock.innerText = `${hours}:${minutes}:${seconds} `
}
getClocck()
setInterval(getClocck,1000)
// setInterval(sayHello,5000)
// interval은 '매번'일어나야하는 무언가
//setInterval( 호출하려는 매소드,매 호출 사이 시간)
// setTimeout(sayHello,5000);
//인터벌과 함수는 비슷하지만 기능이 다름
//새로고침하면 ??초뒤에 함수를 동작함. 한번만

//길이가 하나인 문자가 나오면 padstart()를 사용해서
//padding을 추가하고 string의 앞부분을 늘림
//padStrat(문자 길이,문자길이보다 적을시 앞에 추가할 내용)

//number을 string으로 바꾸는 법
//String(이안에 넘버를 작성)