
//////////////////////18//////////////////////
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
//     const creditsLeft = customerCredits - totalPrice;
//     if(totalPrice > customerCredits) {
//       message = "Insufficient funds!";
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
//     }
//     // Change code above this line
//     return message;
//   }
  
//   console.log(makeTransaction(3000, 5, 23000));
//   console.log(makeTransaction(1000, 3, 15000));
//   console.log(makeTransaction(5000, 10, 8000));
//   console.log(makeTransaction(2000, 8, 10000));
//   console.log(makeTransaction(500, 10, 5000));

////////////////////////////20///////////////////
// function checkStorage(available, ordered) {
//     let message;

//     if(ordered == 0) { message = "There are no products in the order!";
//     } else if(available < ordered) {
//          message = "Your order is too large, there are not enough items in stock!";
//     } else {
//         message = "The order is accepted, our manager will contact you";
//     }
//     return message;
//   }

//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(70, 0));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 250));
//   console.log(checkStorage(150, 0));

///////////////////////21//////////////////////
// function isNumberInRange(start, end, number) {
//     const isInRange = (number >= start && number <=end); // Change this line
  
//     return isInRange;
//   }

//   console.log(isNumberInRange(10, 30, 17));
//   console.log(isNumberInRange(10, 30, 5));
//   console.log(isNumberInRange(20, 50, 24));
//   console.log(isNumberInRange(20, 50, 76));

////////////////////////////33/////////////////
// function formatMessage(message, maxLength) {
//     let result;
//     let changeMessege = message.slice(0, maxLength) + "...";
//     if(message.length > maxLength) {
//         result = changeMessege;
//        } else {
//         result = message;
//        }
  
//     return result;
//   }
//    console.log(formatMessage("Curabitur ligula sapien", 16));
//    console.log(formatMessage("Curabitur ligula sapien", 23));
//    console.log(formatMessage("Vestibulum facilisis purus nec", 20));
//    console.log(formatMessage("Vestibulum facilisis purus nec", 30));
//    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
//    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));


  //////////////////////////36/////////////////////////////
//   function checkForSpam(message) {
//     let result;
//     let normalizedMessage = message.toLowerCase();
//     // Change code below this line
//     if(normalizedMessage.includes("spam") || normalizedMessage.includes("sale")) {
//         result = true;
//     } else {
//         result = false;
//     }
//     // Change code above this line
//     return result;
//   }
  
//   console.log(checkForSpam("Latest technology news"));
//   console.log(checkForSpam("JavaScript weekly newsletter"));
//   console.log(checkForSpam("Get best sale offers now!"));
//   console.log(checkForSpam("Amazing SalE, only tonight!"));
//   console.log(checkForSpam("Trust me, this is not a spam message"));

// let message = "Trust me, this is not a sPam message";
// let normalizedMessage = message.toLowerCase();

// if(normalizedMessage.includes("spam")) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// console.log(normalizedMessage);


// function checkAge(age) {
//     let message;
//     if (age >= 18) { 
//       message = "You are an adult";
//     }
  
//     return "You are a minor";
//   }
  
//   console.log(checkAge(20));
//   console.log(checkAge(8));
//   console.log(checkAge(14));
//   console.log(checkAge(38));

/////////////////////////////Репети///////////////

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if(totalSpent >= 100 && totalSpent < 1000){
//     console.log(`Бронзовий партнер, скидка 2%`);
//     discount = 0.02;
// } else if(totalSpent >= 1000 && totalSpent < 5000) {
//     console.log(`серебряний партнер, скидка 5%`);
//     discount = 0.05;
// } else if(totalSpent >= 5000){
//     console.log(`золотой партнер, скидка 10%`);
//     discount = 0.10;
// } else{
//     discount = 0;
// }

// console.log(`Оформляем заказ на суму ${totalSpent} со скидкой ${discount}`);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// function checkForSpam(message) {
//     let result;
//     const normalized = message.toLowerCase();
//     result = normalized.includes("sale") || normalized.includes("spam");  
//     return result;
//   }

  

//   checkForSpam("Latest technology news");
//   checkForSpam("JavaScript weekly newsletter");
//   checkForSpam("Get best sale offers now!");
//   checkForSpam("Amazing SalE, only tonight!");
//   checkForSpam("Trust me, this is not a spam message");
//   checkForSpam("Get rid of sPaM emails. Our book in on sale!");
//   checkForSpam("[SPAM] How to earn fast money?");

// function checkStorage(available, ordered) {
//     // Change code below this line
  
//     if (ordered === 0) {
//      return "Your order is empty!";
//     } else if (ordered > available) {
//      return "Your order is too large, not enough goods in stock!"; }
  
//      return "The order is accepted, our manager will contact you";
//     // Change code above this line
//   }
  
//   console.log(checkStorage(100, 50));
//   checkStorage(100, 130);
//   checkStorage(70, 0);
//   checkStorage(200, 20);
//   checkStorage(200, 250);
//   checkStorage(150, 0);

// function checkStorage(available, ordered) {
//     // Change code below this line
  
//     if (ordered === 0) {
//      return "Your order is empty!";
//     };
//     if (ordered > available) {
//      return "Your order is too large, not enough goods in stock!"; };
  
//      return "The order is accepted, our manager will contact you";
//   };
  
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(70, 0));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 250));
//   console.log(checkStorage(150, 0));

