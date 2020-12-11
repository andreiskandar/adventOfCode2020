const fs = require('fs');

const data = fs
  .readFileSync('./input/input4.txt')
  .toString()
  .split('\n\n')
  .map((el) => el.replace(/[\n]/g, ' '));

const getValidPassport = (data) => {
  return data.reduce((acc, cur) => {
    const filteredData = cur
      .trim()
      .split(' ')
      .reduce((acc, cur) => {
        const [field, value] = cur.split(':');
        acc[field] = value;
        return acc;
      }, {});

    const fieldLength = Object.keys(filteredData).length;
    if (fieldLength === 8) {
      acc++;
    }
    if (fieldLength === 7 && !Object.keys(filteredData).includes('cid')) {
      acc++;
    }
    return acc;
  }, 0);
};

getValidPassport(data);
console.log('getValidPassport(data):', getValidPassport(data));
