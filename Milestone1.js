//1.Password Validator
// Function to check if passwords match
function checkPasswordMatch(password, confirmPassword) {
    if (password === confirmPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful.");
    }
  }
  
  // Example usage
  checkPasswordMatch("password123", "password123"); // Should log "Password Matched. Password validation Successful."
  checkPasswordMatch("abc123", "xyz456"); // Should log "Password didn't match. Password validation unsuccessful."

  
  //2. Calculator
  // Function to perform arithmetic operation based on operator
function calculator(num1, num2, operator) {
    let result;
    
    // Use switch statement to determine the operation based on operator
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
    
    // Log the result to the console
    console.log("Result:", result);
  }
  
  // Example usage
  calculator(5, 3, "+"); // Should log "Result: 8"
  calculator(10, 4, "-"); // Should log "Result: 6"
  calculator(6, 2, "*"); // Should log "Result: 12"
  calculator(15, 5, "/"); // Should log "Result: 3"
  calculator(10, 0, "/"); // Should log "Result: Infinity"
  calculator(5, 3, "%"); // Should log "Invalid operator"

  

  //3. Color Mixer
  // Function to determine resulting color when two colors are mixed
function mixColors(color1, color2) {
    let result;
    
    // Convert colors to lowercase for case-insensitive comparison
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();
    
    // Use switch statement to determine resulting color based on input colors
    switch (color1 + "-" + color2) {
      case "red-blue":
      case "blue-red":
        result = "purple";
        break;
      case "red-yellow":
      case "yellow-red":
        result = "orange";
        break;
      case "blue-yellow":
      case "yellow-blue":
        result = "green";
        break;
      default:
        result = "Invalid color combination";
    }
    
    // Print the resulting color
    console.log("Resulting color:", result);
  }
  
  // Example usage
  mixColors("red", "blue"); // Should print "Resulting color: purple"
  mixColors("blue", "red"); // Should print "Resulting color: purple"
  mixColors("red", "yellow"); // Should print "Resulting color: orange"
  mixColors("yellow", "red"); // Should print "Resulting color: orange"
  mixColors("blue", "yellow"); // Should print "Resulting color: green"
  mixColors("yellow", "blue"); // Should print "Resulting color: green"
  mixColors("green", "blue"); // Should print "Invalid color combination"

  


  //4. Highest Marks
  // Function to find the highest marks scored by any student
function findHighestMarks(marks) {
    // Initialize a variable to store the highest marks
    let highestMarks = marks[0]; // Assume the first student has the highest marks
    
    // Iterate through the array of marks using a loop
    for (let i = 1; i < marks.length; i++) {
      // Use ternary operator to update highestMarks if current marks are higher
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
    
    // Display the highest marks to the teacher using the console
    console.log("The highest marks scored by any student is:", highestMarks);
  }
  
  // Example usage
  const marks = [85, 92, 78, 96, 88];
  findHighestMarks(marks); // Should display the highest marks to the teacher

  

  //5. Capitalize
  // Function to capitalize the first letter of the name if it's lowercase
function capitalizeFirstLetter(name) {
    // Check if the first character is lowercase using charCodeAt()
    // ASCII value of lowercase letters: a=97, z=122
    // If the first character is lowercase, capitalize it using toUpperCase()
    // Otherwise, return the original string
    return name.charCodeAt(0) >= 97 && name.charCodeAt(0) <= 122 ? name.charAt(0).toUpperCase() + name.slice(1) : name;
  }
  
  // Example usage
  const userName1 = "john"; // Lowercase first letter
  const userName2 = "Alice"; // Uppercase first letter
  
  console.log(capitalizeFirstLetter(userName1)); // Should print "John"
  console.log(capitalizeFirstLetter(userName2)); // Should print "Alice" (unchanged)

  

  //6. Vowel Counter
  // Function to count the number of vowels in a name
function countVowels(name) {
    // Convert the name to lowercase to make the comparison case-insensitive
    name = name.toLowerCase();
    
    // Initialize a variable to store the count of vowels
    let vowelCount = 0;
    
    // Iterate through each character in the name
    for (let i = 0; i < name.length; i++) {
      // Check if the current character is a vowel (a, e, i, o, u)
      if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u') {
        // If the current character is a vowel, increment the vowel count
        vowelCount++;
      }
    }
    
    // Return the total count of vowels in the name
    return vowelCount;
  }
  
  // Example usage
  const userName = "Alice";
  
  console.log("Number of vowels in", userName, ":", countVowels(userName)); // Should print the number of vowels in the name

  


  //7. Remove Duplicates
  // Function to remove duplicate items from the cart