/////////////////8 MOd2/////////////////////

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

//////////////////9//////////////////////////
// function getExtremeElements(array) {
    // Change code below this line
// const firstElement = array[0];
// const lastElementIndex = array.length - 1;
// const lastElement = array[lastElementIndex];
// const newArray = [firstElement,lastElement]
// console.log(newArray);

// return [array.shift(), array.pop()];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

///////////////////////////10////////////////////////

// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//    words = message.split(delimeter);
//     // Change code above this line
//     return words;
//   }

//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_"));

////////////////////////11//////////////////////////

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  let masive = message.split(" ");
//  console.log(masive);
//  let words = masive.length;
//  return words * pricePerWord;

 
 
//     // Change code above this line
//  }
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

///////////////////////13/////////////////////////////

// function slugify(title) {
//     // Change code below this line
//   let normalized = title.toLowerCase();
  
//   const masive = normalized.split(" ").join("-");

//   return masive;
//     // Change code above this line
//   }
//   console.log(slugify("Arrays for begginers"));

/////////////////////14//////////////////////////

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

///////////////////16////////////////////////////

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// return firstArray.concat(secondArray).slice(0, maxLength);
// // // console.log(names.length);
// // if(names.Length !== maxLength) {
// //     names = names.slice(0, maxLength);
// //  }

//     // Change code above this line
//   }

//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //["Mango", "Poly", "Ajax"]
//   console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); //["Mango", "Poly", "Houston", "Ajax"]
//   console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); //["Mango", "Ajax", "Chelsea"]
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); //["Earth", "Jupiter"]
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); //["Earth", "Jupiter", "Neptune", "Uranus"
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); //[]
//   console.log(makeArray());

//////////////////////////////18//////////////////////////

// function calculateTotal(number) {
//     // Change code below this line
//    let sum = 0;
//    for (let i = 0; i <= number; i += 1) {
//     sum += i;
//    }
//    console.log(sum);
//      // Change code above this line
//    }
//    calculateTotal(1);
//    calculateTotal(3);
//    calculateTotal(7);
//    calculateTotal(18);
//    calculateTotal(24);
//    calculateTotal();

////////////////////////////////20/////////////////////////////

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i += 1){
//         total += order[i];
//     }
//    return total;
//     // Change code above this line
//     // return total;
//   }
  
//  console.log(calculateTotalPrice([12, 85, 37, 4]));

////////////////////////////////21//////////////////////////
// function findLongestWord(string) {
//     // Change code below this line
//   const words = string.split(" ");
//   let wordLength = words[0];
//   for (const word of words) {
//     if(word.length > wordLength.length){
//         wordLength = word;
//     }
//   }
//   return wordLength;
// }
   
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));

////////22/////

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//    for (let i = min; i <= max; i += 1) {
//      numbers.push(i)
//    }
//     // Change code above this line
//     return numbers;
//   }
  
//   console.log(createArrayOfNumbers(1, 3));

//////////23///////

// function filterArray(numbers, value) {
// // return numbers.slice(value);
// let num = [];
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] > value){
//         num.push(numbers[i]);
//     }
// }
//  return num;

// }
 
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

///////24//////

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
    
//     return fruits.includes(fruit); // Change this line
//   }
//   console.log(checkFruit("plum"));

////////25////////

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let masive = [];
//   for(let i = 0; i < array1.length; i += 1){
//     if(array2.includes(array1[i])) {
//          masive.push(array1[i]);
//     }
//   }
//   return masive;
  
//    // Change code above this line
//   }

//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


///////29///////

// function getEvenNumbers(start, end) {
//     // Change code below this line
//  let mas = [];
//  for( let i = start; i <= end; i += 1) {
// if(i % 2 === 0){
//    mas.push(i);
// }
//  }
//  return mas;
// }
 

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));

///////////32///////////////

// function includes(array, value) {
//     // Change code below this line
//   for(let i = 0; i < array.length; i += 1){
//     if(array[i] === value){
//         return array[i] === value;
//     } 
// }
// return false;
//   }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));

// const obj = {
//     a: 1,
//     b: 2,
// }

// const obj1 = Object.create(obj);
// console.log(obj1);

// const developersSalaries = {
//     "Obione": 200,
//     "Yoda": 300,
//     "Koli": 250,

// }

// const entries = Object.entries(developersSalaries);
// console.log(entries);

// for (const ann of entries) {
//     console.log(ann[0]);
//     console.log(ann[1]);
//     console.log("------");
// }


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

