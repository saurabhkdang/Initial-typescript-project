var person = {
    name: "saurabh",
    age: 34,
    hobbies: ['sports', 'cooking'],
    role: [1, 'Admin']
    //tupple, if you know that the element will have only any specific length
};
console.log(person.name);
person.role.push("admin"); //This is wrong but typescript is not able to catch this error.
//person.role[1] = 3; //as the second element should be string
//person.role = [2, "author",4]; //wrong, this can only have 2 values
