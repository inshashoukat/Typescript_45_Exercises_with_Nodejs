// Array of Current Users
let current_users = ["Iqra", "almas", "SAbiha", "Kanwal", "Insha"]

// Array of New Users
let new_users = ["Rimsha", "Sonia", "Sawera", "Iqra", "Almas"]

//Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

// Making a Condition for Username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print Different Messages using If_Else statements
    if(our_condition){
    
         console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})