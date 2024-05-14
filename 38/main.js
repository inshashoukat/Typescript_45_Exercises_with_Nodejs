// Describe a function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling the function
describe_city("Islamabad");
describe_city("Multan");
describe_city("Texas", "USA");
