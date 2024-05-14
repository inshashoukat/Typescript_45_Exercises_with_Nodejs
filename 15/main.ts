let guestList = ["Rimsha", "Sonia", "Sawera", "Kousar"];

let dontCome = guestList[1];

console.log(dontCome, "Nahi Aaa Sakta");

guestList.splice(1, 1, "Shoukat");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));