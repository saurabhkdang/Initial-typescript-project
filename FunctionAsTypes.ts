function add (n1: number, n2:number):number {
    return n1 + n2;
}

function printResult(num: number):undefined{
    console.log(num);
} 

function addAndHandle(n1: number, n2:number, cb: (result:number) => void){
    const result = n1 + n2;
    cb(result);
}

printResult(add(4,5));

let combineValues: (a:number, b:number) => number;
//above line will restrict to store any function with return type number and two number arguments
//into combineValues variable
combineValues = add

console.log(combineValues(7,7));

addAndHandle(3,4,(result) => {
    console.log(result);
})