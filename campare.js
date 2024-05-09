var friuts = ["apple", "orange", "banana", "mango"];
var veg = ["apple", "orange", "banana", "mango"];

if (friuts.length == veg.length) {
    
for (var i = 0; i < friuts.length; i++) {
    if (friuts[i] !== veg[i]) {
       console.log("not match"); 
     break;
    }
    }
}
console.log("match");
