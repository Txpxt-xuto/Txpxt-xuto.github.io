let x = 10;
var name = "Tapat toungsakul";
const pi = 3.14159265;

console.log("Hello")
console.log("Tapat Toungsakul")
console.log("My website")
console.log("ธภัทร ตึ้งสกุล")
console.log("ออโต้")

function add(a, b)
{
    return a+b;
}
console.log(add(3,5));
for(let i = 0;i<5;i++)
{
    console.log(add(11,9));
}

let arr =[1,2,3,4,5];
console.log(arr[4]);
arr.push(1);
console.log(arr);


console.log("0982625255")
console.log("Au To")
console.log("txpxt_xuto")
console.log("txpxt-xuto")
const cursorSmall = document.querySelector('.small');
const cursorBig = document.querySelector('.big');


const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', positionElement)