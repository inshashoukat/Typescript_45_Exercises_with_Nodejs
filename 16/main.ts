// Creating a Guest List Array
let guestList = ["Rimsha", "Sonia", "Sawera","Kousar"];

// Making variable for those guest who cant come 
let dontCome  = guestList[1];

// Print the name of guest who cant come 
console.log(dontCome, "Nahi aa sakte hain");

// Add or Remove Values from Guest List Array
guestList.splice(1,1,"Shoukat");

// Message Print for Bigger Table
console.log("Good News ! We have found a Bigger table For Dinner.");

// Adding a new value at starting index of array
guestList.unshift("Sharjeel");

//Adding a new value at ending index of array
guestList.push("Rumaisa");

//Get a middle index of our guest list array
let middleIndex: number =Math.floor (guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex,0,"Insha");

// Print message of updated list
console.log("Updated List of our Guests");

//Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));