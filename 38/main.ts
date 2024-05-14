// Describe a function
function describe_city (city: string, country: string = "Pakistan"){
   console.log(`${city} is in ${country}`);
}

// calling the function
describe_city("Islamabad");

describe_city("Multan");

describe_city("Texas", "USA");
