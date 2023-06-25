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