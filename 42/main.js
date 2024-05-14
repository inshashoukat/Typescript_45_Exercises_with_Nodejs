// Define the function to show magicians names
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_names = ["Shoukat", "Sharjeel", "Qamar"];
var great_magicians = make_great(magicians_names);
show_magician(great_magicians);
