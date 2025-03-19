 
//  let userAge = +prompt("Enter your age")

//  if(userAge >= 18 ){
 
//      document.write("You are an adult")

//  }

//  else{

//     document.write("You are minor")
//  }

//  let number = +prompt("Enter your number: ")

//  if(number % 3 === 0){
 
//     console.log("divisble")

//  }else{

//     console.log("Number is not divisible by 3")
//  }


//  let num1 = +prompt("Enter checking number: ")

//  if(num1 % 2 === 0){
//           document.write("Even")
//  }else{

//    document.write("Odd")
//  }


// let age = +prompt("Enter your age")

// if( age >= 18){

//    document.write("Old Enough")

// }else{

//    document.write("Too Young")
// }

// let name = prompt("Whats your name")

// if( name === "basma"){
//     document.write("Beauty")
// }else{

//    document.write("Get Lost")
// }


// let number1 = +prompt("Enter your one number: ")
// let cal = prompt("Enter your operator")
// let number2 = +prompt("Enter your second number: ")


// if(cal === "-"){

//     document.write(number1 - number2)
// }else if(cal === "+"){

//     document.write(number1 + number2)
// }else if(cal === "/"){
   
//     document.write(number1 / number2)
// }else if(cal === "*"){
   
//     document.write(number1 * number2)
// }else if(cal === "%"){
   
//     document.write(number1 % number2)
// }else{

//     document.write("Nothingness")
// }

let UserInp = +prompt("Enter your time: ")



    if(UserInp >= 0 && UserInp <= 1200 ){
         document.write("Good Morning")
    }else if(UserInp >= 1200 && UserInp<=1700){
        document.write("Good afternoon")
        
    }else if(UserInp >= 1700 && UserInp<=2100){
        document.write("Good Evening")
        
    }else if(UserInp >= 2100 && UserInp<=2359){
        document.write("Good Night")
        
    }
else{

    document.write("Go")
}





