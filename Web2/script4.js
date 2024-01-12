let a = prompt("Enter First number")

let b = prompt("Enter Second number")

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry this is Not allowed")
}

let sum = parseInt(a) + parseInt(b);
function main(){
let x = 1;
    try{
        console.log("The Sum is ",sum*x)
    }catch(error){
        console.log("Error aya hai bhaian")
    }
}
