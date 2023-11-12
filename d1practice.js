// ==== Vocabulary & Insights ====

  /*
  - Data is anything that is meaningful to the computer
  - There are 8 data types in JavaScript
  - To create/declare a variable you need to use the keyword `let`
  - To assign a value in a variable you need to use the assignment operator (=)
  - To assign a value of one variable to another, you need to use the assignment
  operator to do so. ex: a = 7;, b;, b = a; => b = 7;
  - To initialize a variable, you declare a variable and assign it a value on the same line
  - When JS variables are declared they have an initial value of 'undefined'
  - NaN(Not a number) the result of doing Math with an 'undefined' variable 
  - All variable and function names are case sensitive
  - camelCase is used for multi-word variables in which the first word is lowercase
  and the first letter of each following word is capitalized
  - The 'var' keyword allows variable declarations to be overwritten
  - The 'let' keyword allows you to declare a variable name once
  - The 'const' keyword allows you to declare a variable with a value that cannot be
  re-assigned. ex. const FAV_FOOD = "Spaghetti"
  */

// ==== 1. Commenting ====

  // This is a single-line comment.

  /* This is a multi-
  line comment! */

// ==== 2. Data Types, Declaring Variables, and the Assignment Operator ====
// ==== 3. Re-assigning Variables, Initializing Variables, camelCase Naming ====

  /* undefined */
  let undefinedDefinition =
  "The variable has been declared, but no value has been assigned";
 //ex:
    let exampleUndefined;
    console.log(exampleUndefined);

  /* null */
  let nullDefinition =
  "Represents a variable that is intentionally empty or has no meaningful content";
  //ex:
    let exampleNull = null;
    console.log(exampleNull);

  /* boolean */
  let booleanDefinition =
  "Represents a logical entity, either true or false";
  //ex:
    let exampleBoolean = true;
    console.log(exampleBoolean);
  
  /* string/string-literal */
  let stringDefinition =
  `Represents a series of characters enclosed in single('') or double("") quotes`;
  //ex:
    let exampleString = "Hello, World!";
    console.log(exampleString);

  /* symbol */
  let symbolDefinition =
  "Represents a unique identifier, often used as property keys in objects to avoid naming conflicts";
  //ex:
    let exampleSymbol = Symbol('uniqueKey');
    console.log(exampleSymbol);
  
  /* bigint */
  let bigintDefinition =
  "Represents integers of arbitrary precision, allows you to work with numbers beyond the limits of the regular `number` type";
  //ex:
    let exampleBigint = BigInt(9007199254740991);
    console.log(exampleBigint);
  
  /* number */
  let numberDefinition =
  "Represents both integers and floating-point numbers";
  //ex:
    let exampleNumber = 42.5;
    console.log(exampleNumber);
  
  /* object */
  let objectDefinition =
  "Represents a collection of key-value pairs, it can store various data types";
  //ex:
    let exampleObject = {name: "Jane Doe", age: 30, isFemale: true};
    console.log(exampleObject);

//ex. Using built-in symbols
let testObject = {
  [Symbol.iterator]: function* () { yield 1, yield "Jane", yield false}
}

for (let key of testObject) {
  console.log(key);
  //Output:
  // 1
  // Jane
  // false
}