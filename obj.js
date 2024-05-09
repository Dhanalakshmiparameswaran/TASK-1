var person = {
    firstName: "karthigai",
    lastName: "priya",
    age: 21
};
console.log(person.firstName);  
console.log(person.lastName);   
console.log(person.age);
for (let key in person) {
    if (person.hasOwnProperty(key)) { 
        console.log(key + "-" + person[key]);
    }
}
