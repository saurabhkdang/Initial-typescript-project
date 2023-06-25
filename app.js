/* enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
} */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role["READ_ONLY"] = "read-only";
    Role["AUTHOR"] = "t";
})(Role || (Role = {}));
var person = {
    name: "saurabh",
    age: 34,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
console.log(person);
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
