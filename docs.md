## Classes

<dl>
<dt><a href="#String">String</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#maxOfTwoNumbers">maxOfTwoNumbers(x, y)</a> ⇒ <code>Number</code></dt>
<dd><p>Takes two numbers as arguments and returns the largest of them.</p>
</dd>
<dt><a href="#maxOfThree">maxOfThree(x, y, z)</a> ⇒ <code>Number</code></dt>
<dd><p>Takes three numbers as arguments and returns the largest of them.</p>
</dd>
<dt><a href="#isCharacterAVowel">isCharacterAVowel(char)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Takes a letter, determines if it&#39;s a vowel</p>
</dd>
<dt><a href="#sumArray">sumArray(arr)</a> ⇒ <code>Number</code></dt>
<dd><p>Takes an array; returns the sum of the items in the array</p>
</dd>
<dt><a href="#multiplyArray">multiplyArray(arr)</a> ⇒ <code>Number</code></dt>
<dd><p>Takes an array; returns the product of the items in the array</p>
</dd>
<dt><a href="#numberOfArguments">numberOfArguments(arg)</a> ⇒ <code>Number</code></dt>
<dd><p>Takes any number of arguments, returns how many were passed</p>
</dd>
<dt><a href="#reverseString">reverseString(stringToReverse)</a> ⇒ <code><a href="#String">String</a></code></dt>
<dd><p>Takes a string, returns the reverse of it.</p>
</dd>
<dt><a href="#findLongestWord">findLongestWord(arrayOfWords)</a> ⇒ <code>Number</code></dt>
<dd><p>Takes an array of words, returns the length of the longest word.</p>
</dd>
<dt><a href="#filterLongWords">filterLongWords(arrayOfWords, i)</a> ⇒ <code>Array</code></dt>
<dd><p>Takes an array of words, returns only the words that are longer than &#39;i&#39; chars.</p>
</dd>
<dt><a href="#characterCounts">characterCounts(stringToCount)</a> ⇒ <code>Object</code></dt>
<dd><p>Takes a string; returns the character count for each letter in the string, regardless of case</p>
</dd>
</dl>

<a name="String"></a>

## String
**Kind**: global class  
<a name="String.reverse"></a>

### String.reverse() ⇒ [<code>String</code>](#String)
String method to reverse an existing string

**Kind**: static method of [<code>String</code>](#String)  
**Returns**: [<code>String</code>](#String) - the reversed string  
**See**: reverseString  
**Example**  
```js
> 'General Assembly'.reverseString()
=> "ylbmessA lareneG"
```
<a name="maxOfTwoNumbers"></a>

## maxOfTwoNumbers(x, y) ⇒ <code>Number</code>
Takes two numbers as arguments and returns the largest of them.

**Kind**: global function  
**Returns**: <code>Number</code> - - the smaller of x and y  
**Hint**: Use the if-else construct available in Javascript.
Do some Googling to figure this out if you forget how conditionals work.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | first number to evaulate |
| y | <code>Number</code> | second number to evaulate |

**Example**  
```js
> maxOfTwoNumbers(99, 5)
=> 99
```
<a name="maxOfThree"></a>

## maxOfThree(x, y, z) ⇒ <code>Number</code>
Takes three numbers as arguments and returns the largest of them.

**Kind**: global function  
**Returns**: <code>Number</code> - - the larger of x, y, and z  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | first number to evaulate |
| y | <code>Number</code> | second number to evaulate |
| z | <code>Number</code> | third number to evaulate |

**Example**  
```js
> maxOfThree(4, 5, 9)
=> 9
```
<a name="isCharacterAVowel"></a>

## isCharacterAVowel(char) ⇒ <code>Boolean</code>
Takes a letter, determines if it's a vowel

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if it is a vowel; false, otherwise
BONUS: this can be done on one line!  

| Param | Type | Description |
| --- | --- | --- |
| char | [<code>String</code>](#String) | string of length 1 |

**Example**  
```js
> isCharacterAVowel('a')
=> true

> isCharacterAVowel('n')
=> false
```
<a name="sumArray"></a>

## sumArray(arr) ⇒ <code>Number</code>
Takes an array; returns the sum of the items in the array

**Kind**: global function  
**Returns**: <code>Number</code> - the sum of the items in the array
BONUS: this can be done on one line!  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | string of length 1 |

**Example**  
```js
> sumArray(1, 2, 3, 4)
=> 10
```
<a name="multiplyArray"></a>

## multiplyArray(arr) ⇒ <code>Number</code>
Takes an array; returns the product of the items in the array

**Kind**: global function  
**Returns**: <code>Number</code> - the product of the items in the array
BONUS: this can be done on one line!  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | string of length 1 |

**Example**  
```js
> multiplyArray(1, 2, 3, 4)
=> 24
```
<a name="numberOfArguments"></a>

## numberOfArguments(arg) ⇒ <code>Number</code>
Takes any number of arguments, returns how many were passed

**Kind**: global function  
**Returns**: <code>Number</code> - the number of arguments passed to the function  

| Param | Type |
| --- | --- |
| arg | <code>\*</code> | 

**Example**  
```js
> numberOfArguments(6, 3, 8, 2, 'bar', 'foo')
=> 6

> numberOfArguments()
=> 0
```
<a name="reverseString"></a>

## reverseString(stringToReverse) ⇒ [<code>String</code>](#String)
Takes a string, returns the reverse of it.

**Kind**: global function  
**Returns**: [<code>String</code>](#String) - the incoming string reversed  

| Param | Type | Description |
| --- | --- | --- |
| stringToReverse | [<code>String</code>](#String) | the string to reverse |

**Example**  
```js
> reverseString('General Assembly')
=> "ylbmessA lareneG"
```
<a name="findLongestWord"></a>

## findLongestWord(arrayOfWords) ⇒ <code>Number</code>
Takes an array of words, returns the length of the longest word.

**Kind**: global function  
**Returns**: <code>Number</code> - the length of the longest word in the array  

| Param | Type | Description |
| --- | --- | --- |
| arrayOfWords | <code>Array</code> | an array of words |

**Example**  
```js
> findLongestWord(['short', 'longest', 'longer'])
=> 7
```
<a name="filterLongWords"></a>

## filterLongWords(arrayOfWords, i) ⇒ <code>Array</code>
Takes an array of words, returns only the words that are longer than 'i' chars.

**Kind**: global function  
**Returns**: <code>Array</code> - a new array of words that are longer than `i` characters long.  

| Param | Type | Description |
| --- | --- | --- |
| arrayOfWords | <code>Array</code> | an array of words |
| i | <code>Number</code> |  |

**Example**  
```js
> filterLongWords(['short', 'longest', 'longer'], 5)
=> ['longest', 'longer']
```
<a name="characterCounts"></a>

## characterCounts(stringToCount) ⇒ <code>Object</code>
Takes a string; returns the character count for each letter in the string, regardless of case

**Kind**: global function  
**Returns**: <code>Object</code> - an object where:

  - the keys are the characters that occur in the string
  - the values are the number of occurrences for each letter, regardless of the case  

| Param | Type | Description |
| --- | --- | --- |
| stringToCount | [<code>String</code>](#String) | the string to enumerate |

**Example**  
```js
> characterCounts('General Assembly');
=> {
  a: 2,
  b: 1,
  e: 3,
  g: 1,
  l: 2,
  m: 1,
  n: 1,
  r: 1,
  s: 2,
  y: 1
}
```
