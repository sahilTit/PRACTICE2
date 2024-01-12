/*let random = Math.random();
let a = prompt("enter first number");
let b = prompt("enter second number");
let c = prompt("Enter opreation");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  alert(`the result is${eval(`${a} ${c} ${b}`)}`);
} else {
  alert(`the result is${eval(`${a} ${c} ${b}`)}`);
  c = obj[c];
}
// const Adjective ={
//      b : "",
//      c : "",
//      a : "crazy",
// } 

// const ShopName = {
//     d : "Engine",
//     e : "Foods",
//     f : "Garments",
// }
// const AnotherWord = {
//     g : "bros",
//     h : "Limited",
//     i : "Hub",
// }
var BName = "";
function Adjective(){
    return Math.random("Amazing","Fire","crazy");
}

function ShopName(){
    return Math.random("Engine","Foods","Garments");
}
function AnotherWord(){
    return Math.random("Bros","limited","Hub");
}

// var BName = BName.concat(Adjective," ",ShopName," ",AnotherWord)
// function bussinessName(Name){
//     return Math.random(Name.concat(Adjective," ",ShopName," ",AnotherWord));
// }
// return Name;

// bussinessName(Name);


function bussinessName(BName){
    return BName.concat(Adjective," ",ShopName," ",AnotherWord);
}
bussinessName();
*/
let rand = Math.random();
let first,second,third;

if(rand<.33){
    first = "Crazy"
}else if(rand <.66 && rand>=.33){
    first = "Amazing"
}else{
    first = "Fire"
}

if(rand<.33){
    second = "Engine"
}else if(rand <.66 && rand>=.33){
    second = "Foods"
}else{
    second = "Garments"
}

if(rand<.33){
    third = "Bros"
}else if(rand <.66 && rand>=.33){
    third = "Limited"
}else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)
