// ============================================
// SPREAD OPERATOR - COMPREHENSIVE EXAMPLES
// ============================================

// ============================================
// 1. SPREAD IN FUNCTION CALLS
// ============================================

console.log("\n--- SPREAD IN FUNCTION CALLS ---");

// Spread array elements as individual arguments
const numbers = [1, 2, 3, 4, 5];

// Without spread - passing entire array as one argument
function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

// With spread - spread array into individual arguments
console.log("Sum with spread:", sum(...numbers));  // 15

// Find max/min using spread
console.log("Max:", Math.max(...numbers));  // 5
console.log("Min:", Math.min(...numbers));  // 1

// Practical example: dynamic function arguments
function greet(message, ...names) {
    names.forEach(name => console.log(`${message}, ${name}!`));
}

let participants = ["Alice", "Bob", "Charlie"];
greet("Hello", ...participants);
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!


// ============================================
// 2. STRING TO ARRAY USING SPREAD
// ============================================

console.log("\n--- STRING TO ARRAY USING SPREAD ---");

// Convert string to array of characters
let message = "Hello";
let chars = [...message];
console.log("Characters:", chars);  // ['H', 'e', 'l', 'l', 'o']

// String to array of words (using split + spread)
let fullName = "John Doe";
let nameParts = [...fullName];
console.log("Name parts:", nameParts);

// Practical: Anagram checking
function isAnagram(str1, str2) {
    let arr1 = [...str1.toLowerCase()].sort().join('');
    let arr2 = [...str2.toLowerCase()].sort().join('');
    return arr1 === arr2;
}

console.log("Anagram check (listen vs silent):", isAnagram("listen", "silent"));  // true
console.log("Anagram check (hello vs world):", isAnagram("hello", "world"));  // false

// Unique characters from string
let duplicateString = "programming";
let uniqueChars = [...new Set(duplicateString)];
console.log("Unique chars:", uniqueChars);  // ['p', 'r', 'o', 'g', 'a', 'm', 'i', 'n']


// ============================================
// 3. MATH FUNCTIONS WITH SPREAD
// ============================================

console.log("\n--- MATH FUNCTIONS WITH SPREAD ---");

// Math.max/min with dynamic values
let prices = [100, 250, 50, 400, 75];
console.log("Highest price:", Math.max(...prices));  // 400
console.log("Lowest price:", Math.min(...prices));   // 50

// Find average using spread
function calculateAverage(...nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length;
}

let scores = [85, 90, 78, 92, 88];
console.log("Average score:", calculateAverage(...scores));  // 86.6

// Practical: Price range calculator
let productPrices = [299, 599, 1299, 99, 799];
let minPrice = Math.min(...productPrices);
let maxPrice = Math.max(...productPrices);
console.log(`Price range: $${minPrice} - $${maxPrice}`);

// Combining arrays for Math operations
let arrA = [10, 20];
let arrB = [30, 40];
console.log("Max from combined:", Math.max(...arrA, ...arrB));  // 40


// ============================================
// 4. ARRAY METHODS WITH SPREAD (PUSH, CONCAT ALTERNATIVES)
// ============================================

console.log("\n--- ARRAY METHODS WITH SPREAD ---");

// PUSH alternative - add elements without mutating original
let fruits = ["apple", "banana"];

// Old way (mutates original)
let fruits1 = ["apple", "banana"];
fruits1.push("orange", "mango");
console.log("Push (mutates):", fruits1);

// New way with spread (immutable)
let fruits2 = ["apple", "banana"];
let fruitsWithMore = [...fruits2, "orange", "mango"];
console.log("Spread (immutable):", fruits2);  // unchanged
console.log("New array:", fruitsWithMore);   // new array

// CONCAT alternative - merge arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Old concat
let merged1 = arr1.concat(arr2);
console.log("Concat:", merged1);

// Spread merge
let merged2 = [...arr1, ...arr2];
console.log("Spread merge:", merged2);

// Insert elements in middle
let start = [1, 2, 3];
let middle = [4, 5];
let end = [6, 7, 8];
let combined = [...start, ...middle, ...end];
console.log("Insert in middle:", combined);

// Practical: Adding new items to shopping cart
let cart = ["Laptop", "Mouse"];
let newItems = ["Keyboard", "Monitor"];
let updatedCart = [...cart, ...newItems];
console.log("Updated cart:", updatedCart);

// Remove specific element (immutable)
let numbersArr = [1, 2, 3, 4, 5];
let numToRemove = 3;
let filtered = numbersArr.filter(num => num !== numToRemove);
console.log("After removing 3:", filtered);


// ============================================
// 5. OBJECT CLONING NUANCES
// ============================================

console.log("\n--- OBJECT CLONING NUANCES ---");

// Shallow copy - works for flat objects
let person = { name: "John", age: 30 };
let personCopy = { ...person };
personCopy.age = 31;
console.log("Original:", person.age);  // 30 (unchanged)
console.log("Copy:", personCopy.age);  // 31

// Deep copy problem - nested objects
let user = {
    name: "Alice",
    address: {
        city: "NYC",
        zip: "10001"
    }
};

// Shallow copy - nested objects are still referenced!
let shallowCopy = { ...user };
shallowCopy.address.city = "LA";
console.log("Original city:", user.address.city);  // LA (changed!) - BUG

// Deep copy solutions
// Method 1: JSON parse/stringify
let deepCopy1 = JSON.parse(JSON.stringify(user));
deepCopy1.address.city = "Chicago";
console.log("Original after deep copy:", user.address.city);  // LA (correct)

// Method 2: Nested spread
let deepCopy2 = { ...user, address: { ...user.address } };
deepCopy2.address.city = "Boston";
console.log("Original after nested spread:", user.address.city);  // LA (correct)

