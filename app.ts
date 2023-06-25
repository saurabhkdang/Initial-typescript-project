const person1: {
    name: string;
    age: number;
} = {
    name: "saurabh",
    age: 34
}

const person = {
    name: "saurabh",
    age: 34,
    hobbies: ['Sports', 'Cooking']
}

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase());
    //console.log(hobby.map()); //ERROR, as hobby is a string, and map works on array
}