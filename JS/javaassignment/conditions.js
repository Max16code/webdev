if (5>4){
    console.log("yes")
}
else{
    console.log("no")
}

let age = 25
if(age>25){
    alert("you can get married")
}
else{
    alert("you cant get married")
}

// conditions are requirements before a block of code can be executed
let weather="raining"
let x=5
if(weather=="raining"){
    console.log("i'll come to loctech")}

    // write a program that takes the age of users and cheakcs if they are eligible to vote
    let votersAge=Number(prompt("enter your age"))
    // prompt is used to take in value from users

    // if(votersAge>=18){
        // console.log("you can vote")
    // }
    // else{
        // console.log(`you have to wait for ${18-votersAge} years`)
    // }
//  lets work on a grade calclator

// first process: colect students score
// given the grading system
// 70-100(A)
// 60-69(B)
// 50-59(C)
// 45-49(D)
// 0-44(F)

let studentScore= Number(prompt("enter your score"))
if(studentScore >=70 && studentScore <=100){
    console.log("your grade is A")
}
else if(studentScore >=60 && studentScore <=69){
    console.log("your grade is B")
}

else if(studentScore >=50 && studentScore <=59){
    console.log("your grade is C")
}

else if(studentScore >=45 && studentScore <=49){
    console.log("your grade is D")
}

else if(studentScore >=0 && studentScore <=44){
    console.log("your grade is F")
}