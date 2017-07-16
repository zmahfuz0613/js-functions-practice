/* eslint-env mocha */

if (typeof(chai) === 'undefined') {
  chai = require('chai');
  x = require('../functions');

  expect = chai.expect;
}


describe('JavaScript Functions Lab', () => {
  describe('#maxOfTwoNumbers()', () => {
    it('should return the max of 2 numbers if the first is smaller', () => {
      // ARRANGE
      const smaller = -40;
      const larger = 5000;
      const expected = larger;

      // ACT
      const actual = x.maxOfTwoNumbers(smaller, larger);

      // ASSERT
      expect(actual).to.eql(expected);
    });

    it('should return the max of 2 numbers if the first is larger', () => {
      // ARRANGE
      const smaller = -40;
      const larger = 5000;
      const expected = larger;

      // ASSERT
      const actual = x.maxOfTwoNumbers(larger, smaller);

      // ACT
      expect(actual).to.eql(expected);
    });

    it('should return the correct answer if the args are equal', () => {
      // ARRANGE
      const smaller = 10;
      const larger = 10;
      const expected = larger;

      // ASSERT
      const actual = x.maxOfTwoNumbers(larger, smaller);

      // ACT
      expect(actual).to.eql(expected);
    });

    it('should even work with letters', () => {
      // ARRANGE
      const smaller = 'a';
      const larger = 'z';
      const expected = larger;

      // ASSERT
      const actual = x.maxOfTwoNumbers(larger, smaller);

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
      const actual = x.maxOfThree(first, second, largest);

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
      const actual = x.maxOfThree(largest, first, second);

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
      const actual = x.maxOfThree(first, largest, second);

      // ACT
      expect(actual).to.eql(expected);
    });


    it('should fail if not given three arguments', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;

      // ASSERT
      // ACT
      expect(() => x.maxOfThree(first, second)).to.throw();
      expect(() => x.maxOfThree(first)).to.throw();
      expect(() => x.maxOfThree()).to.throw();
    });
  });

  describe('#isCharacterAVowel()', () => {
    it('should return a boolean', () => {
      // ARRANGE
      // ASSERT
      // ACT
      expect(x.isCharacterAVowel('a')).to.be.true;
      expect(x.isCharacterAVowel('e')).to.be.true;
      expect(x.isCharacterAVowel('i')).to.be.true;
      expect(x.isCharacterAVowel('o')).to.be.true;
      expect(x.isCharacterAVowel('u')).to.be.true;
      expect(x.isCharacterAVowel('y')).to.be.false;
      expect(x.isCharacterAVowel('x')).to.be.false;
    });
  });

  describe('#sumArray()', () => {
    it('should sum the array', () => {
      // ARRANGE
      const expected = 3827;
      const arr = [900, 400, 400, 10, 17, 2100];

      // ACT
      const actual = x.sumArray(arr);

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#multiplyArray()', () => {
    it('should multiply the array', () => {
      // ARRANGE
      const expected = 5143248e5;
      const arr = [9, 400, 400, 10, 17, 2101];

      // ACT
      const actual = x.multiplyArray(arr);

      // ASSERT
      expect(actual).to.eql(expected);
    });

    it('should produce 0 when multiplied by 0', () => {
      // ARRANGE
      const expected = 0;
      const arr = [9, 400, 400, 10, 17, 2101, 0];

      // ACT
      const actual = x.multiplyArray(arr);

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
      const actual = x.numberOfArguments(...args);

      // ASSERT
      expect(actual).to.eql(expected);
    });

    it('should count the args when given none', () => {
      // ARRANGE
      const expected = 0;

      // ACT
      const actual = x.numberOfArguments();

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#reverseString()', () => {
    it('should deal with spaces appropriately', () => {
      // ARRANGE
      const expected = 'ylbmessA lareneG ';

      // ACT
      const actual = x.reverseString(' General Assembly');

      // ASSERT
      expect(actual).to.eql(expected);
    });

    it('should reverse the string', () => {
      // ARRANGE
      const expected = 'ylbmessA lareneG';

      // ACT
      const actual = x.reverseString('General Assembly');

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#findLongestWord()', () => {
    it('should receive an array of words and return the longest', () => {
      // ARRANGE
      const expected = 7;

      // ACT
      const actual = x.findLongestWord(['short', 'longest', 'longer']);

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });

  describe('#filterLongWords()', () => {
    it('should return only words longer than i', () => {
      // ARRANGE
      const expected = ['longest', 'longer'];

      // ACT
      const actual = x.filterLongWords(['short', 'longest', 'longer'], 5);

      // ASSERT
      expect(actual).to.eql(expected);
    });
  });


  describe('#characterCounts()', () => {
    it('should return the character count for each string', () => {
      // ARRANGE
      const expected = {
        ' ': 1,
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
      const actual = x.characterCounts('General Assembly');

      // ASSERT
      expect(actual).to.deep.eql(expected);
    });
  });
});
