
// ============================================
// SPREAD, REST & DESTRUCTURING - Practical Examples
// ============================================

// ============================================
// 1. ARRAY DESTRUCTURING
// ============================================

console.log("\n--- ARRAY DESTRUCTURING ---");

// सरल array destructuring | Simple array destructuring
let fruits = ["apple", "banana", "orange"];
let [f1, f2, f3] = fruits;
console.log("First fruit:", f1);  // apple

// Skip middle element
let [first, , third] = fruits;
console.log("First & Third:", first, third);  // apple orange

// Rest operator - बाकी सब को एक array में collect करो
let [primary, ...others] = fruits;
console.log("Primary:", primary);   // apple
console.log("Others:", others);     // ["banana", "orange"]


// ============================================
// 2. OBJECT DESTRUCTURING
// ============================================

console.log("\n--- OBJECT DESTRUCTURING ---");

// Simple object destructuring
let obj={
    
    name:"new_user",
    comment:"default",
    apistatus:10900,
    
    second:{
        user:"new",
        apistatus:"notresponse!📊"
    }
};

// Destructure nested object
let {name, second:{user, apistatus}, ...remaining} = obj;
console.log("Name:", name);              // new_user
console.log("User:", user);              // new
console.log("API Status:", apistatus);   // notresponse!📊
console.log("Remaining:", remaining);    // { comment: "default", ... }


// ============================================
// 3. SPREAD OPERATOR - ARRAYS
// ============================================

console.log("\n--- SPREAD OPERATOR - ARRAYS ---");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combine arrays using spread
let combined = [...arr1, ...arr2];
console.log("Combined:", combined);  // [1, 2, 3, 4, 5, 6]

// Copy array (not reference)
let original = [10, 20, 30];
let copied = [...original];
copied[0] = 100;
console.log("Original:", original);  // [10, 20, 30] - unchanged
console.log("Copied:", copied);      // [100, 20, 30]

// Add elements while spreading
let mixed = [0, ...arr1, 3.5, ...arr2, 7];
console.log("Mixed:", mixed);  // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]


// ============================================
// 4. SPREAD OPERATOR - OBJECTS
// ============================================

console.log("\n--- SPREAD OPERATOR - OBJECTS ---");

let person = { name: "Rahul", age: 25 };
let address = { city: "Delhi", country: "India" };

// Combine objects using spread
let fullProfile = { ...person, ...address };
console.log("Full Profile:", fullProfile);
// { name: "Rahul", age: 25, city: "Delhi", country: "India" }

// Override property while spreading
let employee = { ...person, age: 26, role: "Developer" };
console.log("Employee:", employee);
// { name: "Rahul", age: 26, role: "Developer" }


// ============================================
// 5. REST PARAMETERS IN FUNCTIONS
// ============================================

console.log("\n--- REST PARAMETERS IN FUNCTIONS ---");

// Function with rest parameters - कितने भी arguments ले सकते हैं
function addNumbers(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}

console.log("Sum of 5, 10:", addNumbers(5, 10));           // 15
console.log("Sum of 5, 10, 15, 20:", addNumbers(5, 10, 15, 20));  // 50

// First parameter separate, rest collected
function printInfo(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}

printInfo("Hello", "World", "JavaScript", "Rocks");
// First: Hello
// Rest: ["World", "JavaScript", "Rocks"]


// ============================================
// 6. COMPLETE REAL EXAMPLE
// ============================================

console.log("\n--- REAL WORLD EXAMPLE ---");



// ============================================
// 6. COMPLETE REAL EXAMPLE
// ============================================

console.log("\n--- REAL WORLD EXAMPLE ---");

let response = {
    status: 200,
    data: {
        id: 101,
        name: "Rahul",
        skills: ["Python", "ML", "SQL"]
    }
}

// Destructure nested data
let { status, data: { name: userName, skills } } = response
console.log("Status:", status);        // 200
console.log("User Name:", userName);            // Rahul
console.log("Skills:", skills);        // ["Python", "ML", "SQL"]


// ============================================
// 7. COMBINING ALL THREE
// ============================================

console.log("\n--- COMBINING ALL THREE ---");

let users = [
    { id: 1, name: "Alice", role: "admin", location: "NYC" },
    { id: 2, name: "Bob", role: "user", location: "LA" },
    { id: 3, name: "Charlie", role: "user", location: "Chicago" }
];

// Rest - बाकी सब users
// Destructuring - पहले user का data तोड़ना
// Spread - नया user add करना

let [firstUser, ...remainingUsers] = users;
let { name: firstName, role: firstRole } = firstUser;

console.log("First User:", firstName, "-", firstRole);  // Alice - admin
console.log("Other Users Count:", remainingUsers.length);  // 2

// Add new user with spread
let newUser = { id: 4, name: "Diana", role: "user", location: "Boston" };
let allUsers = [...users, newUser];
console.log("Total Users Now:", allUsers.length);  // 4

// Create report with spread
let reports = [
    { dept: "IT", data: { count: 5, active: 3 } },
    { dept: "HR", data: { count: 3, active: 2 } }
];

// Combine reports
let combinedReport = [...reports];
console.log("Combined Reports Departments:", combinedReport.length);  // 2





show(reports)

//  git add .
//  git commit -m "new update"
// git push
// git remote add origin 


