describe('Javabuzz', function() {

  let javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true)
    });

    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true)
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false)
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false)
    });

    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByThreeAndFive(1)).toBe(false)
    });
  });
});