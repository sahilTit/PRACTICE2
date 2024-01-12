// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },3500);
//     })
// }
async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.text();
  console.log(data);
}
async function main() {
  console.log("Load Modules");

  console.log("Do Something else");

  console.log("Load Data");

  let Data = await getData();

  console.log(Data);

  console.log("process Data");

  console.log("task 2");
}
main();
