//1.......................
let x = "5";
let y = 5;
console.log(x == y);  
console.log(x === y);

//2.....................................
function longestWordLength(words) {
    return Math.max(...words.map(word => word.length));
}

const words = ["JavaScript", "Programming", "Function", "Hoisting"];
console.log(longestWordLength(words)); 
//3..................
function testScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a); 
    console.log(b); 
    console.log(c); 
}

testScope();