//   apartment.owner =  {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   };

//   console.log(apartment);


///////////////11//////////////////////

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }

// console.log(keys, values);

////////////////////12/////////////////////

// function countProps(object) {
//     let propCount = 0;
//     let array = [];
//     // Change code below this line
//     for(let key in object) {
//         if(object.hasOwnProperty(key)) {
//             array.push(key);
//             propCount = array.length;
//         }
//     }
//     // Change code above this line
//     return propCount;
//   }

//   console.log(countProps({}));
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

///////////////////13/////////////////////

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   // Change code below this line
//   const keys = Object.keys(apartment);

//   console.log(keys);
//   const values = [];
//  for(let key of keys){
//     values.push(apartment[key]);
//  }
// console.log(values);

///////////////////19/////////////////

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     let values = [];
//   for (let product of products) {
// if(product[propName]){
//     values.push(product[propName]);
// }
//     // Change code above this line
//   }
//   return values
// }
//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("quantity"));
//   console.log(getAllPropValues("price"));
//   console.log(getAllPropValues("category"));

/////////////////20//////////////////////

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//   for (let product of products) {
//     if(product.name === productName){
//        return product.price * product.quantity;
//     }
//   }
  
//   return 0;
//     // Change code above this line
//   }
  
//   console.log(calculateTotalPrice("Blaster"));
//   console.log(calculateTotalPrice("Radar"));
//   console.log(calculateTotalPrice("Droid"));
//   console.log(calculateTotalPrice("Grip"));
//   console.log(calculateTotalPrice("Scanner"));

//////////////////21///////////////////////////
 
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
//   const {yesterday, today, tomorrow} = highTemperatures;
//   console.log(yesterday, today, tomorrow);
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
//    console.log(meanTemperature);

///////////////24/////////////////

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }

//   console.log(hexColors, rgbColors);

////////////////////////29////////////////


// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};
//   const{theme, public, withPassword, minNumberOfQuestions, timePerQuestion} = finalSettings;
//   console.log(theme, public, withPassword, minNumberOfQuestions, timePerQuestion);

//////////////////30//////////////////////////

// function makeTask(data) {
//     const baseTask = {
//     completed: false,
//     category: "General",
//     priority: "Normal",
//     }
//     const finalTask = {...baseTask, ...data};
//     // Change code below this line
//   return finalTask;
//     // Change code above this line
//   }

//   console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }
//   console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })); //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
//   console.log(makeTask({ category: "Finance", text: "Take interest" })); //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }
//   console.log(makeTask({ priority: "Low", text: "Choose shampoo" })); //{ category: "General", priority: "Low", text: "Choose shampoo", completed: false }
//   console.log(makeTask({ text: "Buy bread" })); //{ category: "General", priority: "Normal", text: "Buy bread", completed: false }

///////////31/////////////
// Change code below this line
// function add(...args) {
//     // Change code above this line
//    let total = 0;
//     for (let arg of args) {
//     total += arg;
//     }
//     return total;
//   }
  
//   console.log(add(15, 27));
//   console.log(add(12, 4, 11, 48));
//   console.log(add(32, 6, 13, 19, 8));
//   console.log(add(74, 11, 62, 46, 12, 36));

/////////////////////////32///////////////////

// Change code below this line
// function addOverNum(a, ...args) {
//     let total = 0;
  
//     for (const arg of args) {
//       if(a < arg){
//         total += arg;
//       } else {
//         total;
//       }
//     }
  
//     return total;
//     // Change code above this line
//   }
  
//   console.log(addOverNum(50, 15, 27));
//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
//   console.log(addOverNum(15, 32, 6, 13, 19, 8));
//   console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

/////////33/////////

// Change code below this line
// function findMatches(array, ...args) {
//     const matches = []; // Don't change this line
//     for (const arg of args) {
//         if(array.includes(arg)){
//             matches.push(arg);
//          }
//     } 
    
//     return matches;
//     }

  
  
//   console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
//   console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

//////////////////35///////////////////
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
//     return this.books;
//     },
//     };

//    console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
//    console.log(bookShelf.updateBook("The last kingdom", "Dune"));

/////////////////41/////////////////////////

const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      const {potions} = this;
      for (const potion of potions) {
        if (potions.name === newPotion.name){
            return `Error! Potion${newPotion} is already in your inventory`;
        }
        this.potions.push(newPotion);
      }
    },
    removePotion(potionName) {
      const potionIndex = this.potions.indexOf(potionName);
  
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      const potionIndex = this.potions.indexOf(oldName);
  
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
  };
  

  console.log(atTheOldToad.getPotions());
  console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
//   console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
//   console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//   console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
//   console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//   console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
//   console.log(atTheOldToad.removePotion("Dragon breath"));
//   console.log(atTheOldToad.removePotion("Speed potion"));
//   console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
//   console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));





  
  

  