function removeDuplicatesFromCart(cartWithDuplicates) {
    // Create a Set from the cart array to automatically remove duplicates
    const uniqueCart = new Set(cartWithDuplicates);
    
    // Convert the Set back to an array
    const cartWithoutDuplicates = Array.from(uniqueCart);
    
    return cartWithoutDuplicates;
  }
  
  // Example usage
  const cartWithDuplicates = ["Item 1", "Item 2", "Item 1", "Item 3", "Item 2"];
  const cartWithoutDuplicates = removeDuplicatesFromCart(cartWithDuplicates);
  
  console.log("Cart without duplicates:", cartWithoutDuplicates);
  


//8.Inverted right-angled triangle pattern with asterisks
// Function to print inverted right-angled triangle pattern
function printInvertedRightAngleTriangle(i) {
    // Iterate from i to 1 (inclusive)
    for (let row = i; row >= 1; row--) {
      let pattern = '';
      // Append '*' to the pattern 'row' times
      for (let j = 1; j <= row; j++) {
        pattern += '*';
      }
      // Print the pattern
      console.log(pattern);
    }
  }
  
  // Example usage with i = 6
  const i = 6;
  printInvertedRightAngleTriangle(i);

  
  //9. Check for Divisibility
  // Function to print numbers divisible by 3 but not by 2
function printDivisibleByThreeButNotByTwo(numbers) {
    // Iterate through the array using a for loop
    for (let i = 0; i < numbers.length; i++) {
      // Check if the current number is divisible by 3 but not by 2
      if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
        // If yes, print the number
        console.log(numbers[i]);
      }
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  printDivisibleByThreeButNotByTwo(numbers);

  

  //10. Correct a Bug
  // Function to double the quantity of each item in the cart array
function doubleCartQuantities(cart) {
    // Create a new array to store the corrected quantities
    const correctedCart = [];
  
    // Iterate through the cart array
    for (let i = 0; i < cart.length; i++) {
      // Double the quantity of each item and push it to the correctedCart array
      correctedCart.push(cart[i] * 2);
    }
  
    // Return the correctedCart array
    return correctedCart;
  }
  
  // Example usage
  const cart = [1, 2, 3, 4]; // Sample cart array with quantities
  const correctedCart = doubleCartQuantities(cart);
  
  console.log("Original cart:", cart);
  console.log("Corrected cart:", correctedCart);

  

  //11. Unit Converter
  // Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Calculate Fahrenheit using the conversion formula
    const fahrenheit = (celsius * 9/5) + 32;
    
    // Return the calculated Fahrenheit value
    return fahrenheit;
  }
  
  // Example usage
  const celsiusTemperature = 20; // Example temperature in Celsius
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  
  console.log("Temperature in Fahrenheit:", fahrenheitTemperature);



  //12. Calculate rental cost
  // Function to calculate the rental cost based on the number of days rented and car type
