// changing case
let yeargoal= "i need a max win!!!!!!!"
console.log(yeargoal)
let newgoal=yeargoal.toUpperCase()
console.log(newgoal)

// to lower case
let myName="OBED"
console.log(myName)
let lowMyName=myName.toLowerCase()
console.log(lowMyName)

// trim -removes white spaces from the begiining and end of a string 
let today="   wedn es day   "
let now="wednesday"
console.log(now)
console.log(today.trim())
//  indexof- returns the positional number of a string

let ourName="kenechukwu"
console.log(   ourName.indexOf('h'))

// slice- taking a piece from a whole (say- a slice of pizza, a slice of cake )
clubs="liverpoolarsenalchelsea"
console.log(clubs.slice(0,9))


let wife="asiegbu maki"
// replace wife name with maki

let park="yellowstone";
const index = park.indexOf('stone');
console.log(index)
console.log("GARBAGE!".slice(2))
console.log("RABAGE".replace("B",''));

// class task
// write a javascript program that extracts the domain name from the email
 
// answer
let email= "maxwellikuku@gmail.com";
console.log(email.slice(13));

let emails='obed@gmail.com'
console.log(emails.slice(5))

//  assignment
let newSentence = "   Learn JavaScript!   ";
let trimmedSentence = newSentence.trim();
console.log(trimmedSentence);

let messyText = "   HeLLo WoRLd!   ";
let cleanedText = messyText.trim().toLowerCase();
console.log(cleanedText); 

let sentence = "javascript is fun!";

// Capitalize the first letter of each word
let capitalizedSentence = sentence
  .split(" ") // Split the sentence into an array of words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
  .join(" "); // Join the array back into a sentence

console.log(capitalizedSentence); 


let myEmail = "amanzeikedi16@gmail.com";

// Find the position of the '@' symbol
let atIndex = myEmail.indexOf("@");

// Extract the username using slice()
let username = myEmail.slice(0, atIndex);

console.log(username); 


let fullName = "Obed Chidera";

// Split the full name into an array of words
let nameParts = fullName.split(" ");

// Extract the last name (the last element in the array)
let lastName = nameParts[nameParts.length - 1];

console.log(lastName); 


function replaceBadWithGood(sentence) {
    return sentence.replaceAll("bad", "good");
}

let review = "This is a bad product with a bad design.";
let updatedReview = replaceBadWithGood(review);

console.log(updatedReview); 


// writing javascript program for arithmetics such as Addition, multiplication, modulus, division, multiplication of two numbers 

// for addition
let a=Number(prompt("enter first number"))
let b=Number(prompt("enter second number"))
 let sum= a+b
 console.log(sum)

//  for subtraction
let c=Number(prompt("enter first number"))
let d=Number(prompt("enter second number"))
let answer= c-d
console.log(answer)

// for multiplication
let e=Number(prompt("enter first number"))
let f=Number(prompt("enter first number"))
let product=e*f
console.log(product)

// for division
let g=Number(prompt("enter first number"))
let h=Number(prompt("enter first number"))
let reply=g/h
console.log(reply)

// for modulus
let l=Number(prompt("enter first number"))
let m=Number(prompt("enter first number"))
let response=l%m
console.log(response)


