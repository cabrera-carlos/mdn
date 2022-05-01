/**

Fixing capitalization

In this exercise we have the names of cities in the United Kingdom, but the capitalization is all messed up. We want you to change them so that they are all lower case, except for a capital first letter. A good way to do this is to:

1. Convert the whole of the string contained in the city variable to lower case and store it in a new variable.
2. Grab the first letter of the string in this new variable and store it in another variable.
3. Using this latest variable as a substring, replace the first letter of the lowercase string with the first letter of the lowercase string changed to upper case. Store the result of this replace procedure in another new variable.
4. Change the value of the result variable to equal to the final result, not the city.

*/

// Mine
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (let city of cities) {
  const lower = city.toLowerCase();
  const result = lower.replace(lower[0], lower[0].toUpperCase());
  console.log(result);
}

// MDN
for (let city of cities) {
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0, 1);
  const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}

/**

Making new strings from old parts

In this last exercise, the array contains a bunch of strings containing information about train stations in the North of England. The strings are data items that contain the three-letter station code, followed by some machine-readable data, followed by a semicolon, followed by the human-readable station name.

1. Extract the three-letter station code and store it in a new variable.
2. Find the character index number of the semicolon.
3. Extract the human-readable station name using the semicolon character index number as a reference point, and store it in a new variable.
4. Concatenate the two new variables and a string literal to make the final string.
5. Change the value of the result variable to equal to the final string, not the station.

 */

const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

// Mine
for (let station of stations) {
  const stationCode = station.slice(0, 3);
  const indexRef = station.indexOf(";");
  const stationName = station.slice(indexRef + 1);
  const finalStr = `${stationCode}: ${stationName}`;
  const result = finalStr;
  console.log(station);
  console.log(result);
}

// MDN
for (let station of stations) {
  const code = station.slice(0, 3);
  const semiColon = station.indexOf(";");
  const name = station.slice(semiColon + 1);
  const result = `${code}: ${name}`;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}

/**
Strings 1
In our first strings task, we start off small. You already have half of a famous quote inside a variable called quoteStart; we would like you to:

1. Look up the other half of the quote, and add it to the example inside a variable called quoteEnd.
2. Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called finalQuote.

*/

const quoteStart = "Don't judge each day by the harvest you reap ";
const quoteEnd = " but by the seeds that you plant.";
const finalQuote = quoteStart + quoteEnd;
// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;

section.appendChild(para1);

/**
1. Retrieve the length of the quote, and store it in a variable called quoteLength.
2. Find the index position where substring appears in quote, and store that value in a variable called index.
3. Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.
 */

const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

// Add your code here
const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index + substring.length + 1);

// Don't edit the code below here!

const section = document.querySelector("section");

section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement("p");
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);

/**
Strings 3
In the next string task, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

1. Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
2. In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
3. There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called finalQuote.
 */

const quote = "I dO nOT lIke gREen eGgS anD HAM";
const lower = quote.toLocaleLowerCase();
const fixedQuote = lower.replace(lower[0], lower[0].toUpperCase());
const finalQuote = fixedQuote.replace("green eggs and ham", "broccoli") + ".";

console.log(finalQuote);

/**
Strings 4
In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (*)). We want you to change the value of the string as follows:

1. Change it from a regular string literal into a template literal.
1. Replace the four asterisks with four template literal placeholders. These should be:
  - The name of the theorem.
  - The two number values we have.
  - The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.
 */
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is 
${Math.sqrt(a ** 2 + b ** 2)}.`;

console.log(myString);
