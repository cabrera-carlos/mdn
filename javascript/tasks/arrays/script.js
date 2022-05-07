/**
 * Active learning: Printing those products
 */

let total = 0;
// number 1
const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14",
  "Trousers:31.99",
  "Shoes:23.99",
];

console.log(products);
// number 2
for (const product of products) {
  // number 3
  const split = product.split(":");
  // number 4
  const productName = split[0];
  const productPrice = Number(split[1]);
  total += productPrice;
  // number 5
  const itemText = `${productName} - $${productPrice}`;
  console.log(itemText);
  // number 6
}
console.log("Total: $" + total.toFixed(2));

/**
 * Active learning: Top 5 searches
 */

const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.innerHTML = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    // number 1
    myHistory.unshift(searchInput.value);
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      // number 2
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
};

/**
 * Arrays 1
 */
const myArray = ["banana", "apple", "blueberry"];
myArray[0] = "banana2";
myArray[1] = "apple2";
myArray.unshift("mango");
console.log(myArray);

/**
 * Arrays 2
 */
let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
const myArray = myString.split("+");
const arrayLength = myArray.length;
const lastItem = myArray[arrayLength - 1];
console.log(myArray, arrayLength, lastItem);

/**
 * Arrays 3
 */
let myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];
myArray.pop();
myArray.push("Naruto");
myArray.push("Pikachu");
console.log(myArray);

for (let [arrayKey, arrayValue] of myArray.entries()) {
  myArray[arrayKey] = `${arrayValue} (${arrayKey})`;
}
console.log(myArray);
const myString = myArray.join("-");
console.log(myString);

/**
 * Arrays 4
 */
function checkName(birdName) {
  return birdName.startsWith("E");
}

const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];
const indexOfEagles = birds.indexOf("Eagles");
birds.splice(indexOfEagles, 1);
const eBirds = birds.filter(checkName);
console.log(birds, eBirds);
