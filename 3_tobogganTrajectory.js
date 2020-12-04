const fs = require('fs');

const data = fs.readFileSync('./input/input3.txt').toString().split('\n');
let x = 0,
  collisions = 0,
  slope1 = 0,
  slope2 = 0,
  slope3 = 0,
  slope4 = 0,
  slope5 = 0;
const rows = data[0].length;

data.forEach((row, idx) => {
  if (data[idx][x % rows] === '#') {
    slope1++;
  }
  x++;
});

x = 0;
data.forEach((row, idx) => {
  if (data[idx][x % rows] === '#') {
    slope2++;
  }
  x += 3;
});

x = 0;
data.forEach((row, idx) => {
  if (data[idx][x % rows] === '#') {
    slope3++;
  }
  x += 5;
});

x = 0;
data.forEach((row, idx) => {
  if (data[idx][x % rows] === '#') {
    slope4++;
  }
  x += 7;
});

x = 0;
for (let i = 0; i < data.length; i += 2) {
  if (data[i][x % rows] === '#') {
    slope5++;
  }
  x += 5;
}
slope1 * slope2 * slope3 * slope4 * slope5; // ?

// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.
collisions; // ?
