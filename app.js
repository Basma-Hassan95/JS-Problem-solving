// Concatenation

let firstName = "joe"
let lastName = "Doe";
console.log(firstName + " " + lastName + " " + "is learning javascript!")

// String & Number Concatenation:

let age = 20;
let message = "I am " + age + " years old";
console.log(message)

// Pre-increment:

let x = 5; //6
let y = ++x;
console.log(x , y)

//Post-increment

let a = 5; // 6
let b = a++; // 5
console.log(a, b)

//Pre-decrement & Post-decrement:

let num1 = 10; //11
let num2 = 20; //21
            // 11   +  20
let result = ++num1 + num2++;
console.log(result)

// Intermediate Level Questions:

//BODMAS Rule:

let Result = 10 + 5 * 2 - 6/3;
             // 10 + 10 - 2
             //20 - 2
console.log(Result)

//Mixing Increment and Decrement Operators:

let c = 10; // 11 // 10 //9 //10 
    //11 + 11 - 9 + 9
d = ++c + c-- - --c + c++;
console.log(d);

// Complex Expression with BODMAS & Increment:

let e = 4; // 5 // 6
let f = 3; // 2 // 1
              //4 * 2  +  6 / 2 
              //4 * 2 + 3
let result1 = e++ * --f + ++e / f--;
console.log(result1);

// Advanced Level Questions

//Using Variables & Operators Together: 
             //6 //5
let g = 10, h = 5,  i = 2; //1 //2
           //10 * 6  -  1 +  6 / 1
           //60 - 1 + 6
 let result2 = g * ++h - --i + h-- / i++
console.log(result2)



