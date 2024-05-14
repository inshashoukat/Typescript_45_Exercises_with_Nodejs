// Array of Current Users
var current_users = ["Iqra", "almas", "SAbiha", "Kanwal", "Insha"];
// Array of New Users
var new_users = ["Rimsha", "Sonia", "Sawera", "Iqra", "Almas"];
//Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for Username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different Messages using If_Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
