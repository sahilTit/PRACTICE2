console.log("this is promise");
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("no random number generated");
  } else {
    setTimeout(() => {
      console.log("yes I am Done");
      resolve("Sahil");
    }, 3000);
  }
});
console.log("this is promise");
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("no random number generated 2");
  } else {
    setTimeout(() => {
      console.log("yes I am Done 2");
      resolve("Sahil 2");
    }, 3000);
  }
});
// prom1.then((a) => {
//   console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })
let p3 = Promise.allSettled([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch(err=>{
    console.log(err)
})
