// ===================================================
// 🔰 JavaScript Assignment Operators
// ===================================================



// ===================================================
// 1️⃣ Assignment Operators
// ===================================================

// Addition Assignment
let age1 = 20;
let additionalVal = 100;

age1 += 20;             // age1 = age1 + 20 → 40
age1 += additionalVal;  // age1 = 40 + 100 → 140

// Subtraction Assignment
age1 -= 10;             // 140 - 10 → 130

// Multiplication Assignment
age1 *= 3;              // 130 * 3 → 390

// Division Assignment
age1 /= 2;              // 390 / 2 → 195

// Modulus Assignment
age1 %= 2;              // 195 % 2 → 1

// Exponent Assignment
age1 **= 2;             // 1 ** 2 → 1

console.log(age1);



// ===================================================
// 🔰 JavaScript Relational (Comparison) Operators
// ===================================================



// Less than
console.log(20 < 20);       // false

// Less than or equal
console.log(21 <= 20);      // false

// Greater than
console.log(40 > 40);       // false

// Greater than or equal
console.log(40 >= 39);      // true



// ===================================================
// Equality Operators
// ===================================================

// Equal to (checks value only)
console.log(40 == "40");    // true

// Strict Equal (checks value + type)
console.log(40 === "50");  // false



// ===================================================
// Not Equal Operators
// ===================================================

// Not equal (value only)
console.log(40 != "50");    // true

// Strict not equal (value + type)
console.log(40 !== "40");  // true

console.log(40 !== 50);     // true













/**
 *
 *
 * *********************************************************************************************************
 *
 *
*/










// ✅ WHAT A FRESHER MUST REMEMBER
// | Operator | Meaning            |
// | -------- | ------------------ |
// | `+=`     | Add & assign       |
// | `-=`     | Subtract & assign  |
// | `*=`     | Multiply & assign  |
// | `/=`     | Divide & assign    |
// | `%=`     | Remainder & assign |
// | `**=`    | Power & assign     |




// 🔹 Relational Operators (Interview 🔥)
// | Operator | Meaning                       |
// | -------- | ----------------------------- |
// | `<`      | Less than                     |
// | `<=`     | Less than or equal            |
// | `>`      | Greater than                  |
// | `>=`     | Greater than or equal         |
// | `==`     | Equal (value only ❌)          |
// | `===`    | Strict equal (value + type ✅) |
// | `!=`     | Not equal                     |
// | `!==`    | Strict not equal              |





// ⚠️ VERY IMPORTANT INTERVIEW RULE

// ✅ Always use === instead of ==
// Because == does type conversion

// 40 == "40"   // true  ❌
// 40 === "40"  // false ✅