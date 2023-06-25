/* const person = {
    name: "saurabh",
    age: 34
}

console.log(person.name); */

/* var person = {
    name: "saurabh",
    age: 34,
    hobbies: ['Sports', 'Cooking']
};

for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
    //console.log(hobby.map()); //ERROR, as hobby is a string, and map works on array
} */

/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
    //Tuple, to only have 2 values with one is number and second is string
} = {
    name: "saurabh",
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'Admin']
    //tupple, if you know that the element will have only any specific length
} */

//person.role.push("admin"); //This is wrong but typescript is not able to catch this error.

//person.role[1] = 3; //as the second element should be string

//person.role = [2, "author",4]; //wrong, this can only have 2 values

/* enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
} */

/* enum Role {
    ADMIN = 1,
    READ_ONLY = "read-only",
    AUTHOR='t'
} */

enum Role {
    ADMIN = 5,
    READ_ONLY, //6
    AUTHOR //7
}

const person = {
    name: "saurabh",
    age: 34,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
}

console.log(person);

if( person.role === Role.AUTHOR) {
    console.log('is author');
}