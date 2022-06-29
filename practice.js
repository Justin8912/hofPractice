// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var result = 0;

  _.each(numbers, function(element) {
    if (element % 5 === 0) {
      result += 1;
    }
  });

  return result;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(element) {
    return element === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(element) {
    return element.slice(0, 1) == letter;
  })
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(element) {
    return element.type === 'cookie';
  })
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(acc, element) {
    return acc + parseFloat(element.price.slice(1, element.length));
  }, 0)
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var objCreator = function(acc, element) {
    if (Object.keys(acc).includes(element['type'])) {
      acc[element['type']] = acc[element['type']] + 1;
    } else {
      acc[element['type']] = 1;
    }

    return acc;
  }

  return _.reduce(desserts, objCreator, {})
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(acc, element) {
    if (element['releaseYear'] < 2000 && element['releaseYear'] >= 1990) {
      acc.push(element.title);
    }

    return acc;
  }, [])
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(acc, element) {
    if (element.runtime < timeLimit) {
      acc = true;
    }
    return acc;
  }, false)
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(element) {
    return element.toUpperCase();
  })
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  // I: A list of objects, and an iterator
  // O: The list of objects with a glutenFree property
  // C: None
  // E: None

  // Strategy: Go through each element and check to see if it contains flour
  // If it does, make gluten-free false

  return _.map(desserts, function(element, i, collection) {
     element['glutenFree'] = !element.ingredients.includes('flour');
     return element;
  })
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(element) {
    element['salePrice'] = '$' + (parseFloat(element.price.slice(1, element.price.length)) * (1 - coupon)).toFixed(2);
    return element;
  })
};
