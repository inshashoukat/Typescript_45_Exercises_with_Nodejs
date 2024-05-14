// creating a function with parameters which return a values in string
function city_country(city: string, country: string) : string{
    return `${city}, ${country}`;
}

// calling a function and print the returned value

console.log(city_country("Lahore", "Pakistan"));

console.log(city_country("Paris", "UK"));


console.log(city_country("Berlin", "Germany"));