var person1 = {
    name: "saurabh",
    age: 34
};
var person = {
    name: "saurabh",
    age: 34,
    hobbies: ['Sports', 'Cooking']
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
    //console.log(hobby.map()); //ERROR, as hobby is a string, and map works on array
}
