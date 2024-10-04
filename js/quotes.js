const quotes =[{
    quote: "The way to get started is to quit talking and begin.",
     author: "Walt Disney",
},
{ quote:"Life is full of ups and downs.",
    author:"인생은 오르막과 내리막으로 가득하다",
},
{
    quote:"Better late than never.",
    author:"늦더라도 안 하는 것보다 낫다."
},
{
    quote:"Past is just past.",
    author:"과거는 과거입니다."
},
{
    quote:"Live as if you were to die tomorrow.",
    author:"그대가 내일 죽는 것처럼 살아라"
},
{
    quote:"Life is not all beer and skittles.",
    author:"인생은 재미만 있는 것은 아니다."
},
{
    quote:"Until death, it is all life.",
    author:"죽을 때까지는 그 모든 게 삶이다."
},
{
    quote:"Don't dwell on the past."
    ,author:"과거에 연연하지 마세요"
},
{
    quote:"The only cure for grief is action."
    ,author:"슬픔의 유일한 치유제는 행동이다."
},
{
    quote:"No sweat, No sweet.",
    author:"땀 없인 달콤함도 없다."
},
{
    quote:"Don't dream, Be it.",
    author:"꿈만 꾸지 말고 꿈이 되어라."
},
{
    quote:"What will be, will be."
    ,author:"일어날 일은 일어나고야 만다."
}
,
{
    quote:"This too shall pass away."
    ,author:"이 또한 지나가리라."
},
{
    quote:"If you can't beat them, join them."
    ,author:"피할 수 없으면 즐겨라."
},
{
    quote:"The time I wasted today is the tomorrow the dead man eager to see yesterday."
    ,author:"내가 헛되이 보낸 오늘은 어제 죽은 이가 그토록 갈망하던 내일이다."
},
{
    quote:"Try your best rather than be the best."
    ,author:"최고가 되기보다는 최선을 다해라"
},
{
    quote:"Nothing ventured, nothing gained."
    ,author:"모험하지 않는다면 얻는 것도 없다."
},
{
    quote:"삶의 파도들이 일어나고 가라앉게 두라 너는 얻을 것도 잃을 것도 없다 너는 바다 그 자체이므로.",
    author:"아슈타바크라"
}
]  
const quote =document.querySelector("#quote span:first-child")
const author =document.querySelector("#quote span:last-child")

const todayQoute = quotes[Math.floor(Math.random()* quotes.length)]

quote.innerText = todayQoute.quote;
author.innerText = todayQoute.author;
//Math.random()은 0~1까지 숫자를 랜덤으로 주워짐 뒤에*숫자를 하면 그 숫자까지 나옴
//우리는 곱하기 10을 하면 숫자를 얻을 수 있다.
//round는 1.1이 있으면 1로 바꿔줌  1.5부터는 2로 바꿔줌
//floor은 1.1~1.9까지 다 1로 바꿔줌