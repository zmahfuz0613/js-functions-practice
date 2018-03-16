/**
 * @author Jason Seminara <js@ga.co>
 * @since 2017-07-12
 */
const jsFunctionsLab = (() => {
  // Question 1
  /**
   * @func maxOfTwoNumbers
   * @desc Takes two numbers as arguments and returns the largest of them.
   * @hint Use the if-else construct available in Javascript.
   * Do some Googling to figure this out if you forget how conditionals work.
   * @param {Number} x - first number to evaulate
   * @param {Number} y - second number to evaulate
   * @returns {Number} - the smaller of x and y
   * @example
> maxOfTwoNumbers(99, 5)
=> 99
   */

  function maxOfTwoNumbers(x, y) {
    // CODE HERE
  }

  // Question 2
  /**
   * @func maxOfThree
   * @desc Takes three numbers as arguments and returns the largest of them.
   * @param {Number} x - first number to evaulate
   * @param {Number} y - second number to evaulate
   * @param {Number} z - third number to evaulate
   * @returns {Number} - the larger of x, y, and z
   * @example
> maxOfThree(4, 5, 9)
=> 9
   */

  function maxOfThree(x, y, z) {
    // CODE HERE
  }

  // Question 3
  /**
   * @func isCharacterAVowel
   * @desc Takes a letter, determines if it's a vowel
   * @param {String} letter - string of length 1
   * @returns {Boolean} true if it is a vowel; false, otherwise
   * BONUS: this can be done on one line!
   * @example
> isCharacterAVowel('a')
=> true

> isCharacterAVowel('n')
=> false
   */

  function isCharacterAVowel(letter) {
    // CODE HERE
  }


  // Question 4
  /**
   * @func sumArray
   * @desc Takes an array; returns the sum of the items in the array
   * @param {Array} arr - string of length 1
   * @returns {Number} the sum of the items in the array
   * BONUS: this can be done on one line!
   * @example
> sumArray(1, 2, 3, 4)
=> 10
   */

  function sumArray(arr) {
    // CODE HERE
  }


  // Question 5
  /**
   * @func multiplyArray
   * @desc Takes an array; returns the product of the items in the array
   * @param {Array} arr - string of length 1
   * @returns {Number} the product of the items in the array
   * BONUS: this can be done on one line!
   * @example
> multiplyArray(1, 2, 3, 4)
=> 24
   */

  function multiplyArray(arr) {
    // CODE HERE
  }


  // Question 6
  /**
   * @func reverseString
   * @desc Takes a string, returns the reverse of it.
   * @param {String} stringToReverse - the string to reverse
   * @returns {String} the incoming string reversed
   * @example
  > reverseString('General Assembly')
  => "ylbmessA lareneG"
   */

  function reverseString(stringToReverse) {
    // CODE HERE
  }

  // Question 7
  /**
   * @func findLongestWord
   * @desc Takes an array of words, returns the length of the longest word.
   * @param {Array} arrayOfWords - an array of words
   * @returns {Number} the length of the longest word in the array
   * @example
> findLongestWord(['short', 'longest', 'longer'])
=> 7
   */

  function findLongestWord(arrayOfWords) {
    // CODE HERE
  }

  // Question 8
  /**
   * @func filterLongWords
   * @desc Takes an array of words, returns only the words that are longer than 'i' chars.
   * @param {Array} arrayOfWords - an array of words
   * @param {Number} i
   * @returns {Array} a new array of words that are longer than `i` characters long.
   * @example
> filterLongWords(['short', 'longest', 'longer'], 5)
=> ['longest', 'longer']
   */

  function filterLongWords(arrayOfWords) {
    // CODE HERE
  }

  // Bonus 1
  /**
   * @method characterCounts
   * @desc Takes a string; returns the character count for each letter in the string, regardless of case
   * @param {String} stringToCount - the string to enumerate
   * @returns {{char:occuranceCount}} an object where:
    - the keys are the characters that occur in the string
    - the values are the number of occurrences for each letter, regardless of the case
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
   * @example
> characterCounts('General Assembly NYC');
=> {
  a: 2,
  b: 1,
  c: 1,
  e: 3,
  g: 1,
  l: 2,
  m: 1,
  n: 2,
  r: 1,
  s: 2,
  y: 2
}

   */

  function characterCounts(stringToCount) {
    // CODE HERE
  }


  // Bonus 2
  /**
   * @func numberOfArguments
   * @desc Takes any number of arguments, returns how many were passed
   * @param {*} arg
   * @returns {Number} the number of arguments passed to the function
   * @example
> numberOfArguments(6, 3, 8, 2, 'bar', 'foo')
=> 6

> numberOfArguments()
=> 0
   */

  function numberOfArguments() {
    // CODE HERE
  }


  /* ******* */
  return {
    characterCounts,
    filterLongWords,
    findLongestWord,
    isCharacterAVowel,
    maxOfThree,
    maxOfTwoNumbers,
    multiplyArray,
    numberOfArguments,
    reverseString,
    sumArray,
  };
})();


if ((typeof module) !== 'undefined') {
  module.exports = jsFunctionsLab;
}
