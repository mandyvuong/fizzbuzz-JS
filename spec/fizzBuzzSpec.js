describe('Javabuzz', function() {

  let javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true)
    });

    it('divisible by 3 and 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true)
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false)
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(1)).toBe(false)
    } );
  });
});