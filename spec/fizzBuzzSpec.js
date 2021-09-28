describe('Fizzbuzz', function() {

  let fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz")
    });

    it('divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz")
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz")
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3, 5 and 15', function() {
      expect(fizzbuzz.says(1)).toEqual(1)
    });
  });
});