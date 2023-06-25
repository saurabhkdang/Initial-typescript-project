let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Saurabh'

if(typeof userInput === 'string')
userName = userInput;

function generateError(message:string, code:number):never{
    //never return type is for, if any function never returns anything, intentionally.
    throw {//this will end the script
        message: message,
        errorCode: code
    }
}

generateError('An error occured', 500);