const images = [ "0.jpg","1.webp","2.webp"];
const choseImage= images[Math.floor(Math.random()*images.length)]

const bgImage=document.createElement("img");

bgImage.src=`img/${choseImage}`;
document.body.appendChild(bgImage);
//apendchild 는 자바스크립트에서 html에 추가하는기능
