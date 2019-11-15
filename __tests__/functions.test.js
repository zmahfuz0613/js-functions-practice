/* eslint-env jest, browser, node */
/* global expect: true, x:true */


describe('JavaScript Functions Lab', () => {
  let fns;

  beforeAll(() => {
    fns = require('../functions');
  });

  describe('#maxOfTwoNumbers()', () => {
    it('should return the max of 2 numbers if the first is smaller', () => {
      // ARRANGE
      const smaller = -40;
      const larger = 5000;
      const expected = larger;

      // ACT
      const actual = fns.maxOfTwoNumbers(smaller, larger);

      // ASSERT
      expect(actual).toBe(expected);
    });

    it('should return the max of 2 numbers if the first is larger', () => {
      // ARRANGE
      const smaller = -40;
      const larger = 5000;
      const expected = larger;

      // ASSERT
      const actual = fns.maxOfTwoNumbers(larger, smaller);

      // ACT
      expect(actual).toBe(expected);
    });

    it('should return the correct answer if the args are equal', () => {
      // ARRANGE
      const smaller = 10;
      const larger = 10;
      const expected = larger;

      // ASSERT
      const actual = fns.maxOfTwoNumbers(larger, smaller);

      // ACT
      expect(actual).toBe(expected);
    });

    it('should even work with letters', () => {
      // ARRANGE
      const smaller = 'a';
      const larger = 'z';
      const expected = larger;

      // ASSERT
      const actual = fns.maxOfTwoNumbers(larger, smaller);

      // ACT
      expect(actual).toBe(expected);
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
      const actual = fns.maxOfThree(first, second, largest);

      // ACT
      expect(actual).toBe(expected);
    });


    it('should return the max of 3 numbers if the first is the largest', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;
      const largest = 10000;
      const expected = largest;

      // ASSERT
      const actual = fns.maxOfThree(largest, first, second);

      // ACT
      expect(actual).toBe(expected);
    });


    it('should return the max of 3 numbers if the middle is the largest', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;
      const largest = 10000;
      const expected = largest;

      // ASSERT
      const actual = fns.maxOfThree(first, largest, second);

      // ACT
      expect(actual).toBe(expected);
    });


    // it('should fail if not given three arguments', () => {
    //   // ARRANGE
    //   const first = -40;
    //   const second = 5000;

    //   // ASSERT
    //   // ACT
    //   expect(() => fns.maxOfThree(first, second)).to.throw();
    //   expect(() => fns.maxOfThree(first)).to.throw();
    //   expect(() => fns.maxOfThree()).to.throw();
    // });
  });

  describe('#isCharacterAVowel()', () => {
    it('should return a boolean', () => {
      // ARRANGE
      // ASSERT
      // ACT
      expect(fns.isCharacterAVowel('a')).toBe(true);
      expect(fns.isCharacterAVowel('e')).toBe(true);
      expect(fns.isCharacterAVowel('i')).toBe(true);
      expect(fns.isCharacterAVowel('o')).toBe(true);
      expect(fns.isCharacterAVowel('u')).toBe(true);
      expect(fns.isCharacterAVowel('y')).toBe(false);
      expect(fns.isCharacterAVowel('x')).toBe(false);
    });
  });

  describe('#sumArray()', () => {
    it('should sum the array', () => {
      // ARRANGE
      const expected = 3827;
      const arr = [900, 400, 400, 10, 17, 2100];

      // ACT
      const actual = fns.sumArray(arr);

      // ASSERT
      expect(actual).toBe(expected);
    });
  });

  describe('#multiplyArray()', () => {
    it('should multiply the array', () => {
      // ARRANGE
      const expected = 5143248e5;
      const arr = [9, 400, 400, 10, 17, 2101];

      // ACT
      const actual = fns.multiplyArray(arr);

      // ASSERT
      expect(actual).toBe(expected);
    });

    it('should produce 0 when multiplied by 0', () => {
      // ARRANGE
      const expected = 0;
      const arr = [9, 400, 400, 10, 17, 2101, 0];

      // ACT
      const actual = fns.multiplyArray(arr);

      // ASSERT
      expect(actual).toBe(expected);
    });
  });

  describe('#reverseString()', () => {
    it('should deal with spaces appropriately', () => {
      // ARRANGE
      const expected = 'ylbmessA lareneG ';

      // ACT
      const actual = fns.reverseString(' General Assembly');

      // ASSERT
      expect(actual).toBe(expected);
    });

    it('should reverse the string', () => {
      // ARRANGE
      const expected = 'ylbmessA lareneG';

      // ACT
      const actual = fns.reverseString('General Assembly');

      // ASSERT
      expect(actual).toBe(expected);
    });
  });

  describe('#findLongestWord()', () => {
    it('should receive an array of words and return the longest', () => {
      // ARRANGE
      const expected = 7;

      // ACT
      const actual = fns.findLongestWord(['short', 'longest', 'longer']);

      // ASSERT
      expect(actual).toBe(expected);
    });
  });

  describe('#filterLongWords()', () => {
    it('should return only words longer than i', () => {
      // ARRANGE (see snapshot)
      // ACT
      const actual = fns.filterLongWords(['short', 'longest', 'longer'], 5);

      // ASSERT
      expect(actual).toMatchSnapshot();
    });
  });

  describe('#characterCounts()', () => {
    it('should return the letter count for each string', () => {
      // ARRANGE (see snapshot)

      // ACT
      const actual = fns.characterCounts('General Assembly');

      // ASSERT
      expect(actual).toMatchSnapshot();
    });
  });
  
    describe('#numberOfArguments()', () => {
    it('should count the args when given some', () => {
      // ARRANGE
      const expected = 6;
      const args = [6, 3, 'bar', [], {}, () => {}];

      // ACT
      const actual = fns.numberOfArguments(...args);

      // ASSERT
      expect(actual).toBe(expected);
    });

    it('should count the args when given none', () => {
      // ARRANGE
      const expected = 0;

      // ACT
      const actual = fns.numberOfArguments();

      // ASSERT
      expect(actual).toBe(expected);
    });
  });
});
