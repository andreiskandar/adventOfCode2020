const fs = require('fs');

const dataArray = fs.readFileSync('./input/input2.txt').toString().split('\n');

const passwordCounter = (data) => {
  let validPassword = 0;

  data.forEach((policy) => {
    const [numbers, letter, password] = policy.split(' ');
    const [lowerLimit, upperLimit] = numbers.split('-');
    const [pos1, pos2] = numbers.split('-');
    const [constraintLetter] = letter.split(':');

    // part 1
    // const countLetter = password.split('').filter((l) => l === constraintLetter).length;
    // if (countLetter >= lowerLimit && countLetter <= upperLimit) {
    //   validPassword++;
    // }

    // part 2
    if (
      (password.charAt(parseInt(pos1) - 1) === constraintLetter) ^
      (password.charAt(parseInt(pos2) - 1) === constraintLetter)
    ) {
      validPassword++;
    }
  });

  return validPassword;
};
