function add (n1: number, n2:number):number {
    return n1 + n2;
}

function printResult(num: number):undefined{
    console.log(num);
    //return;
    //we can use void and undefined both as return type, if nothing is retured
    //but in case, if you are using undefined as return type, you have to add return statement.
} 

printResult(add(4,5));