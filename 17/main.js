// Creating a Guest List Array
var guestList = ["Rimsha", "Sonia", "Sawera", "Kousar"];
// Making variable for those guest who cant come 
var dontCome = guestList[1];
// Print the name of guest who cant come 
console.log(dontCome, "Nahi aa sakte hain");
// Add or Remove Values from Guest List Array
guestList.splice(1, 1, "Shoukat");
// Message Print for Bigger Table
console.log("Good News ! We have found a Bigger table For Dinner.");
// Adding a new value at starting index of array
guestList.unshift("Sharjeel");
//Adding a new value at ending index of array
guestList.push("Rumaisa");
//Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Insha");
// Print message of updated list
console.log("Updated List of our Guests");
//Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitations to the last two guest on the list 
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
