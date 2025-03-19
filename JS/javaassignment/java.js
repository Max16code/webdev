// full introduction of myself 
let name = "Maxwell";
let age = 39;
let city = "Owerri";

let introduction = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
console.log(introduction);

console.log("10"+5)

let x = 20
let y = 5
console.log(x+y)
console.log(x*y)

console.log("the total is: + 10+5")
console.log(10+5+ " is the total.")
let price = 50
let TotalPriceAfterTax = [price + 5]
 console.log(TotalPriceAfterTax)

let a = "apple"
let b = "banana"

let swap = " interchange " + a + " for " + b + "."
console.log(swap)

console.log("5"*2)

let firstName = "maxwell"
console.log(firstName)

console.log("hello" +" "+"World!")
let greeting = "hello"
 let middleName = "max"
 let hi = "hello" + "max" + ".";
 console.log(hi)

//  assignment
let newsentence = "   Learn JavaScript!   ";
let trimmedSentence = sentence.trim();
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


let email = "amanzeikedi16@gmail.com";

// Find the position of the '@' symbol
let atIndex = email.indexOf("@");

// Extract the username using slice()
let username = email.slice(0, atIndex);

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
