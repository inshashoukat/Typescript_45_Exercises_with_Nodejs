// Making a Array of countries and Print its Original Order
let countriesToVisit:String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);

// Print the Array in Alphabetical Order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// show that the array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);

//Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);

// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the Array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

//Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());

