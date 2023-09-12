/* Quick Question 1*/
//what does the following code return?
new Set([1,1,2,2,3,4]); //Returns: Set (4) {1, 2, 3, 4}

/* Quick Question 2 */
//What does the following code return? 
 [...new Set("referee")].join(""); //Return: 'ref'

/* Quick Question 2 */
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// the Map m would become an object with two array keys, both [1,2,3], but one key would have the value true and teh
// second array key would have the value false

/* has Duplicate - write a function that accepts an array and returns true or false if that array contains duplicate */
function hasDuplicate(arr) {
    return [...new Set(arr)].length === arr.length ? false : true;
}

/* vowelCount - write function which accepts string and returns a map where keys are numbers and values are the count of vowels in string */
function vowelCount(str){
    const vowelMap = new Map();
    Array.from(str).map((char) => 'aeiou'.includes(char) ? vowelMap.set(char, vowelMap.get(char) + 1 || 1) : false);
    return vowelMap;
}