function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay;
  
    // Determine the rental cost per day based on the car type
    switch (carType.toLowerCase()) {
      case "economy":
        rentalCostPerDay = 4000;
        break;
      case "midsize":
        rentalCostPerDay = 10000;
        break;
      case "luxury":
        rentalCostPerDay = 20000;
        break;
      default:
        console.log("Invalid car type.");
        return;
    }
  
    // Calculate the total rental cost
    const totalRentalCost = rentalCostPerDay * daysRented;
  
    // Return the total rental cost
    return totalRentalCost;
  }
  
  // Example usage
  const daysRented = 5;
  const carType = "Midsize";
  const rentalCost = calculateRentalCost(daysRented, carType);
  
  if (rentalCost !== undefined) {
    console.log("Total rental cost:", rentalCost);
  }

  

  //13. Bill Spliter
  // Function to calculate the total bill and bill per person
function calculateBill(costPerDish, numberOfPeople) {
    // Calculate the total bill
    const totalBill = costPerDish * numberOfPeople;
    
    // Calculate the bill per person
    const billPerPerson = totalBill / numberOfPeople;
    
    // Return an object containing the total bill and bill per person
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  
  // Example usage
  const costPerDish = 250; // Cost of each dish
  const numberOfPeople = 4; // Number of people sharing the dish
  const billInfo = calculateBill(costPerDish, numberOfPeople);
  
  console.log("Total bill:", billInfo.totalBill);
  console.log("Bill per person:", billInfo.billPerPerson);

  

  //14. Calculate the final order price
  // Arrow function to calculate the total cost of items in the cart
const calculateTotalCost = (cart) => {
    // Initialize total cost
    let totalCost = 0;
  
    // Iterate through each item in the cart
    cart.forEach(item => {
      // Calculate the cost of the item and add it to the total cost
      totalCost += item.unitPrice * item.quantity;
    });
  
    // Return the total cost
    return totalCost;
  }
  
  // Example cart
  const Cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 20, quantity: 3 },
    { unitPrice: 15, quantity: 1 }
  ];
  
  // Calculate total cost of items in the cart
  const totalCost = calculateTotalCost(Cart);
  
  console.log("Total cost of items in the cart:", totalCost);
  


  //15. Calculate the percentage of the discount
  // Arrow function to calculate the percentage discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount amount
    const discountAmount = originalPrice - discountedPrice;
    
    // Calculate the percentage discount
    const discountPercentage = (discountAmount / originalPrice) * 100;
    
    // Round off the discount percentage to two decimal places
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;
    
    // Return the rounded discount percentage
    return roundedDiscountPercentage;
  }
  
  // Example usage
  const originalPrice = 100; // Original price of the product
  const discountedPrice = 80; // Discounted price of the product
  
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  
  console.log("Discount percentage:", discountPercentage + "%");

  

  //16. Generate a random number
  // Self-invoking arrow function to generate a random number between 1 and 100
const randomNumber = (() => {
    // Generate a random number between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
  })();
  
  // Log the generated random number to the console
  console.log("Random number:", randomNumber);

  
  //17. Build a banking application
  // Define a customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 1000 // Initial balance
  };
  
  // Function to deposit money into the customer's account
  function deposit(amount) {
    // Check if the amount is valid (positive)
    if (amount > 0) {
      // Update the balance by adding the deposit amount
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.name}'s account.`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }
  
  // Function to withdraw money from the customer's account
  function withdraw(amount) {
    // Check if the amount is valid (positive and not exceeding the balance)
    if (amount > 0 && amount <= this.balance) {
      // Update the balance by subtracting the withdrawal amount
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from ${this.name}'s account.`);
    } else {
      console.log("Insufficient funds or invalid withdrawal amount.");
    }
  }
  
  // Attach the deposit and withdraw methods to the customer object
  customer.deposit = deposit;
  customer.withdraw = withdraw;
  
  // Example usage
  console.log("Initial balance:", customer.balance);
  customer.deposit(500); // Deposit 500 into John Doe's account
  console.log("Current balance:", customer.balance);
  customer.withdraw(200); // Withdraw 200 from John Doe's account
  console.log("Current balance:", customer.balance);

  



  //19. Validate Password
