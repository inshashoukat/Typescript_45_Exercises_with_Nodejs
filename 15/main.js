var guestList = ["Rimsha", "Sonia", "Sawera", "Kousar"];
var dontCome = guestList[1];
console.log(dontCome, "Nahi Aaa Sakta");
guestList.splice(1, 1, "Shoukat");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
