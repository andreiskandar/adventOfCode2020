console.time();
const fs = require('fs');

const data = fs
  .readFileSync('./input/input4.txt')
  .toString()
  .split('\n\n')
  .map((el) => el.replace(/\n/g, ' '));

const isValidByr = (byr) => Number(byr) >= 1920 && Number(byr) <= 2002;
const isValidIyr = (iyr) => Number(iyr) >= 2010 && Number(iyr) <= 2020;
const isValidEyr = (eyr) => Number(eyr) >= 2020 && Number(eyr) <= 2030;

const isValidHgt = (hgt) => {
  const [, h, unit] = hgt.split(/(\d+)/);
  const height = Number(h);
  return unit === 'cm' ? height >= 150 && height <= 193 : height >= 59 && height <= 76;
};

const isValidEcl = (ecl) => {
  return (
    ecl === 'amb' || ecl === 'blu' || ecl === 'brn' || ecl === 'gry' || ecl === 'grn' || ecl === 'hzl' || ecl === 'oth'
  );
};

const isValidPid = (pid) => pid.length === 9;

const isValidHcl = (hcl) => /^#[0-9A-F]{6}$/i.test(hcl);

const completenessCheck = (obj) => requiredKeys.every((key) => key in obj);

const validityCheck = ({ byr, eyr, iyr, hcl, ecl, hgt, pid }) => {
  return (
    isValidByr(byr) &&
    isValidEyr(eyr) &&
    isValidIyr(iyr) &&
    isValidHgt(hgt) &&
    isValidPid(pid) &&
    isValidHcl(hcl) &&
    isValidEcl(ecl)
  );
};
const requiredKeys = ['byr', 'eyr', 'iyr', 'hcl', 'ecl', 'hgt', 'pid'];
const getValidPassport = (data) => {
  // // PART 1
  // return data.reduce((acc, cur) => {
  //   const filteredData = new Set(
  //     cur
  //       .trim()
  //       .split(' ')
  //       .map((entry) => entry.split(':')[0])
  //   );
  //   acc += requiredKeys.every((key) => filteredData.has(key)) ? 1 : 0;
  //   .reduce((acc, cur) => {
  //     const [field, value] = cur.split(':');
  //     acc[field] = value;
  //     return acc;
  //   }, {});
  // const fieldLength = Object.keys(filteredData).length;
  // if (fieldLength === 8) {
  //   acc++;
  // }
  // const cidIsNotExist = !('cid' in filteredData);
  // if (fieldLength === 7 && cidIsNotExist) {
  //   acc++;
  // }
  //   return acc;
  // }, 0);
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // PART 2
  return data.reduce((validPassport, cur) => {
    const filteredData = cur
      .trim()
      .split(' ')
      .map((el) => el.split(':'))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    validPassport.push(completenessCheck(filteredData) && validityCheck(filteredData));
    return validPassport;
  }, []);
};

/*
byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.
*/

console.log('getValidPassport(data):', getValidPassport(data).filter((el) => el).length);
console.timeEnd();
