const obj = {
    name: "Rahul",

    // Regular function — this = obj ✅
    greetRegular: function () {
        console.log(this.name); // "Rahul"
    },

    // Arrow function — this = window/undefined ❌
    greetArrow: () => {
        console.log(this.name); // undefined
    }
};

obj.greetRegular(); // "Rahul"
obj.greetArrow();   // undefined