class Fizzbuzz {
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  says(number) {
    if (this._isDivisibleBy(number, 15)) {
       return 'FizzBuzz';
    } else if (this._isDivisibleBy(number, 5)) {
       return 'Buzz';
    } else if (this._isDivisibleBy(number, 3)) {
       return 'Fizz';
    } else {
       return number;
    }
  }
}

let fizzBuzz = new FizzBuzz();

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}