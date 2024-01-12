// // let a = 5;
// console.log("Script");
// // function factorial(number){
// //     let arr = Array.from(Array(number+1).keys())
// //     console.log(arr.slice(1,))
// //     let c= arr.slice(1,).reduce((a,b)=>{
// //         return a*b
// //     })
// //     console.log(c)
// // }
// // factorial(a)
// let box = document.querySelector(".container").children;

// function getRandomColor() {
//   let val1 = Math.ceil(0 +Math.random()*255);
//   let val2 = Math.ceil(0 +Math.random()*255);
//   let val3 = Math.ceil(0 +Math.random()*255);
//   return `rgb (${val1} ${val2} ${val3})`;
// }
// Array.from(box).forEach((ele) => {
//   ele.style.backgroundcolor = getRandomColor();
//   ele.style.color = getRandomColor();
// });

const fn = () => {
  console.log("Nothing");
};
const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry", fn);
  document.head.append(sc);
};
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
