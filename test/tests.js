/* eslint-env mocha */
/* global expect,
  maxOfTwoNumbers,
  maxOfThree,
  isCharacterAVowel,
  sumArray,
  multiplyArray,
  numberOfArguments,
  reverseString,
  findLongestWord,
  filterLongWords,
  reverse,
  characterCounts
*/

describe('JavaScript Functions Lab', () => {
  describe('#maxOfTwoNumbers()', () => {
    it('should return the max of 2 numbers if the first is smaller', () => {
      // ARRANGE
      const smaller = -40;
      const larger = 5000;
      const expected = larger;

      // ACT
      const actual = maxOfTwoNumbers(smaller, larger);

      // ASSERT
      expect(actual).to.eql(expected);
    });

    it('should return the max of 2 numbers if the first is larger', () => {
      // ARRANGE
      const smaller = -40;
      const larger = 5000;
      const expected = larger;

      // ASSERT
      const actual = maxOfTwoNumbers(larger, smaller);

      // ACT
      expect(actual).to.eql(expected);
    });
  });

  describe('#maxOfThree()', () => {
    it('should return the max of 3 numbers if the last is the largest', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;
      const largest = 10000;
      const expected = largest;

      // ASSERT
      const actual = maxOfThree(first, second, largest);

      // ACT
      expect(actual).to.eql(expected);
    });


    it('should return the max of 3 numbers if the first is the largest', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;
      const largest = 10000;
      const expected = largest;

      // ASSERT
      const actual = maxOfThree(largest, first, second);

      // ACT
      expect(actual).to.eql(expected);
    });


    it('should return the max of 3 numbers if the middle is the largest', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;
      const largest = 10000;
      const expected = largest;

      // ASSERT
      const actual = maxOfThree(first, largest, second);

      // ACT
      expect(actual).to.eql(expected);
    });


    it('should fail if not given three arguments', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;

      // ASSERT
      // ACT
      expect(() => maxOfThree(first, second)).to.throw();
      expect(() => maxOfThree(first)).to.throw();
      expect(() => maxOfThree()).to.throw();
    });
  });

  describe('#isCharacterAVowel()', () => {
    it('should return a boolean', () => {
      // ARRANGE
      // ASSERT
      // ACT
      expect(isCharacterAVowel('a')).to.be.true;
      expect(isCharacterAVowel('e')).to.be.true;
      expect(isCharacterAVowel('i')).to.be.true;
      expect(isCharacterAVowel('o')).to.be.true;
      expect(isCharacterAVowel('u')).to.be.true;
      expect(isCharacterAVowel('y')).to.be.false;
      expect(isCharacterAVowel('x')).to.be.false;
    });
  });

  describe('#sumArray()', () => {
    it('should sum the array', () => {
      // ARRANGE
      const expected = 3827;
      const arr = [900, 400, 400, 10, 17, 2100];

      // ACT
      const actual = sumArray(arr);

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#multiplyArray()', () => {
    it('should multiply the array', () => {
      // ARRANGE
      const expected = 51408e7;
      const arr = [9, 400, 400, 10, 17, 2101];

      // ACT
      const actual = multiplyArray(arr);

      // ASSERT
      expect(actual).to.eql(expected);
    });

    it('should produce 0 when multiplied by 0', () => {
      // ARRANGE
      const expected = 0;
      const arr = [9, 400, 400, 10, 17, 2101, 0];

      // ACT
      const actual = multiplyArray(arr);

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#numberOfArguments()', () => {
    it('should count the args when given some', () => {
      // ARRANGE
      const expected = 6;
      const args = [6, 3, 'bar', [], {}, () => {}];

      // ACT
      const actual = numberOfArguments(...args);

      // ASSERT
      expect(actual).to.eql(expected);
    });

    it('should count the args when given none', () => {
      // ARRANGE
      const expected = 0;

      // ACT
      const actual = numberOfArguments();

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#reverseString()', () => {
    it('should deal with spaces appropriately', () => {
      // ARRANGE
      const expected = 'ylbmessA lareneG ';

      // ACT
      const actual = reverseString(' General Assembly');

      // ASSERT
      expect(actual).to.eql(expected);
    });

    it('should reverse the string', () => {
      // ARRANGE
      const expected = 'ylbmessA lareneG';

      // ACT
      const actual = reverseString('General Assembly');

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#findLongestWord()', () => {
    it('should receive an array of words and return the longest', () => {
      // ARRANGE
      const expected = 7;

      // ACT
      const actual = findLongestWord(['short', 'longest', 'longer']);

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#filterLongWords()', () => {
    it('should return only words longer than i', () => {
      // ARRANGE
      const expected = ['longest', 'longer'];

      // ACT
      const actual = filterLongWords(['short', 'longest', 'longer'], 5);

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#reverse()', () => {
    beforeEach(() => {
      String.prototype.reverse = reverseString;
    });

    afterEach(() => {
      String.prototype.reverse = undefined;
    });

    it('should reverse a string and be part of the String prototype', () => {
      // ARRANGE
      const expected = 'ylbmessA lareneG';

      // ACT
      const actual = 'General Assembly'.reverse();

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#characterCounts()', () => {
    it('should return the character count for each string', () => {
      // ARRANGE
      const expected = {
        a: 2,
        b: 1,
        e: 3,
        g: 1,
        l: 2,
        m: 1,
        n: 1,
        r: 1,
        s: 2,
        y: 1,
      };

      // ACT
      const actual = characterCounts('General Assembly');

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });
});
