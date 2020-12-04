const { it, _ } = require("param.macro");
const R = require("ramda");

function splitPassports(input) {
  return input.split("\n\n");
}

function buildPassport(rawPassport) {
  return rawPassport.split(/\s/).map(it.split(":")) |> new Map(_);
}

function hasRequiredFields(fields, passport) {
  return fields.map(passport.has(_)).every(it === true);
}

function fourDigits(value) {
  return `${value}` |> R.test(/^\d{4}$/);
}
/**
 * byr (Birth Year) - four digits; at least 1920 and at most 2002
 */
function byrPred(passport) {
  const value = passport.get("byr");

  return [fourDigits, v => v >= 1920 && v <= 2002].every(it(value));
}

/**
 * iyr (Issue Year) - four digits; at least 2010 and at most 2020.
 */
function iyrPred(passport) {
  const value = passport.get("iyr");

  return [fourDigits, v => v >= 2010 && v <= 2020].every(it(value));
}

/**
 * eyr (Expiration Year) - four digits; at least 2020 and at most 2030
 */
function eyrPred(passport) {
  const value = passport.get("eyr");

  return [fourDigits, v => v >= 2020 && v <= 2030].every(it(value));
}

/**
 * hgt (Height) - a number followed by either cm or in:
 *  If cm, the number must be at least 150 and at most 193.
 *  If in, the number must be at least 59 and at most 76.
 */
function hgtPred(passport) {
  const value = passport.get("hgt");

  return [
    R.anyPass([R.test(/^.\d+in$/), R.test(/^.\d+cm$/)]),
    v => {
      const isIn = R.test(/.\d+in/, v);
      const h = parseInt(v);

      return isIn ? h >= 59 && h <= 76 : h >= 150 && h <= 193;
    },
  ].every(it(value));
}

/**
 * hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f
 */
function hclPred(passport) {
  const value = passport.get("hcl");

  return R.test(/^#[0-9abcdef]{6}$/, value);
}

/**
 * ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth
 */
function eclPred(passport) {
  const value = passport.get("ecl");

  return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].some(it === value);
}

/**
 * pid (Passport ID) - a nine-digit number, including leading zeroes
 */
function pidPred(passport) {
  const value = passport.get("pid");

  return R.test(/^\d{9}$/, value);
}

const fieldValidators = R.allPass([
  byrPred,
  iyrPred,
  eyrPred,
  hgtPred,
  hclPred,
  eclPred,
  pidPred,
]);

module.exports = {
  splitPassports,
  buildPassport,
  hasRequiredFields,
  fieldValidators,
};