// Practical: Update nested state in React-style
let state = {
    user: {
        name: "Rahul",
        preferences: {
            theme: "dark",
            notifications: true
        }
    }
};

// Immutable update
let newState = {
    ...state,
    user: {
        ...state.user,
        preferences: {
            ...state.user.preferences,
            theme: "light"
        }
    }
};
console.log("Theme changed:", newState.user.preferences.theme);  // light
console.log("Original theme:", state.user.preferences.theme);    // dark (unchanged)


// ============================================
// 6. PRACTICAL REAL-WORLD EXAMPLES
// ============================================

console.log("\n--- PRACTICAL REAL-WORLD EXAMPLES ---");

// Example 1: Form handling with spread
let initialFormData = {
    username: "",
    email: "",
    password: ""
};

function updateFormData(oldData, newFields) {
    return { ...oldData, ...newFields };
}

let form1 = updateFormData(initialFormData, { username: "john123" });
let form2 = updateFormData(form1, { email: "john@example.com" });
let form3 = updateFormData(form2, { password: "pass123" });
console.log("Final form data:", form3);

// Example 2: API response merging
let apiData = { id: 1, name: "Product", price: 100 };
let userUpdates = { price: 120, inStock: true };
let mergedProduct = { ...apiData, ...userUpdates };
console.log("Merged product:", mergedProduct);

// Example 3: Configuration defaults
let defaultConfig = {
    theme: "light",
    language: "en",
    notifications: true,
    timeout: 3000
};

let userConfig = {
    theme: "dark",
    notifications: false
};

let finalConfig = { ...defaultConfig, ...userConfig };
console.log("Final config:", finalConfig);

// Example 4: Event handling with spread
function handleEvent(event, ...extraData) {
    return {
        type: event.type,
        timestamp: new Date(),
        data: { ...event },
        extras: extraData
    };
}

let mockEvent = { target: "button", id: "btn1" };
let handledEvent = handleEvent(mockEvent, "user clicked", 123);
console.log("Handled event:", handledEvent);

// Example 5: State management (React-like)
let appState = {
    users: [
        { id: 1, name: "Alice", role: "admin" },
        { id: 2, name: "Bob", role: "user" }
    ],
    loading: false,
    error: null
};

// Add user
function addUser(state, newUser) {
    return {
        ...state,
        users: [...state.users, newUser]
    };
}

// Update user
function updateUser(state, userId, updates) {
    return {
        ...state,
        users: state.users.map(user => 
            user.id === userId ? { ...user, ...updates } : user
        )
    };
}

// Remove user
function removeUser(state, userId) {
    return {
        ...state,
        users: state.users.filter(user => user.id !== userId)
    };
}

let stateWithNewUser = addUser(appState, { id: 3, name: "Charlie", role: "user" });
let stateWithUpdatedUser = updateUser(stateWithNewUser, 2, { role: "admin" });
let stateAfterRemove = removeUser(stateWithUpdatedUser, 1);

console.log("Users after all operations:", stateAfterRemove.users);


// ============================================
// 7. ADVANCED SPREAD PATTERNS
// ============================================

console.log("\n--- ADVANCED SPREAD PATTERNS ---");

// Conditional spreading
let conditions = [false, true, false];
let baseArray = [1, 2, 3];
let conditionalArray = [
    ...baseArray,
    ...(conditions[0] ? [4] : []),
    ...(conditions[1] ? [5] : []),
    ...(conditions[2] ? [6] : [])
];
console.log("Conditional spread:", conditionalArray);  // [1, 2, 3, 5]

// Filtering with spread
let products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 699, inStock: false },
    { id: 3, name: "Tablet", price: 449, inStock: true }
];

let inStockProducts = products.filter(p => p.inStock);
let availableProducts = [...inStockProducts];
console.log("Available products:", availableProducts);

// Destructuring with spread in function parameters
function processUser({ name, age, ...rest }) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Rest:", rest);
}

let userData = { 
    name: "John", 
    age: 25, 
    city: "NYC", 
    country: "USA",
    hobbies: ["coding", "gaming"]
};
processUser(userData);

// Array-like objects (strings, NodeList)
let str = "hello";
let arrFromStr = Array.from(str);
let spreadStr = [...str];
console.log("From spread:", spreadStr);  // ['h', 'e', 'l', 'l', 'o']


// ============================================
// 8. COMMON MISTAKES TO AVOID
// ============================================

console.log("\n--- COMMON MISTAKES ---");

// ❌ Mistake 1: Spreading non-iterable
// let obj = { ...123 };  // Error!

// ✅ Correct: Spread works on iterables (arrays, strings)
// let arr = [...123];  // Error!
// let str = [..."123"];  // Correct: ['1', '2', '3']

// ❌ Mistake 2: Forgetting to spread in function call
let nums = [1, 2, 3];
// Math.max(nums);  // NaN - wrong!
// Math.max(...nums);  // 3 - correct!

// ❌ Mistake 3: Shallow copy trap with nested arrays
let original = { items: [1, 2, 3] };
let shallow = { ...original };
shallow.items.push(4);
console.log("Original affected:", original.items);  // [1, 2, 3, 4] - BUG!

// ✅ Correct: Deep copy for nested arrays
let deep = { items: [...original.items] };
deep.items.push(5);
console.log("Original safe:", original.items);  // [1, 2, 3, 4] - correct!

// ❌ Mistake 4: Spread in object overwrites keys incorrectly
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = { ...obj2, ...obj1 };
console.log("Merged b value:", merged.b);  // 2 (obj1 overwrites obj2)

console.log("\n=== ALL EXAMPLES COMPLETED ===");

